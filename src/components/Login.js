function Login() {
  return (
    <section className="start-screen">
      <h1 className="start-screen__title">Вход</h1>
      <form className="start-screen__form">
        <input className="start-screen__input" placeholder="Email"/>
        <input className="start-screen__input" placeholder="Пароль"/>
        <button className="start-screen__submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;