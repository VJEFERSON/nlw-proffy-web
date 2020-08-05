import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/30541507?s=460&v=4" alt="Imagem profile usuário." />
                <div>
                    <strong>Valdeci Jeferson</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>Entusiasta das melhores tecnologias de quimica avançada.
                        <br /><br />
                    Apaixonado por explodir coisas me laboratório e por mudar a vida das pesoas através de experiências
                    emocionantes</p>
            <footer>
                <p>Preço/Hora <strong>R$ 20,00</strong></p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" /> Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;