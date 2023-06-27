import { SetStateAction, useEffect, useState } from 'react';
import './style.css';
import api from '../../service/api';
import {
  MdEdit,
  MdRestoreFromTrash,
  MdSupervisedUserCircle,
} from 'react-icons/md';

interface IStudent {
  id: number;
  nome: string;
  modalidade: string;
  grau_faixa: string;
  situacao: string;
  dia_semana: string;
  horario: string;
}

function Student() {
  const [dados, setDados] = useState<SetStateAction<any>>([]);
  const [step, SetStep] = useState<number>(0);

  const getDados = () => {
    api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/students`, {})
      .then((res) => setDados(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDados();

    console.log('dados', dados);
  }, [setDados, SetStep]);

  return (
    <aside className="student">
      {step === 0 && (
        <>
          <h1>
            Gerenciar Alunos
            <MdSupervisedUserCircle />
          </h1>
          <form>
            <label htmlFor="">Nome:</label>
            <input type="text" placeholder="" />
            <label htmlFor="">Modalidade:</label>
            <input type="text" placeholder="" />
            <label htmlFor="">Faixa:</label>
            <input type="text" placeholder="" />
          </form>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Modalidade</th>
                <th>Faixa</th>
                <th>Situação</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {dados.map(
                ({ id, nome, modalidade, grau_faixa, situacao }: IStudent) => (
                  <tr key={id}>
                    <td>{nome}</td>
                    <td>{modalidade}</td>
                    <td>{grau_faixa}</td>
                    <td>{situacao}</td>
                    <td>
                      <button>
                        <MdEdit onClick={() => SetStep(1)} size={20} />
                      </button>
                      <button>
                        <MdRestoreFromTrash size={20} />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </>
      )}
      {step === 1 && (
        <div>
          <h1>Editar Aluno</h1>
          <form
            onSubmit={() => {
              ('');
            }}
          >
            <div>
              <label htmlFor="modalidade">Modalidade:</label>
              <input type="text" id="modalidade" name="modalidade" />
            </div>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" />
            </div>
            <div>
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input type="date" id="dataNascimento" name="dataNascimento" />
            </div>
            <div>
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="telefone" name="telefone" />
            </div>
            <div>
              <label htmlFor="diaPagamento">Dia do Pagamento:</label>
              <input type="number" id="diaPagamento" name="diaPagamento" />
            </div>
            <div>
              <label htmlFor="valorMensalidade">Valor da Mensalidade:</label>
              <input
                type="number"
                id="valorMensalidade"
                name="valorMensalidade"
              />
            </div>
            <button type="submit">Salvar</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="container-visualizar">
          <div className="visualizar-frame">
            <div className="cadastrar">
              <button className="cadastrar-button">Cadastrar</button>
              <p>Pesquisar aluno</p>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>NOME:</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>MODALIDADE:</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>FAIXA:</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <button>Pesquisar</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="resultado-container">
              <p>Resultado da pesquisa</p>
            </div>

            <div className="resultado-frame">
              <table>
                <tbody>
                  <tr>
                    <td>NOME</td>
                    <td>MODALIDADE</td>
                    <td>FAIXA</td>
                  </tr>
                  {/* LÓGICA */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="cadastro-container">
          <div className="cadastro-frame">
            <form className="cadastro-form">
              <p className="cadastro-title">Cadastrar aluno</p>
              <div className="cadastro-group">
                <label htmlFor="nome" className="cadastro-label">
                  Nome: ⠀
                </label>
                <input type="text" id="nome" className="cadastro-input" />
              </div>
              <div className="cadastro-group">
                <label htmlFor="telefone" className="cadastro-label">
                  Telefone: ⠀
                </label>
                <input type="text" id="telefone" className="cadastro-input" />
              </div>
              <div className="cadastro-group">
                <label htmlFor="modalidade" className="cadastro-label">
                  Modalidade: ⠀
                </label>
                <input type="text" id="modalidade" className="cadastro-input" />
              </div>
              <div className="cadastro-group">
                <label htmlFor="faixa" className="cadastro-label">
                  Faixa: ⠀
                </label>
                <input type="text" id="faixa" className="cadastro-input" />
              </div>
              <div className="cadastro-group">
                <label htmlFor="dataNascimento" className="cadastro-label">
                  Data de Nascimento: ⠀
                </label>
                <input
                  type="date"
                  id="dataNascimento"
                  className="cadastro-input"
                />
              </div>
              <button type="submit" className="cadastro-button">
                Salvar
              </button>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Student;
