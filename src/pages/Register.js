import { Link } from 'react-router-dom';
import { Header } from '../components';

export const Register = () => {

  return (
    <div className="register">
      <div className="container">
        <div className="row">

          <div className="col-md-12 mb-5 heading">
            <h1>Registro de usuario</h1>
          </div>

          <form className="ui form col-md-12">
            <div className="field">
              <label>Nombre de usuario</label>
              <input type="text" name="displayName" placeholder="Nombre de usuario" />
            </div>
            <div className="field">
              <label>Correo electrónico</label>
              <input type="email" name="email" placeholder="Correo electrónico" />
            </div>
            <div className="field">
              <label>Contraseña</label>
              <input type="password" name="password" placeholder="Contraseña" />
            </div>
            <div className="field">
              <label>Confirmar la Contraseña</label>
              <input type="password" name="password2" placeholder="Confirmar la Contraseña" />
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" className="" />
                <label>Aceptar los terminos y condiciones</label>
              </div>
            </div>
            <button className="ui fluid big button" type="submit">Registrarme</button>
          </form>

          <footer className="col-md-12 mb-5 footer">
            <p>Tienes una cuenta? <Link to="/login">Inicar sesion</Link> </p>
          </footer>

        </div>
      </div>
    </div>
  );
}
