import style from './Contacts.module.scss';

import Image from 'next/image';
import Link from 'next/link';

const Contacts = () => {
    return (
        <div className={style.contacts_block} id="contacts">
            <h2>Связь с нами</h2>
            <div className={style.contact}>
                <div className={style.description}>
                    <h2>У вас остались вопросы?</h2>
                    <button>
                        <Link href="https://t.me/dev5401" target='_blank'>Связаться с Нами</Link>
                    </button>
                </div>
                <div className={style.logo}>
                    <Image
                        src="/contact_us.jpg"
                        alt='contact-logo'
                        width={350}
                        height={220}
                    ></Image>
                </div>
            </div>
        </div>
    )
}

export default Contacts;