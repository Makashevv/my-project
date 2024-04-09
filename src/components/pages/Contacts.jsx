import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div className="contacts">
        <div className="container">
          <h1>Заказать звонок</h1>
          <p>
            Ответим на интересующие вас вопросы и расскажем подробнее о проекте.
          </p>
          <div className="contacts_mobile">
            <button className="btn_contacts">Ваше Имя</button>
            <br />
            <button className="btn_contacts">Номер мобильного телефона</button>
            <br />
            <button className="btn_contacts">Город</button>
            <br />
            <button className="btn_contact">Жду звонка</button>
          </div>
          <div className="contacts_img">
            <img
              src="https://s3.bi.group/biclick/content-manager/callback_f359377e8b.svg"
              alt=""
            />
            <p className='contact_text'>
              Архитектура проекта, изображения благоустройства, фасадов,
              интерьера, применяемых материалов, их нумерация, инфраструктура
              комплекса являются условными и могут быть изменены в ходе
              проектирования, строительства и эксплуатации. Очередь
              строительства 1. Разрешение на привлечение средств дольщиков № 100
              от 30/09/2019Г. уполномоченная компания ТОО "Сайран Строй",
              застройщик ТОО "Компания "Индустрия Строительства"".. Настоящая
              реклама, в соответствии со ст. 395 ГК РК, не является публичной
              офертой.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts
