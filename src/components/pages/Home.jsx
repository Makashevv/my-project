import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="container">
          <div className="home_inner">
            <img
              className="logo_BI"
              src="https://yt3.googleusercontent.com/IP8mxJ_Xp_GaYFRcYWUPkfSmigWB7CArsSO1r-LyDiVPG5KQwtflSx4vinUhEBiH4BpekR2_uw=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <h1>Welcome to BI Group</h1>
            <p>Проект</p>
            <p>President's Park</p>
            <h3>Истинное сочетание роскоши и покоя</h3>
          </div>
          <div className="Presidents_Park">
              <img className="park_BI" src="https://s3.bi.group/biclick/content-manager/Ptica_S_19_min_f1958c8713.jpg" alt="" />
              <h4 className="adres">г. Алматы, Бостандыкский район, микрорайон Мирас, дом 115</h4>
          </div>
        </div>
        <div className="section_home">
            <h1>О проекте</h1>
            <p>President’s Park - это беспрецедентный шедевр роскошного минимализма. Он не только обеспечивает Вам комфорт и современный образ жизни, но и дарит ощущение приятной ностальгии по историческому, кочевому образу жизни. Занимая привилегированное положение между гольф-клубом "Жайлау" и одноименным парком первого президента Казахстана, жители этого комплекса могут наслаждаться потрясающими видами величественных гор Заилийского Алатау и захватывающего дух пика Терешковой.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
