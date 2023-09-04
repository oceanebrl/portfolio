import style from "../styles/component/modaltempo.module.scss";
import text from "../styles/sections/sections.module.scss";

function Modaltempo() {
  return (
    <div className={style.wrap}>
      <div className={style.modal}>
        <h3 className={style.title}>Ce site est encore en construction</h3>
        <div className={style.content}>
          <p className={text.text__paragraph}>
            Ce site est toujours en train d'être constuit...
          </p>
          <p className={text.text__paragraph}>
            Si vous voulez voir tout de même l'avancement, libre à vous, bien
            évidemment.
          </p>
          <p className={text.text__paragraph}>
            Si mes projets vous intéressent, vous pouvez vous rendre sur mon{" "}
            <a href="https://github.com/oceanebrl" className={text.text__link}>
              Github
            </a>
            &#8239;!
          </p>
        </div>
        <button className={style.btn}>Fermer le modal</button>
      </div>
    </div>
  );
}

export default Modaltempo;
