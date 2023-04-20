import React from 'react';
import Computador from '../../../assets/img/computador.png';
import Computador2 from '../../../assets/img/computador2.png';
import './index.css';

const BodyLanding = () => {
    return (
        <main>
            <div className='start'>
                <div className="text">
                    <h1>Controle <span>prático e simplificado</span> para o seu negócio</h1>
                    <p>Sistema de agendamento e caixa para pequenas e médias empresas</p>
                    <ul className='benefits'>
                        <li>Agenda</li>
                        <li>Cadastro de clientes</li>
                        <li>Entrada e saída de caixa</li>
                    </ul>
                </div>
                <img src={Computador} width="550px" alt='computador' />
            </div>

            <div className="about">
                <div class="svg">
                    <img src={Computador2} width="450px" alt='imagem computador 2' className='animation'/>
                </div>
                <div class="explain">
                    <h1>Sobre nós...</h1>
                    <p>O Pantheon é uma plataforma pensada para empreendedores que desejam organizar o dia a dia de sua empresa de maneira simples, com manutenção de rotina empresarial prática e de fácil compreensão</p>
                    <ul class="topics">
                        <li>Plataforma leve e descomplicada para agilizar seus processos</li>
                        <li>Controle sua rotina empresarial em poucos cliques</li>
                    </ul>
                </div>
            </div>

            <h1>Contato</h1>
            <form className='form'>
                <label>
                    Nome e sobrenome
                    <input type="text" id="name"/>
                </label>
                
                <label>
                    E-mail
                    <input type="text" id="email" />
                </label>
                
                <label for="mensagem">
                    Mensagem
                    <textarea cols="70" rows="10" id="mensagem" />
                </label>
                
                <div className="final">
                    <label>
                        <input type="checkbox" /> 
                        Gostaria de receber nossas novidades por e-mail?
                    </label>
                </div>
                <input className="submit" type="submit" value="Enviar Formulário" />
            </form>
        </main>
    )
}

export default BodyLanding