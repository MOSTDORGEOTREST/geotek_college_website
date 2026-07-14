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




echo "Шаг 3: Проверяем и инициализируем ACME сертификаты..."
execute_command "bash scripts/acme-init.sh" || {
    echo "Ошибка: Не удалось инициализировать ACME сертификаты";
    exit 1;
}

echo "Шаг 4: Запускаем контейнеры..."
execute_command "docker compose up --force-recreate --build -d" || {
    echo "Ошибка: Не удалось запустить контейнеры";
    exit 1;
}

echo "=== Обновление успешно завершено: $(date) ==="