function Register() {
  return (
    <section className="start-screen">
      <h1 className="start-screen__title">Регистрация</h1>
      <form className="start-screen__form">
        <input className="start-screen__input" placeholder="Email"/>
        <input className="start-screen__input" placeholder="Пароль"/>
        <button className="start-screen__submit">Зарегистрироваться</button>
      </form>
      <h2 className="start-screen__login">Уже зарегистрированы? Войти</h2>
    </section>
  );
}

export default Register;