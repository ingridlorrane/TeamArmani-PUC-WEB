import { useState, useEffect, SetStateAction } from 'react';
import api from '../../service/api';

import './style.css';

interface IModality {
  id: number;
  nome: string;
  dia_semana: string;
  horario: string;
}

function Schedule() {
  const [dados, setDados] = useState<SetStateAction<any>>([]);

  const getDados = () => {
    api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/modality`, {})
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDados();
    // getAulas();

    console.log('filtrado', dados);
  }, [setDados]);

  return (
    <aside className="schedule">
      <div>
        <ul>
          <li>&nbsp;</li>
          {dados
            .filter((a: any) => a.dia_semana === 'Segunda')
            .map(({ id, horario }: IModality) => (
              <li className="hour" key={id}>
                {horario.replace(':00:00', 'H')}
              </li>
            ))}
        </ul>
        <ul>
          <li className="dia">Segunda</li>
          {dados
            .filter((a: any) => a.dia_semana === 'Segunda')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Terça</li>
          {dados
            .filter((a: any) => a.dia_semana === 'Terça')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Quarta</li>
          {dados
            .filter((a: any) => a.dia_semana === 'Quarta')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Quinta</li>
          {dados
            .filter((a: any) => a.dia_semana === 'Quinta')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Quinta</li>
          {dados
            .filter((a: any) => a.dia_semana === 'Quinta')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Sexta</li>
          {dados
            .filter((a: any) => a.dia_semana === 'Sexta')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
        <ul>
          <li className="dia">Sabado</li>
          {dados
            .filter((a: any) => a.dia_semana === 'Sábado')
            .map(({ id, nome }: IModality) => (
              <li key={id}>{nome}</li>
            ))}
        </ul>
      </div>
    </aside>
  );
}

export default Schedule;
