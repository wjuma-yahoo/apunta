import { Header } from '../components';

export const LoginWithEmailAndPassword = () => {

  return (

    <div className="row">
      <div className="col-md-12 backbutton">
        <Header items={[ {icon: 'arrow left'} ]} />
      </div>
      <div className="col-md-12 mb-5">
        <h1>Iniciar sesión</h1>
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
          <input type="password" name="password" placeholder="" />
        </div>
        <div className="field">
          <label>Confirmar la Contraseña</label>
          <input type="password" name="password2" placeholder="" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" className="" />
            <label>Aceptar los terminos y condiciones</label>
          </div>
        </div>
        <button className="ui button" type="submit">Entrar</button>
      </form>
    </div>
  );
}
