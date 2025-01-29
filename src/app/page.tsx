'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="section">
        <div className="container">
          <h2 className="section__title-center">
            Негосударственное образовательное частное учреждение дополнительного
            профессионального образования <br /> &quot;Геотэк-Колледж&quot;
            (НОЧУ ДПО &quot;Геотэк-Колледж&quot;)
          </h2>
          <div className="section__block">
            <p>
              НОЧУ ДПО &quot;Геотэк-Колледж&quot; – негосударственное
              образовательное частное учреждение дополнительного
              профессионального образования, основанное в 1996 году. Колледж
              обладает бессрочной лицензией Департамента образования г. Москвы.
            </p>
          </div>
        </div>
      </div>
      <div className="about section">
        <div className="container">
          <div className="about__container grid">
            <div className="about__data">
              <h2 className="section__title about__title">
                Основные направления деятельности
              </h2>

              <div className="about__details">
                <div className="about__details-description">
                  <div className="about__details-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                    </svg>
                  </div>
                  Обучение за рубежом.
                </div>
                <div className="about__details-description">
                  <div className="about__details-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                    </svg>
                  </div>
                  Дополнительное образование (курсы иностранных языков:
                  английский, немецкий).
                </div>
                <div className="about__details-description">
                  <div className="about__details-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                    </svg>
                  </div>
                  Дополнительное профессиональное образование (курсы повышения
                  квалификации в области геотехники).
                </div>
              </div>
            </div>
            <Image
              src={'/01_main_01.jpg'}
              alt="main"
              className="about__img"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
      <div className="about section">
        <div className="container">
          <div className="about__container grid">
            <Image
              src={'/01_main_03.png'}
              alt="main"
              className="about__img"
              width={1920}
              height={1080}
            />

            <div className="about__data">
              <h2 className="section__title about__title">
                Ключевые преимущества
              </h2>

              <div className="about__details">
                <div className="about__details-description">
                  <div className="about__details-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                    </svg>
                  </div>
                  Программы, адаптированные под индивидуальные потребности
                  обучающихся.
                </div>
                <div className="about__details-description">
                  <div className="about__details-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                    </svg>
                  </div>
                  Занятия в мини-группах и индивидуально.
                </div>
                <div className="about__details-description">
                  <div className="about__details-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                    </svg>
                  </div>
                  Профессиональный подход и высокая квалификация консультантов.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="section__block">
            <p>
              Колледж активно содействует повышению профессиональных навыков и
              образовательной мобильности, приглашая к сотрудничеству
              специалистов и организации.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
