#!/bin/bash

# Путь к проекту
PROJECT_PATH=~/geotek_college_website

# Логирование действий
LOG_FILE="$PROJECT_PATH/update.log"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "=== Начало обновления проекта: $(date) ==="

# Переход в директорию проекта
cd "$PROJECT_PATH" || { echo "Ошибка: Не удалось перейти в директорию проекта"; exit 1; }

# Функция для выполнения команд с проверкой на ошибки
execute_command() {
    local command="$1"
    echo "Выполнение команды: $command"
    eval "$command"
    if [ $? -ne 0 ]; then
        echo "Ошибка при выполнении команды: $command"
        return 1
    fi
    return 0
}

# Шаг 1: Git pull
echo "Шаг 1: Выполняем git pull..."
if ! execute_command "git pull"; then
    echo "Git pull не удался. Пробуем сделать git stash и повторить попытку."
    execute_command "git stash" || { echo "Ошибка: Не удалось выполнить git stash"; exit 1; }
    execute_command "git pull" || { echo "Ошибка: Git pull не удался даже после git stash"; exit 1; }
fi

# Шаг 2: Компиляция Next.js через Docker Compose
echo "Шаг 2: Выполняем компиляцию Next.js..."
execute_command "docker-compose run --rm app sh -c 'npm install && npm run build'" || {
    echo "Ошибка: Компиляция Next.js завершилась неудачей";
    exit 1;
}

# Шаг 3: Обновление и перезапуск проекта
echo "Шаг 3: Обновляем и перезапускаем проект..."

# Минимизация времени простоя: создаем новый контейнер перед остановкой старого
TEMP_CONTAINER="temp_geotek_container"
execute_command "docker-compose up --force-recreate --build -d --scale app=2 app" || {
    echo "Ошибка: Не удалось запустить временный контейнер";
    exit 1;
}

# Ждем, пока новый контейнер будет готов (например, проверяем статус через healthcheck или порт)
echo "Ожидание готовности нового контейнера..."
sleep 10 # Можно заменить на более умную проверку, например, curl до домена

# Останавливаем старый контейнер
echo "Останавливаем старый контейнер..."
execute_command "docker-compose stop app" || {
    echo "Ошибка: Не удалось остановить старый контейнер";
    exit 1;
}

# Удаляем старый контейнер
execute_command "docker-compose rm -f app" || {
    echo "Ошибка: Не удалось удалить старый контейнер";
    exit 1;
}

# Удаляем временный контейнер
echo "Удаляем временный контейнер..."
execute_command "docker rm -f $TEMP_CONTAINER" || {
    echo "Ошибка: Не удалось удалить временный контейнер";
    exit 1;
}

# Возвращаем масштаб контейнеров к одному
execute_command "docker-compose up -d --scale app=1" || {
    echo "Ошибка: Не удалось вернуть масштаб контейнеров к одному";
    exit 1;
}

echo "=== Обновление успешно завершено: $(date) ==="