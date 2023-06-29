import { SetStateAction, useEffect, useState } from 'react';
import bg_login from '../../assets/images/bg_login.png';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import './style.css';
import { Button } from '../../components/button';

function Login() {
  const [dados, setDados] = useState<SetStateAction<any>>([]);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0);

  const navigateTo = useNavigate();

  const getDados = async () => {
    await api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/users`, {})
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  };

  const handleCheckLogin = () => {
    getDados();

    const login = dados.find(
      (a: any) => a.email === email && a.senha == password
    );

    if (!login) {
      console.log('email ou senha invalidos');
      setStep(1);
    } else {
      console.log('disparou', login.email);

      sessionStorage.setItem('login', 'true');
      sessionStorage.setItem('email', login.email);
      sessionStorage.setItem('senha', login.senha);

      navigateTo('/student');
      window.location.reload();
    }
  };

  const checkLogin = () => {
    const login = sessionStorage.getItem('login');
    login === 'true' ? navigateTo('/student') : '';
  };

  useEffect(() => {
    if (dados.length < 1) {
      getDados();

      checkLogin();
    }

    console.log('dados', dados);
  }, [dados, setStep]);

  return (
    <aside className="login">
      {/* <div className="login-frame"> */}
      <img src={bg_login} alt="Login" className="bg_login" />
      {step === 0 && (
        <div className="login-form">
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
            onKeyDown={(event: any) => event.which === 13 && handleCheckLogin()}
          />
          <Button
            text="Login"
            handle={() => handleCheckLogin()}
            bg="#0f3002"
            color="white"
            size="100px"
            font="18px"
          />
        </div>
      )}
      {step === 1 && (
        <div className="login-form">
          <p className="p-form">
            Usuario e senha invalidos! <br /> tente novamente
          </p>
          <Button
            text="Voltar"
            handle={() => setStep(0)}
            bg="white"
            color="#0f3002"
            size="100px"
            font="18px"
          />
        </div>
      )}
      {/* </div> */}
    </aside>
  );
}

export default Login;
