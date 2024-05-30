import styles from './Auth.module.sass';
import Login from '../../components/Login';
import { useState } from 'react';
import Registration from '../../components/Registration';
function Auth() {
  const [toggleAuth, setToggleAuth] = useState<boolean>(true);
  const handleToggleAuth: () => void = () => setToggleAuth(!toggleAuth);
  return (
    <div className={`${styles.wrapper} container-fluid`}>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-6 d-flex justify-content-center align-items-center'>
          <div
            className={`d-flex justify-content-center align-items-center mb-5 ${styles.authImage}`}
          >
            <img
              src='/images/authImage.png'
              alt='MacBook'
              width={450}
              height={450}
            />
          </div>
        </div>
        <div className={`col-3 ${styles.mainCol} d-flex align-items-center`}>
          {toggleAuth ? (
            <Login setToggle={handleToggleAuth} />
          ) : (
            <Registration setToggle={() => setToggleAuth(!toggleAuth)} />
          )}
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
}

export default Auth;
