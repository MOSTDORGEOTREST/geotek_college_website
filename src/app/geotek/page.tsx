'use client';

import Link from 'next/link';
import styles from './styles.module.css';

export default function Page() {
  const toggleItem = (item: any) => {
    const accordionContent = item.querySelector('.questions__content');

    if (item.classList.contains('accordion-open')) {
      //accordionContent.removeAttribute('style');
      accordionContent.style.height = 0 + 'px';
      item.classList.remove('accordion-open');
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px';
      item.classList.add('accordion-open');
    }
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    const target = event.currentTarget;

    if (!target) return;

    const openItem = document.querySelector('.accordion-open');
    toggleItem(target);

    if (openItem && openItem !== target) {
      toggleItem(openItem);
    }
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <h2 className="section__title-center">
            ГЕОТЕХНИКА – Курсы повышения квалификации
          </h2>
          <div className="section__block">
            <p>
              Программы дополнительной профессиональной подготовки предназначены
              для специалистов строительной отрасли в области
              инженерно-геологических и инженерно-геотехнических изысканий, а
              также проектировщиков фундаментов зданий и сооружений.
            </p>
          </div>
          <div className="section__block">
            <h3>Общие требования к обучающимся</h3>
            <p>Наличие среднего профессионального или высшего образования</p>
            <p>Получение среднего профессионального или высшего образования</p>
          </div>
          <div className="section__block">
            <h3>
              Обучение по программам является одним из условий получения
              свидетельства о допуске саморегулируемых организаций
            </h3>
            <p>«Организация управления инженерными изысканиями»</p>
            <p>«Инженерно-геологические изыскания»</p>
            <p>«Инженерно-геотехнические изыскания»</p>
            <p>
              «Обследование состояния грунтов основания зданий и сооружений»
            </p>
          </div>
          <div className="section__block">
            <p>
              Основной целью обучения является обновление теоретических и
              практических знаний руководителей и специалистов в области
              инженерных изысканий для строительства в связи с повышением
              требований к уровню квалификации и необходимостью освоения
              современных методов решения профессиональных задач.
            </p>
          </div>
          <div className="section__block">
            <p>
              Материалы программ позволяют ознакомить слушателей с новыми
              решениями в отечественной и зарубежной практике инженерных
              изысканий, совершенствовать знания в области нормативных и
              правовых аспектов изыскательской деятельности, современных методов
              и технических средств производства изысканий.
            </p>
          </div>
          <div className="section__block">
            <p>
              Слушатели имеют возможность усвоить современные приемы работы с
              применением компьютерной техники и использованием систем
              автоматизации инженерных изысканий. Практическая часть программы
              направлена на получение слушателями профессиональных навыков
              работы с программным комплексом численного моделирования грунтовых
              оснований PLAXIS. В результате прохождения программы обучающиеся
              осваивают нелинейные модели грунтов (Hardening Soil, Hardening
              Soil Small-strain, Soft Soil, Soft Soil Creep и др.), знакомятся с
              практическими лабораторными технологиями получения входных
              параметров моделей грунтов.
            </p>
          </div>
          <div className="section__block">
            <p>
              По окончании дополнительных профессиональных программ повышения
              квалификации слушателям выдается диплом о повышении квалификации
              установленного государственного образца. Образовательный процесс
              осуществляется на русском языке.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- ===================== TYPES ===================== --> */}
      <div className={`types section container`} id="types">
        <div className={styles.types__bg}>
          <h2 className={`section__title-center ${styles.types__title}`}>
            Типы дополнительных образовательных программ
          </h2>

          <div className={`${styles.types__container} grid`}>
            <Link href="geotek/prog1" className={styles.types__card}>
              <div className={styles.types__card_title__wrapper}>
                <h3 className={styles.types__card_title}>
                  Технология лабораторных определений параметров нелинейных
                  моделей грунтов, используемых в программных комплексах
                  численного моделирования оснований зданий и сооружений
                </h3>
              </div>
              <p className={styles.types__card_description}>
                72 академических часа
              </p>
              <p className={styles.types__card_description}>
                Очная форма обучения
              </p>
              <p className={styles.types__card_description}>15 обучающихся</p>
              <button
                className={`button button--flex ${styles.types__card_btn}`}
              >
                Подробнее
              </button>
            </Link>
            <Link href="geotek/prog2" className={styles.types__card}>
              <div className={styles.types__card_title__wrapper}>
                {/* <div className="types__card-number">1</div> */}
                <h3 className={styles.types__card_title}>
                  Теоретические основы и практическая методика лабораторных
                  определений входных параметров расчетных моделей программных
                  комплексов, основанных на методе конечных элементов (МКЭ).
                  Программный комплекс PLAXIS
                </h3>
              </div>
              <p className={styles.types__card_description}>
                72 академических часа
              </p>
              <p className={styles.types__card_description}>
                Очная форма обучения
              </p>
              <p className={styles.types__card_description}>78 обучающихся</p>
              <button
                className={`button button--flex ${styles.types__card_btn}`}
              >
                Подробнее
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* =================== ОТЗЫВЫ ================= */}
      <div className="questions section" id="questions">
        <h2 className="section__title-center questions__title container">
          Отзывы слушателей
        </h2>

        <div className="questions__container container grid">
          <div className="questions__group">
            <div className="questions__item" onClick={handleClick}>
              <header className="questions__header">
                <p>
                  <svg
                    className="questions__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                  </svg>
                </p>
                <h3 className="questions__item-title">
                  Светлана
                  <p className="questions__item-title_sub">
                    Археолог ООО «НИиПИ Спецреставрация» <br /> г.
                    Санкт-Петербург
                  </p>
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Помимо основной своей деятельности в качестве археолога
                  (специализируюсь на археологии Санкт-Петербурга), я являюсь
                  экспертом по проведению государственной историко-культурной
                  экспертизы. В частности, экспертизы разделов по обеспечению
                  сохранности объектов культурного наследия, расположенных в
                  границах территорий, прилегающих или совпадающих с земельными
                  участками, где предполагается новое строительство. Важной
                  частью этих разделов является расчет возможных деформаций
                  существующих зданий и сооружений при демонтажных работах на
                  соседних участках, нулевом цикле, в ходе дальнейшего
                  строительства и мониторинга. Для того, чтобы проводить
                  экспертизу, я должна понимать, что пишут в разделе по этому
                  поводу. Поскольку практический опыт за несколько лет уже
                  накопился (вижу, у кого расчеты и сам раздел выполнены
                  качественно, у кого – нет), возникла потребность подкрепить
                  его теоретическими и более глубокими знаниями предмета.
                </p>
                <p className="questions__description">
                  Конечно, мне, как человеку с гуманитарным образованием,
                  неожиданно для организаторов появившемуся на курсах, было
                  довольно сложно понимать технический материал, но я старалась,
                  и на третий день уже появились вопросы, а это хороший знак.
                </p>
                <p className="questions__description">
                  Я считаю, что предварительные исследования и последующая
                  работа геотехника для любого предстоящего строительства
                  чрезвычайно важны. Специалисту-расчетчику требуется
                  достаточное количество знаний, профессиональное мастерство,
                  опыт и, порой, чутье. Курсы приносят несомненную пользу.
                </p>
              </div>
            </div>
          </div>

          <div className="questions__group">
            <div className="questions__item" onClick={handleClick}>
              <header className="questions__header">
                <p>
                  <svg
                    className="questions__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                  </svg>
                </p>

                <h3 className="questions__item-title">
                  Максим
                  <p className="questions__item-title_sub">
                    Ведущий инженер Лаборатории геомассивов, оснований и
                    фундаментов мостов Филиала АО ЦНИИС «НИЦ «Мосты»
                  </p>
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Проходил курс повышения квалификации. Хотелось бы отметить
                  хорошую организацию, которая дала возможность максимально
                  углубиться в изучение материала. Четко построенная программа
                  обучения и выступления квалифицированных докладчиков позволили
                  получить ответы на все вопросы.
                </p>
                <p className="questions__description">
                  Данный курс может быть полезен в освоении программного
                  комплекса PLAXIS как начинающим специалистам, так и уже
                  имеющим опыт. Хотелось бы выразить слова благодарности всем
                  организаторам данного мероприятия и пожелать сил на подготовку
                  следующих проектов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
