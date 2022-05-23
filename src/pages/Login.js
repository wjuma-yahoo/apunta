import knocking from '../assets/knocking.png';

export const Login = () => {
  return (
    <div className="login">
      <div className="container">

        <header className="row login__header">
          <div className="col-12 heading">
            <h1>Te damos la bienvenida a <span className="title">APUNTA</span></h1>
          </div>
          <div className="col-12 text">
            <p>Sincroniza tus notas con Google, otros dispositivos de Windows y cualquier lugar en el que inicies session</p>
          </div>
        </header>

        <main className="row">
          <div className="col-12 login__logo">
            <img src={knocking} alt="knocking" />
          </div>
          <div className="col-12 login__buttons">
            <button className="ui fluid huge google plus button">
              <i className="google plus icon"></i>
              Accedeer con Google Plus
            </button>
            <button className="ui fluid huge plus button">
              <i className="user icon"></i>
              Acceder con otra cuenta
            </button>
          </div>
        </main>

      </div>
    </div>
  );
}
