import React from 'react';
import { useHistory } from 'react-router-dom'; 
import * as Auth from '../utils/auth';
import registrationOk from '../images/registration-ok.svg';
import registrationNoOK from '../images/login-fail.svg';

function Login({setEmail, openInfoTooltip, onClose, infoTooltipContent, setLoggedIn}) {
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

    Auth.authorize(email, password )
    .then((data) => {
      if (!data) {
        throw new Error('Произошла ошибка');
      }
      Auth.getContent(data)
        .then((res) => {
          setEmail(res.data.email);
        }).catch(err => console.log(err));
        setLoggedIn(true);
        infoTooltipContent({iconPath: registrationOk, text: 'Вы успешно авторизовались!'})
        openInfoTooltip();
        // Перенаправляем на главную страницу спустя 3сек и закрываем попап
        setTimeout(history.push, 3000, "/");
        setTimeout(onClose, 2500);
    }).catch(() => {
      infoTooltipContent({iconPath: registrationNoOK, text: 'Что то пошло не так!'})
      openInfoTooltip();
    })
  }

  return (
    <section className="start-screen">
      <h1 className="start-screen__title">Вход</h1>
      <form onSubmit={handleSubmit} className="start-screen__form">
        <input value={valueEmail} className="start-screen__input" placeholder="Email" onChange={handleChangeEmail}/>
        <input value={valuePassword} className="start-screen__input" placeholder="Пароль" onChange={handleChangePassword}/>
        <button className="start-screen__submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;