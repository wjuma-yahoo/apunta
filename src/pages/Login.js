import { useState } from 'react';

import { LoginWelcome } from './LoginWelcome';
import { LoginWithEmailAndPassword } from './LoginWithEmailAndPassword';

export const Login = () => {

  const [ startWithEmail, setStartWithEmail ] = useState(false);

  return (
    <div className="login">
      <div className="container">

        {
          (startWithEmail)
          ? (<LoginWithEmailAndPassword setStartWithEmail={setStartWithEmail} />)
          : (<LoginWelcome setStartWithEmail={setStartWithEmail} />)
        }

      </div>
    </div>
  );
}
