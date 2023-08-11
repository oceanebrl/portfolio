/* Next */
import Image from "next/image";

/* Styles */
import style from "../styles/sections/sections.module.scss";

/* Illustrations */
import balloonStar from "@/public/balloon_star.png";

function About() {
  return (
    <section className={style.section}>
      <div className={style.headerSpace}>
        {/* White Space so the Header doesn't hide the content */}
      </div>
      <div className={style.wrap}>
        <h2>Qui suis-je ?</h2>
        <div className={style.content}>
          <div className={style.illustration}>
            <Image
              src={balloonStar}
              alt="Illustration d'un astraunaute qui vole grâce à un ballon en forme d'étoile"
              className={style.illustration__img}
            />
          </div>
          <div className={style.text}>
            <p className={`${style.text__paragraph} ${style.text__prelude}`}>
              <span className={style.text__highlight}>Hello World&#8239;!</span>
            </p>
            <p className={style.text__paragraph}>
              Moi, c’est Océane. Je suis développeuse web frontend,
              particulièrement passionnée par React.JS. Mais en réalité, le
              temps que j’apprends, je peux m’adapter à tout&#8239;!
            </p>
            <p className={style.text__paragraph}>
              Je ne m’arrête jamais avant d’avoir trouvé une{" "}
              <span className={style.text__highlight}>
                une solution à un problème
              </span>
              , et je continue à persévérer devant toutes difficultés.
            </p>
            <p className={style.text__paragraph}>
              N’hésitez pas à{" "}
              <a href="#contact" className={style.text__link}>
                me contacter
              </a>{" "}
              si vous souhaitez travailler avec moi&#8239;!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
