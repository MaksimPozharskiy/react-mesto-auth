import React from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import * as Auth from '../utils/auth';

function Register({openInfoTooltip, onClose}) {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const history = useHistory(); 

  function handleChangeEmail(e) {
    setValueEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setValuePassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    const email = valueEmail;
    const password = valuePassword;
    Auth.register(email, password);
    openInfoTooltip();
    // Перенаправляем на главную страницу спустя 3сек и закрываем попап
    setTimeout(history.push, 3000, "/");
    setTimeout(onClose, 2500);
  } 

  return (
    <section className="start-screen">
      <h1 className="start-screen__title">Регистрация</h1>
      <form onSubmit={handleSubmit} className="start-screen__form">
        <input value={valueEmail} type="email" className="start-screen__input" placeholder="Email" onChange={handleChangeEmail}/>
        <input value={valuePassword} type="password" className="start-screen__input" placeholder="Пароль" onChange={handleChangePassword}/>
        <button className="start-screen__submit">Зарегистрироваться</button>
      </form>
      <Link className="start-screen__login" to="/sign-in">Уже зарегистрированы? Войти</Link>
    </section>
  );
}

export default Register;