import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    id: number;
    subject: string;
    cost: number;
    user_id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.user_id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Imagem profile do usuário." />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>Preço/Hora <strong>R$ {teacher.cost}</strong></p>

                <a target="_blank" href={`https://wa.me/${teacher.whatsapp}`} onClick={createNewConnection} type="button">
                    <img src={whatsappIcon} alt="Whatsapp" /> Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;