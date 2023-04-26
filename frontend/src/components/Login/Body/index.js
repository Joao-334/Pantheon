import React from 'react';
import Sistema from '../../../assets/img/Sistema.png';
import styles from './index.module.css';
import Link from '../../Link';

const BodyLogin = () => {
    return (
        <div className={styles.main_login}>
            <div className={styles.left_login}>
                <h1>Gerenciamento empresarial<br></br><span style={{backgroundColor: '#414582', color: '#e9e9f1'}}>à um clique de
                    distância</span></h1>
                <img src={Sistema} width="500px" alt="sistema" className={styles.animation}/>
            </div>

            <div className={styles.right_login}>
                <h1>login</h1>
                <div className={styles.card_login}>

                    <div className={styles.textfield}>
                        <label for="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Usuário" />

                    </div>

                    <div className={styles.textfield}>
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" />
                    </div>

                    <button className={styles.btn_login}>Login</button>
                    <div className={styles.link_cadastro}>
                        <p>
                            Não possui uma conta?
                            <Link to={'/register'} className={styles.link_body} css={'Body'}>
                                Cadastre-se aqui!
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyLogin