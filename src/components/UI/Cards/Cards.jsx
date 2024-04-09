import React from 'react'
import "./Cards.css";

const Cards = () => {
  return (
    <div className="card_container">
      <div className="card">
        <img
          src="https://krisha-photos.kcdn.online/05/d2aa06c3fee521a3dc20bca1bb268e7a796b60/photo-750x470.jpg"
          alt=""
        />
        <div className="card_content">
          <h3>ALA Park</h3>
          <p>
            РК, Алматы г., Бостандыкский район, ул. Сатпаева, уч.82,
            ул.Егизбаева, уч. 7Д
          </p>
          <a className="btn" href="">
            Buy
          </a>
          <button className="button_KB">1-ком</button>
          <br />
          <button className="button_KB">2-ком</button>
          <br />
          <button className="button_KB">3-ком</button>
          <br />
          <button className="button_KB">4-ком</button>
          <h4>32 квартиры от 40.1 млн ₸</h4>
        </div>
      </div>
      <div className="card">
        <img
          src="https://s3.bi.group/biclick/content-manager/O_NER_bba3a85b6c.jpg"
          alt=""
        />
        <div className="card_content">
          <h3>O'NER</h3>
          <p>
            РК, Алматы г., Алмалинский район, пр. Абая, уч. 165.,улица Тургут
            Озала, участки 165, 165/4, 194/2, 203/3
          </p>
          <a className="btn" href="">
            Buy
          </a>
          <h4>29 квартир от 39.5 млн ₸</h4>
        </div>
      </div>
      <div className="card">
        <img
          src="https://s3.bi.group/biclick/content-manager/glllczanov_47d3bfd0ff.jpg"
          alt=""
        />
        <div className="card_content">
          <h3>Central Avenue</h3>
          <p>
            город Алматы, Бостандыкский район, проспект Сейфуллина, дом 574/6
          </p>
          <a className="btn" href="">
            Buy
          </a>
          <h4>1 квартира от 202.9 млн ₸</h4>
        </div>
      </div>
      <div className="card">
        <img
          src="https://s3.bi.group/biclick/content-manager/O_NER_bba3a85b6c.jpg"
          alt=""
        />
        <div className="card_content">
          <h3>Arena City. Sport</h3>
          <p>г.Алматы, р-н Алатауский, мкр. Акмаржан, уч.1</p>
          <a className="btn" href="">
            Buy
          </a>
          <h4>413 квартир от 17.0 млн ₸</h4>
        </div>
      </div>
      <div className="card">
        <img
          src="https://s3.bi.group/biclick/content-manager/07_2_2735e4f2e4.jpg"
          alt=""
        />
        <div className="card_content">
          <h3>Arena Park</h3>
          <p>РК, Алматы г., Алатауский район, мкр. Гажайып, уч. 5/3</p>
          <a className="btn" href="">
            Buy
          </a>
          <h4>274 квартиры от 22.8 млн ₸</h4>
        </div>
      </div>
      <div className="card">
        <img
          src="https://s3.bi.group/biclick/content-manager/Eco_Standart_353c90ee55.jpg"
          alt=""
        />
        <div className="card_content">
          <h3>Dream City Family</h3>
          <p>г. Алматы, р-н Турксибский,мкр. Кайрат, уч. 135/12</p>
          <a className="btn" href="">
            Buy
          </a>
          <h4>217 квартир от 21.8 млн ₸</h4>
        </div>
      </div>
    </div>
  );
}

export default Cards
