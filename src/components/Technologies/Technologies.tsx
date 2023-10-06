import style from './Technologies.module.scss';

import Image from 'next/image';

const Technologies = () => {
    return (
        <div className={style.tech_block}>
            <h2>Наш Стэк</h2>
            <div className={style.technologies}>
                <div className={style.technology}>
                    <Image
                        width={40}
                        height={40}
                        alt="javascript-logo"
                        src="/JavaScript-logo.png"
                    ></Image>
                    <p>Javascript</p>
                </div>
                <div className={style.technology}>
                    <Image
                        width={40}
                        height={40}
                        alt="python-logo"
                        src="/python-logo.svg"
                    ></Image>
                    <p>Python</p>
                </div>
                <div className={style.technology}>
                    <Image
                        width={40}
                        height={40}
                        alt="react-logo"
                        src="/React-icon.svg"
                    ></Image>
                    <p>React</p>
                </div>
                <div className={style.technology}>
                    <Image
                        width={40}
                        height={40}
                        src="/next-logo.svg"
                        alt="next-logo"
                    ></Image>
                    <p>Next</p>
                </div>
                <div className={style.technology}>
                    <Image
                        width={40}
                        height={40}
                        src="/nest.svg"
                        alt="nest-logo"
                    ></Image>
                    <p>Nest</p>
                </div>
            </div>
        </div>
    )
}

export default Technologies;