import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { VscAccount, VscSignOut, VscHome } from 'react-icons/vsc';

import './style.css';
import { GlobalStyle } from '../../style';

function Navbar() {
  const [step, SetStep] = useState<number>(0);

  const location = useLocation();
  const navigateTo = useNavigate();

  console.log('path ', location.pathname);

  const checkLogin = () => {
    const login = sessionStorage.getItem('login');
    return login;
  };

  const Logout = () => {
    console.log('clean');
    sessionStorage.clear();
    navigateTo('/');
    window.location.reload();
  };

  useEffect(() => {
    const aux = checkLogin();
    aux ? SetStep(1) : SetStep(0);
  }, []);

  return (
    <div className="navbar">
      <GlobalStyle path={location.pathname} />
      <ul>
        <li>
          <Link to="/">
            <VscHome size={42} />
          </Link>
        </li>
        <li>
          <Link to="/about">Quem Somos</Link>
        </li>
        <li>
          <Link to="/modality">Modalidades</Link>
        </li>
        <li>
          <Link to="/schedule">Horários</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/login">
            <VscAccount size={32} />
          </Link>
        </li>
        {step === 1 && (
          <li>
            <Link to="/" onClick={Logout}>
              <VscSignOut size={32} color="white" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
