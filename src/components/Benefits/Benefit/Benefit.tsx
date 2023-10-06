import style from "./Benefit.module.scss";

import Image from "next/image";

type Props = {
  title: string;
  text: string;
  logo: string;
};

const Benefit = ({ title, text, logo }: Props) => {
  return (
    <div className={style.benefit}>
      <div className={style.description}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className={style.image}>
        <Image src={logo} alt="security" width={200} height={200}></Image>
      </div>
    </div>
  );
};

export default Benefit;
