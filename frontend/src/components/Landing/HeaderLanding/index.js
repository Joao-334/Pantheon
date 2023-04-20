import React from 'react';
import LogoCinza from '../../../assets/img/logoCinza.png';
import Link from '../../Link';
import styles from './index.module.css';

const HeaderLanding = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <img src={LogoCinza} alt="logoCinza.png" width="100px" />
                <h1>Pantheon</h1>
            </div>
            <ul className={styles.links}>
                <li>
                    <Link to={'/login'}><button>Login</button></Link>
                </li>

                <li>
                    <Link to={'/register'}>Criar uma conta</Link>
                </li>
            </ul>
        </header>
    )
}

export default HeaderLanding