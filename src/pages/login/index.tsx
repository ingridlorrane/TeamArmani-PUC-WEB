import { FormEvent, SetStateAction, useEffect, useState } from 'react';
import bg_login from '../../assets/images/bg_login.png';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import './style.css';

function Login() {
  const [dados, setDados] = useState<SetStateAction<any>>([]);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0);

  const navigateTo = useNavigate();

  const getDados = () => {
    api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/users`, {})
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  };

  const handleCheckLogin = (event: FormEvent) => {
    event.preventDefault();
    getDados();

    const login = dados.find(
      (a: any) => a.email === email && a.senha === password
    );

    console.log(login);

    if (!login) {
      console.log('email ou senha invalidos');
      setStep(1);
    } else {
      console.log('disparou', login.email);

      sessionStorage.setItem('login', 'true');
      sessionStorage.setItem('email', login.email);
      sessionStorage.setItem('senha', login.senha);

      navigateTo('/student');
    }
  };

  const checkLogin = () => {
    const login = sessionStorage.getItem('login');
    login === 'true' ? navigateTo('/student') : '';
  };

  useEffect(() => {
    checkLogin();
  }, [setDados, setStep]);

  return (
    <div className="login">
      <div className="login-frame">
        <img src={bg_login} alt="Login" className="bg_login" />
        {step === 0 && (
          <form className="login-form" onSubmit={handleCheckLogin}>
            <label htmlFor="email" className="login-label">
              Usuário:
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              id="email"
              className="login-input"
            />
            <label htmlFor="password" className="login-label">
              Senha:
            </label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              className="login-input"
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        )}
        {step === 1 && (
          <div className="login-form">
            <p className="p-form">
              Usuario e senha invalidos! <br /> tente novamente
            </p>
            <button className="back-button" onClick={() => setStep(0)}>
              voltar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
