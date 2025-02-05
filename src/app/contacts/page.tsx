'use client';

import { useContext } from "react";
import CONTACTS from "../lib/contacts.json";
import Context from "../context";

export default function Page() {
  const context = useContext(Context)
  const lan: 'ru'|'en' = context.lan
  
  return (
    <>
      <div className="section">
        <div className="container">
          <h2 className="section__title-center">Контакты</h2>

          <div className="section__block">
            <h3>
              Негосударственное образовательное частное учреждение
              дополнительного профессионального образования “Геотэк-Колледж”
            </h3>
          </div>

          <div className="section__block">
            <h3>{CONTACTS[lan].address}</h3>
          </div>

          <div className="section__block">
            <h3>Телефоны</h3>
            <p>+7-495-697-13-17</p>
          </div>

          <div className="section__block">
            <h3>E-mail</h3>
            <p>info@geotekcollege.ru</p>
          </div>

          <div className="section__block">
            <h3>Режим работы офиса оффлайн и онлайн</h3>
            <p>понедельник-пятница с 10.00 до 19.00 (МСК)</p>
          </div>

          <div className="section__block">
            <h3>
              Узнать и записаться на курсы английского и немецкого, на сдачу
              международного экзамена по английскому языку
            </h3>
            <p>(495) 697-13-17</p>
            <p>info@geotekcollege.ru</p>
          </div>

          <div className="section__block"></div>
        </div>
      </div>
    </>
  );
}
