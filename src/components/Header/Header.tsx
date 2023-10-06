import style from './Header.module.scss';

import Logo from './Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header;