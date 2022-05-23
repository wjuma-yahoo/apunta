import { Header } from '../components';

export const LoginWithEmailAndPassword = ({ setStartWithEmail }) => {
  return (
    <div className="row loginWithEmailAndPassword">

      <header className="col-md-12 backbutton">
        <div className="ui labeled icon menu">
          <a className="item" onClick={() => setStartWithEmail(false)}>
            <i className="arrow left icon"></i>
          </a>
        </div>
      </header>

      <main className="col-md-12">
        <div className="row">
          <div className="col-md-12 heading">
            <h1>Iniciar sesión</h1>
          </div>

          <form className="ui form col-md-12">
            <div className="field">
              <label>Correo electrónico</label>
              <input type="email" name="email" placeholder="Correo electrónico" />
            </div>
            <div className="field">
              <label>Contraseña</label>
              <input type="password" name="password" placeholder="Contraseña" />
            </div>
            <button className="ui fluid big button" type="submit">Entrar</button>
          </form>
        </div>
      </main>

      <footer className="col-md-12 mb-5 footer">
        <p>No tienes una cuenta? <a href="/register">Registrate</a> </p>
      </footer>

    </div>
  );
}
