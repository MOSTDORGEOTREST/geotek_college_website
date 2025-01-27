export default function Footer() {
  return (
    <div className="footer section" id="footer">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            {/* <i className="ri-windy-line footer__logo-icon"></i> */}
            ГЕОТЕК КОЛЛЕДЖ
          </a>

          <h3 className="footer__title">
            Ведется набор групп <br />
            детальная информация – по запросу
          </h3>

          <div className="footer__subscribe">
            <a
              href="tel:+74956971317"
              target="_blank"
              className="button button--flex footer__button"
              title="Call"
            >
              Записаться
              <img
                className=" button__icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ1JREFUSEvt1MENwkAMRNE/nUAn0Ek6gU6ASmiFThxZyiHiwI4trcQhueSymhePVxGTH03O5wCGDf9PRRFxA16SPsPP3h2wJtjC70CGXyuIC5yAN5DvEmIBOXFEtBAb6CIloIN0gQdwyX1IOv+6VSVg24MdnrANdMJtoBteARYgqxl2/r2PSkWLpGflN2FPUA3dn7cn6CIHMGxuekUrkppAGZ45WkEAAAAASUVORK5CYII="
                alt="Записаться"
              />
            </a>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Адрес</h3>

          <ul className="footer__data">
            <li className="footer__information">
              м. Кропоткинская, Нащокинский пер. 12, стр. 2
            </li>
            <li className="footer__information">Москва, Россия</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Контакты</h3>

          <ul className="footer__data">
            <li className="footer__information">8-495-697-13-17</li>

            <li className="footer__information">info@geotekcollege.ru</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Режим работы</h3>

          <ul className="footer__data">
            <li className="footer__information">
              Понедельник - пятница
              <br />с 10:00 до 19:00
            </li>
            <li className="footer__information">Суббота с 11:00 до 17:00</li>
            <li className="footer__information">Воскресенье – выходной</li>
          </ul>
        </div>
      </div>

      <div className="footer__copy">
        <a href="./Политика конфиденциальности.docx">
          Политика конфиденциальности
        </a>
        <p>&#169; Разработано командой МДГТ</p>
      </div>
    </div>
  );
}
