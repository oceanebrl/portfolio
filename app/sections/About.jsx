/* Next */
import Image from "next/image";

/* Styles */
import styleSection from "../styles/sections/sections.module.scss";

/* Illustrations */
import balloonStar from "@/public/balloon_star.png";

function About() {
  return (
    <section className={styleSection.section}>
      <div className={styleSection.wrap}>
        <h2>Qui suis-je ?</h2>
        <div className={styleSection.content}>
          <div className={styleSection.illustration}>
            <Image
              src={balloonStar}
              alt="Illustration d'un astraunaute qui vole grâce à un ballon en forme d'étoile"
              className={styleSection.illustration__img}
            />
          </div>
          <div className={styleSection.text}>
            <p
              className={`${styleSection.text__paragraph} ${styleSection.text__prelude}`}
            >
              <span className={styleSection.text__highlight}>
                Hello World&#8239;!
              </span>
            </p>
            <p className={styleSection.text__paragraph}>
              Moi, c’est Océane. Je suis développeuse web frontend,
              particulièrement passionnée par React.JS. Mais en réalité, le
              temps que j’apprends, je peux m’adapter à tout&#8239;!
            </p>
            <p className={styleSection.text__paragraph}>
              Je ne m’arrête jamais avant d’avoir trouvé une{" "}
              <span className={styleSection.text__highlight}>
                une solution à un problème
              </span>
              , et je continue à persévérer devant toutes difficultés.
            </p>
            <p className={styleSection.text__paragraph}>
              N’hésitez pas à{" "}
              <a href="#contact" className={styleSection.text__link}>
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
