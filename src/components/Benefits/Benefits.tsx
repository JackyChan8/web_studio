import style from "./Benefits.module.scss";

import Benefit from "./Benefit/Benefit";

const Benefits = () => {
  return (
    <div className={style.benefits_block} id="benefits">
      <h2>Наши Преимущества</h2>
      <div className={style.benefits}>
        <Benefit
          title="Работаем через гарант"
          text="Гарантируем безопасность сделки. Клиент будет обезопасен с денежной стороны"
          logo="/security-logo.png"
        />
        <Benefit
          title="Конфиденциальность"
          text="Гарантируем Конфиденциальность вашего проекта."
          logo="/confidential-icon.jpg"
        />
        <Benefit
          title="Работаем под ключ"
          text="Полное сопровождение на всех этапах разработки, а также поддержка после завершения проекта"
          logo="/support.webp"
        />
      </div>
    </div>
  );
};

export default Benefits;
