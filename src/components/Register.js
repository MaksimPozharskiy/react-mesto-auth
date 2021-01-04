import { Link } from 'react-router-dom'; 

function Register() {
  return (
    <section className="start-screen">
      <h1 className="start-screen__title">Регистрация</h1>
      <form className="start-screen__form">
        <input className="start-screen__input" placeholder="Email"/>
        <input className="start-screen__input" placeholder="Пароль"/>
        <button className="start-screen__submit">Зарегистрироваться</button>
      </form>
      <Link className="start-screen__login" to="/sign-in">Уже зарегистрированы? Войти</Link>
    </section>
  );
}

export default Register;