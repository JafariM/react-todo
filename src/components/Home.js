import React from "react";
import style from "./Home.module.css";
import img from "./img/home-background.jpg";

function Home() {
  return (
    <>
      <p className={style.homePhrase}>
        Start your day right, plan your tasks with ease
      </p>
      <div className={style.homeBackground}>
        <img src={img} alt="background" />
      </div>
    </>
  );
}

export default Home;
