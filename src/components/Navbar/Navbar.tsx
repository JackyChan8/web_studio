import style from './Navbar.module.scss';

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <Link href='#main'>Главная</Link>
            <Link href='#benefits'>Преимущества</Link>
            <Link href='#contacts'>Контакты</Link>
        </nav>
    )
}

export default Navbar;