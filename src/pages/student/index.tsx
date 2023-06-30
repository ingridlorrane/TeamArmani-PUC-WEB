import {
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api from "../../service/api";

import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import {
  FaPen,
  FaLock,
  FaUserPen,
  FaLockOpen,
  FaUserLock,
  FaUsersGear,
  FaCircleCheck,
  FaUserPlus,
  FaCircleExclamation,
} from "react-icons/fa6";

import "./style.css";
import { useNavigate } from "react-router-dom";

interface IStudent extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  nome: string;
  modalidade: string;
  grau_faixa: string;
  situacao?: string;
  dia_semana?: string;
  horario?: string;
}

function Student() {
  // Estado de listagem do aluno
  const [dados, SetDados] = useState<SetStateAction<any>>([]);
  // Estado de seleção do aluno
  const [studentSelected, SetStudentSelected] = useState<SetStateAction<any>>(
    []
  );
  // Estado de edição do aluno
  const [newNome, SetNewNome] = useState<string>("");
  const [newModalidade, SetNewModalidade] = useState<string>("");
  const [newFaixa, SetNewFaixa] = useState<string>("");

  // Estado de Etapa da página
  const [step, SetStep] = useState<string>("manager");

  // Estado dos tipos de modals
  const [openModalAlert, SetOpenModalAlert] = useState<boolean>(false);
  const [openAddSuccess, SetOpenAddSuccess] = useState<boolean>(false);
  const [openEditSuccess, SetOpenEditSuccess] = useState<boolean>(false);
  const [openInativeSuccess, SetOpenInativeSuccess] = useState<boolean>(false);
  const [openActiveSuccess, SetOpenActiveSuccess] = useState<boolean>(false);

  const navigateTo = useNavigate();

  const handleEditStudent = (id: string) => {
    const student = dados.filter((a: any) => a.id === id);
    SetStudentSelected(student);
    console.log(student);
    SetNewNome(student[0].nome);
    SetNewModalidade(student[0].modalidade);
    SetNewFaixa(student[0].grau_faixa);
    SetStep("edit_student");
  };

  const handleCheckStatusStudent = (id: string) => {
    const student = dados.filter((a: any) => a.id === id);
    SetStudentSelected(student);

    console.log(student[0].situacao);

    student[0].situacao === "irregular"
      ? SetStep("active")
      : SetStep("inative");
  };

  const handleAddStudent = () => {
    const lastUser = dados[dados.length - 1];
    lastUser.id = lastUser.id + 1;

    console.log(lastUser.id + 1);
    console.log(newNome.length);

    if (newNome.length < 1 || newModalidade.length < 1 || newFaixa.length < 1) {
      SetOpenModalAlert(!openModalAlert);
    } else {
      api()
        .post(`${import.meta.env.VITE_API_ROTA_URL}/students`, {
          dia_semana: "sabado",
          grau_faixa: newFaixa,
          horario: "09:00:00",
          modalidade: newModalidade,
          nome: newNome,
          situacao: "regular",
        })
        .then((res) => SetDados(res.data))
        .catch((err) => console.log(err));

      SetOpenAddSuccess(!openAddSuccess);
    }
  };

  const handleUploadStudent = () => {
    const idEdit = Number(studentSelected[0].id);
    api()
      .put(`${import.meta.env.VITE_API_ROTA_URL}/students/${idEdit}`, {
        id: idEdit,
        nome: newNome !== "" ? newNome : studentSelected[0].nome,
        modalidade:
          newModalidade !== "" ? newModalidade : studentSelected[0].modalidade,
        grau_faixa: newFaixa !== "" ? newFaixa : studentSelected[0].grau_faixa,
      })
      .then((res) => SetDados(res.data))
      .catch((err) => console.log(err));

    SetOpenEditSuccess(!openEditSuccess);
  };

  const handleInativeStudent = (id: number) => {
    api()
      .put(`${import.meta.env.VITE_API_ROTA_URL}/students/${id}`, {
        id: id,
        situacao: "irregular",
      })
      .then((res) => SetDados(res.data))
      .catch((err) => console.log(err));

    SetOpenInativeSuccess(!openInativeSuccess);
  };

  const handleActiveStudent = (id: number) => {
    api()
      .put(`${import.meta.env.VITE_API_ROTA_URL}/students/${id}`, {
        id: id,
        situacao: "regular",
      })
      .then((res) => SetDados(res.data))
      .catch((err) => console.log(err));

    SetOpenActiveSuccess(!openActiveSuccess);
  };

  const getDados = async () => {
    await api()
      .get(`${import.meta.env.VITE_API_ROTA_URL}/students`, {})
      .then((res) => SetDados(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (dados.length < 1) {
      getDados();
    }
  }, [dados, step, studentSelected, newNome, newModalidade, newFaixa]);

  return (
    <aside className="student">
      {step === "manager" && (
        <>
          <h1>
            Gerenciar Alunos
            <FaUsersGear />
          </h1>
          <form>
            <Button
              text="Adicionar Aluno"
              icon={<FaUserPlus size={32} />}
              handle={() => SetStep("add")}
              bg="#222727"
              color="#c9c7c7"
              size="fit-content"
              display="flex"
              justify="flex-end"
              align="center"
            />
            {/* 
            filtros para feature futura
            <label htmlFor="">Nome:</label>
            <input type="text" placeholder="" />
            <label htmlFor="">Modalidade:</label>
            <input type="text" placeholder="" />
            <label htmlFor="">Faixa:</label>
            <input type="text" placeholder="" />
            */}
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
                      <Button
                        text={<FaPen size={20} />}
                        handle={() => handleEditStudent(id)}
                        color="#222727"
                        bg="#c9c7c7"
                        size="fit-content"
                      />
                      <Button
                        text={
                          situacao === "regular" ? (
                            <FaLockOpen size={20} />
                          ) : (
                            <FaLock size={20} />
                          )
                        }
                        handle={() => {
                          handleCheckStatusStudent(id);
                        }}
                        color="#222727"
                        bg="#c9c7c7"
                        size="fit-content"
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </>
      )}
      {step === "edit_student" && (
        <>
          <div>
            <h1>
              Editar Aluno
              <FaUserPen />
            </h1>
            <aside className="edit">
              <div>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={newNome}
                  onChange={(e) => SetNewNome(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="modalidade">Modalidade:</label>
                <input
                  type="text"
                  id="modalidade"
                  name="modalidade"
                  value={newModalidade}
                  onChange={(e) => SetNewModalidade(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="nome">Grau da Faixa:</label>
                <input
                  type="text"
                  id="grau_faixa"
                  name="grau_faixa"
                  value={newFaixa}
                  onChange={(e) => SetNewFaixa(e.target.value)}
                />
              </div>
              <div className="group-buttons">
                <Button
                  text="Editar"
                  handle={() => handleUploadStudent()}
                  bg="#222727"
                  color="white"
                  size="fit-content"
                  font="18px"
                />
                <Button
                  text="Voltar"
                  handle={() => SetStep("manager")}
                  bg="white"
                  color="#222727"
                  size="fit-content"
                  font="18px"
                />
              </div>
            </aside>
          </div>
          <Modal
            showModal={openEditSuccess}
            text="Aluno editado com Sucesso!"
            symbol={<FaCircleCheck size={42} color="#222727" />}
            button={
              <Button
                text="Voltar"
                handle={() => (
                  navigateTo("/student"), window.location.reload()
                )}
                bg="#222727"
                color="white"
                size="fit-content"
                font="18px"
              />
            }
          />
        </>
      )}
      {step === "inative" && (
        <>
          <div>
            <h1>
              Inativar Aluno
              <FaUserLock />
            </h1>
            <aside className="delete">
              <div>
                <label htmlFor="">Nome:</label>
                <h3>{studentSelected[0].nome}</h3>
              </div>
              <div>
                <label htmlFor="">Modalidade:</label>
                <h3>{studentSelected[0].modalidade}</h3>
              </div>
              <div>
                <label htmlFor="">Faixa:</label>
                <h3>{studentSelected[0].grau_faixa}</h3>
              </div>
              <div className="group-buttons">
                <Button
                  text="Inativar"
                  handle={() => handleInativeStudent(studentSelected[0].id)}
                  bg="#222727"
                  color="white"
                  size="fit-content"
                  font="18px"
                />
                <Button
                  text="Voltar"
                  handle={() => SetStep("manager")}
                  bg="white"
                  color="#222727"
                  size="fit-content"
                  font="18px"
                />
              </div>
            </aside>
          </div>
          <Modal
            showModal={openInativeSuccess}
            text={`Aluno ${studentSelected[0].nome} está Inativado!`}
            symbol={<FaCircleCheck size={42} color="#222727" />}
            button={
              <Button
                text="Voltar"
                handle={() => (
                  navigateTo("/student"), window.location.reload()
                )}
                bg="#222727"
                color="white"
                size="fit-content"
                font="18px"
              />
            }
          />
        </>
      )}
      {step === "active" && (
        <>
          <div>
            <h1>
              Reativar Aluno
              <FaUserLock />
            </h1>
            <aside className="delete">
              <div>
                <label htmlFor="">Nome:</label>
                <h3>{studentSelected[0].nome}</h3>
              </div>
              <div>
                <label htmlFor="">Modalidade:</label>
                <h3>{studentSelected[0].modalidade}</h3>
              </div>
              <div>
                <label htmlFor="">Faixa:</label>
                <h3>{studentSelected[0].grau_faixa}</h3>
              </div>
              <div>
                <label htmlFor="">Situação:</label>
                <h3>{studentSelected[0].situacao}</h3>
              </div>
              <div className="group-buttons">
                <Button
                  text="Reativar"
                  handle={() => handleActiveStudent(studentSelected[0].id)}
                  bg="#222727"
                  color="white"
                  size="fit-content"
                  font="18px"
                />
                <Button
                  text="Voltar"
                  handle={() => SetStep("manager")}
                  bg="white"
                  color="#222727"
                  size="fit-content"
                  font="18px"
                />
              </div>
            </aside>
          </div>
          <Modal
            showModal={openActiveSuccess}
            text={`Aluno ${studentSelected[0].nome} está Reativado!`}
            symbol={<FaCircleCheck size={42} color="#222727" />}
            button={
              <Button
                text="Voltar"
                handle={() => (
                  navigateTo("/student"), window.location.reload()
                )}
                bg="#222727"
                color="white"
                size="fit-content"
                font="18px"
              />
            }
          />
        </>
      )}
      {step === "add" && (
        <>
          <div>
            <h1>
              Adicionar Aluno
              <FaUserPlus />
            </h1>
            <aside className="edit">
              <div>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder=""
                  onChange={(e) => SetNewNome(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="modalidade">Modalidade:</label>
                <input
                  type="text"
                  id="modalidade"
                  name="modalidade"
                  placeholder=""
                  onChange={(e) => SetNewModalidade(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="nome">Grau da Faixa:</label>
                <input
                  type="text"
                  id="grau_faixa"
                  name="grau_faixa"
                  placeholder=""
                  onChange={(e) => SetNewFaixa(e.target.value)}
                />
              </div>
              <div className="group-buttons">
                <Button
                  text="Adicionar"
                  handle={() => handleAddStudent()}
                  bg="#222727"
                  color="white"
                  size="fit-content"
                  font="18px"
                />
                <Button
                  text="Voltar"
                  handle={() => SetStep("manager")}
                  bg="white"
                  color="#222727"
                  size="fit-content"
                  font="18px"
                />
              </div>
            </aside>
          </div>
          <Modal
            showModal={openAddSuccess}
            text="Aluno adicionado com Sucesso!"
            symbol={<FaCircleCheck size={42} color="#222727" />}
            button={
              <Button
                text="Voltar"
                handle={() => (
                  navigateTo("/student"), window.location.reload()
                )}
                bg="#222727"
                color="white"
                size="fit-content"
                font="18px"
              />
            }
          />
          <Modal
            showModal={openModalAlert}
            text="Todos os campos precisam estar preenchidos!"
            symbol={<FaCircleExclamation size={42} color="#222727" />}
            button={
              <Button
                text="Voltar"
                handle={() => SetOpenModalAlert(!openModalAlert)}
                bg="#222727"
                color="white"
                size="fit-content"
                font="18px"
              />
            }
          />
        </>
      )}
    </aside>
  );
}

export default Student;
