import style from './Main.module.scss';

import Image from 'next/image';

const MainBlock = () => {
    return (
        <div className={style.main_block} id='main'>
            <h1>Студия Разработки</h1>
            <p>Выполняем работы любой сложности и любой величины</p>
            <div className={style.make_projects}>
                <div className={style.project}>
                    <div className={`${style.image_block} ${style.project_scale}`}>
                        <Image src='/web_devel.png' height={380} width={325} alt='web-devel'></Image>
                    </div>
                    <div className={style.description_block}>
                        <h2>Веб-Разработка</h2>
                    </div>
                </div>
                <div className={style.project}>
                    <div className={`${style.image_block} ${style.project_scale}`}>
                        <Image src='/layout.png' height={380} width={325} alt='layout'></Image>
                    </div>
                    <div className={style.description_block}>
                        <h2>Верстка</h2>
                    </div>
                </div>
                <div className={style.project}>
                    <div className={`${style.image_block} ${style.project_scale}`}>
                        <Image src='/telegram_bot.jpeg' height={380} width={325} alt='telegram'></Image>
                    </div>
                    <div className={style.description_block}>
                        <h2>Телеграм Боты</h2>
                    </div>
                </div>
                <div className={style.project}>
                    <div className={`${style.image_block} ${style.project_scale}`}>
                        <Image src='/script.jpg' height={380} width={325} alt='script'></Image>
                    </div>
                    <div className={style.description_block}>
                        <h2>Скрипты</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock;