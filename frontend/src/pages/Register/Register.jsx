import React from 'react';
import styles from './index.module.css';
import LogoAzul from '../../assets/img/logoAzul.png';
import Cad from '../../assets/img/cad.png';

const Register = () => {
  return (
    <body className={styles.body}>
      <header className={styles.header}>
        <img src={LogoAzul} width="100px" alt="logo.png" />
        <h1>Pantheon</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.container_intro}>
            <h1>É novo(a) por aqui?</h1>
            <p>Nosso sistema visa prover a microempreendedores a otimização de processos a nível de grandes empresas.
              O que está esperando para dar um Up em seu comércio/serviço?</p>
            <img src={Cad} width="300px" alt="computador.png" />
          </div>

          <div className={styles.container_cad}>
            <div className={styles.textfield}>
              <label>
                Nome do proprietário
                <input type="text" name="nome-p" />
              </label>
            </div>

            <div className={styles.textfield}>
              <label>
                CPF
                <input type="text" name="cpf" placeholder="000.000.000-00" />
              </label>

            </div>
            <div className={styles.textfield}>
              <label>
                Nome da Companhia
                <input type="text" name="text-NC" />
              </label>
            </div>
            <div className={styles.textfield}>
              <label>
                CNPJ
                <input type="text" name="cnpj" placeholder="00.000.000/0000-00" />
              </label>

            </div>

            <div className={styles.textfield}>
              <label>
                Telefone
                <input type="tel" name="tel" placeholder="(00) 0 0000-0000" />
              </label>
            </div>
            <div className={styles.textfield}>
              <label>
                E-mail corporativo
                <input type="email" name="e-mail" placeholder="example@gmail.com" />
              </label>
            </div>
            <div className={styles.textfield}>
              <label>
                Senha
                <input type="password" name="senha" /></label>
            </div>

            <div className={styles.textfield}>
              <label>
                Confirmar senha
                <input type="password" name="csenha" />
              </label>

            </div>
            <div >
              <button className={styles.button}>Criar conta</button>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

export default Register