/* React */
"use client";
import { useState } from "react";
/* Styles */
import style from "../styles/component/header.module.scss";

function Header() {
  /* State for the Burger Menu */
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const openBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <header className={style.header}>
      <div className={style.wrap}>
        <h1>Océane Burel</h1>
        <nav className={style.nav}>
          <div className={style.burger} onClick={openBurger}>
            <div
              className={`${style.burger__line} ${style.burger__line__1}`}
            ></div>
            <div
              className={`${style.burger__line} ${style.burger__line__2}`}
            ></div>
            <div
              className={`${style.burger__line} ${style.burger__line__3}`}
            ></div>
          </div>
          <a
            href="#about"
            className={`${style.nav__item} ${
              isBurgerOpen && style.nav__item__open
            }`}
          >
            Qui suis-je&#8239;?
          </a>
          <a
            href="#skills"
            className={`${style.nav__item} ${
              isBurgerOpen && style.nav__item__open
            }`}
          >
            Mes compétences
          </a>
          <a
            href="#works"
            className={`${style.nav__item} ${
              isBurgerOpen && style.nav__item__open
            }`}
          >
            Mes projets
          </a>
          <a
            href="#contact"
            className={`${style.nav__item} ${
              isBurgerOpen && style.nav__item__open
            }`}
          >
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
