import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VscAccount, VscSignOut, VscHome } from 'react-icons/vsc';

import './style.css';

function Navbar() {
  const [step, SetStep] = useState<number>(0);

  const location = useLocation();

  const checkLogin = () => {
    const login = sessionStorage.getItem('login');
    return login;
  };

  useEffect(() => {
    const aux = checkLogin();
    aux === 'true' ? SetStep(1) : SetStep(0);
  }, []);

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">
            <VscHome size={42} />
          </Link>
        </li>
        <li>
          <Link to="/About">Quem Somos</Link>
        </li>
        <li>
          <Link to="/Modality">Modalidades</Link>
        </li>
        <li>
          <Link to="/Schedule">Horários</Link>
        </li>
        <li>
          <Link to="/Contact">Contato</Link>
        </li>
        {step === 0 ||
          (location.pathname !== '/student' && (
            <li>
              <Link to="/Login">
                <VscAccount size={32} />
              </Link>
            </li>
          ))}
        {step === 1 && location.pathname === '/student' && (
          <li>
            <Link to="/">
              <VscSignOut size={32} color="white" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
