
'use client';

import { useContext } from "react"
import CONTACTS from "../lib/contacts.json"
import Context from "../context"

export default function Page() {
  const context = useContext(Context)
  const lan: 'ru'|'en' = context.lan

  return (
    <div className="section">
      <div className="container">
        <h2 className="section__title-center">
          Сведения об образовательной организации
        </h2>
        {/*  */}
        <div className="section__block">
          <h3>Основные сведения</h3>
          <p>
            Негосударственное образовательное частное учреждение дополнительного
            профессионального образования «Геотэк - Колледж» зарегистрировано
            как некоммерческая организация «10» мая 1996 г.
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Учредитель центра</h3>
          <p>Озмидова Валентина Николаевна</p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Центр находится по адресу</h3>
          <p>{CONTACTS[lan].address}</p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Режим работы</h3>
          <p>
            С понедельника по пятницу с 10:00 до 19:00, суббота с 11:00 до
            17:00, воскресенье – выходной.
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Контактные телефоны администрации</h3>
          <p>8-495-697-13-17</p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Адрес электронной почты</h3>
          <p>info@geotekcollege.ru</p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Структура и органы управления образовательной организацией</h3>
          <p>
            Управление Учреждением осуществляется на основании Устава, редакция
            которого утверждена решением Единственного учредителя от 04 июля
            2019 года.
          </p>
          <p>Высшим органом управления Учреждением является Учредитель.</p>
          <p>Единоличным исполнительным органом является Директор.</p>
          <p>
            Коллегиальные органы управления: Педагогический совет и Общее
            собрание работников.
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Образовательные стандарты</h3>
          <p>
            К дополнительным общеобразовательным общеразвивающим программам
            Федеральные государственные образовательные стандарты,
            образовательные стандарты, федеральные государственные требования не
            установлены.
          </p>
          <p>
            Дополнительные профессиональные программы разрабатываются с учетом
            требований профессиональных стандартов и (или) соответствующих
            государственных образовательных стандартов.
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Педагогический состав</h3>
          <p>
            <a href="/Руководство.docx">Педагогический состав</a>
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>
            Материально-техническое обеспечение и оснащённость образовательного
            процесса
          </h3>
          <p>
            1. В Организации имеется 1 учебная аудитория, оборудованная
            необходимой мебелью (столы, стулья) и средствами обеспечения
            образовательного процесса: ПК, ноутбук, медиапроектор, сканер,
            принтер, справочная и учебная литература).
          </p>
          <p>2. Питание обучающихся и работников: не предоставляется.</p>
          <p>
            3. В период обучения слушатели бесплатно обеспечиваются необходимой
            справочной и учебно-методической литературой.
          </p>
          <p>
            4. Доступ к информационно-телекоммуникационной сети «Интернет»,
            электронным образовательным ресурсам Организации обеспечивается
            бесплатно в период проведения занятий и консультаций непосредственно
            с компьютеров, расположенных в помещениях Организации.
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Стипендии и иные виды материальной поддержки</h3>
          <p>Стипендии и иные виды материальной поддержки не обеспечиваются.</p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Платные образовательные услуги</h3>
          <p>
            Организация оказывает платные образовательные услуги по реализации
            дополнительных профессиональных и дополнительных общеобразовательных
            общеразвивающих программ.
          </p>
          <p>
            Оказание платных образовательных услуг Центром регламентируется:
          </p>
          <p>
            1. Законом Российской Федерации от 7 февраля 1992 № 2300-1 «О защите
            прав потребителей»
          </p>
          <p>
            2. Правилами оказания платных образовательных услуг, утв.
            Постановлением Правительства Российской Федерации от 15 августа 2013
            № 706
          </p>
          <p>
            3. Положением об оказании платных образовательных услуг,
            утвержденным приказом от «15» сентября 2022 г. № 9-ЛА/У-22.
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Доступная среда для инвалидов и лиц с ОВЗ</h3>
          <p>
            В «Геотэк-Колледж» созданы условия для обучения инвалидов и лиц с
            ограниченными возможностями здоровья:
          </p>
          <p>
            • Организована возможность дистанционного обучения для слушателей,
            которым необходимы особые условия.
          </p>
          <p>
            • Учебные материалы предоставляются в электронном виде для удобного
            использования.
          </p>
          <p>
            • По всем вопросам организации обучения лиц с ОВЗ можно обращаться
            по адресу: info@geotekcollege.ru или по телефону: 8-495-697-13-17.
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Финансово-хозяйственная деятельность</h3>
          <h3>1. Данные об объёме образовательной деятельности:</h3>
          <p>
            В течение 2018 года обучено 102 человека, в т.ч. за счет бюджета
            (спонсорских средств) – 0 человек, за счет договоров с физическими и
            юридическими лицами – 102 человека.
          </p>
          <h3>
            2. Отчёт о поступлении и расходовании финансовых и материальных
            средств за 2018 год:
          </h3>
          <p>Поступления от образовательной деятельности — 3 725 000</p>
          <p>От прочей — 723 657</p>
          <p>Итого — 4 448 657</p>
          <p>Расходы</p>
          <p>Аренда — 474 670</p>
          <p>ФОТ — 2 914 371</p>
          <p>Налоги и взносы с ФОТ — 588 692</p>
          <p>Услуги сторонних организаций — 250 012</p>
          <p>Услуги банка — 104 798</p>
          <p>Итого — 4 332 543</p>
          <p>Налог УСН — 130 561</p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>Вакантные места для приёма</h3>
          <p>
            Ведётся постоянный набор в группы и на курсы индивидуального
            обучения по всем программам.
          </p>
        </div>
        {/*  */}
        <div className="section__block">
          <h3>
            Дополнительные профессиональные программы повышения квалификации
          </h3>
          <p>Введётся набор групп.</p>
          <p>Детальная информация – по запросу на info@geotekcollege.ru</p>
        </div>
      </div>
    </div>
  )
}
