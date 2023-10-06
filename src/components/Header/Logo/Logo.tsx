import style from './Logo.module.scss';

import Image from 'next/image';


const Logo = () => {
    return (
        <div className={style.logo_block}>
            <Image
                alt="logo"
                width={25}
                height={25}
                src="/logo.png"
            ></Image>
            <p>Code Planet</p>
        </div>
    )
}

export default Logo;