import { useState, useEffect } from 'react';
import { Card } from './style';
import './style.css';

import bg_modalidade_jiu from '../../assets/images/bg_modalidade_jiu.png';
import bg_modalidade_kick from '../../assets/images/bg_modalidade_kick.png';
import { Button } from '../../components/button';

function Modality() {
  const [step, SetStep] = useState<number>(0);

  useEffect(() => {
    console.log(`step: ${step}`);
  }, [step]);

  return (
    <>
      {step === 0 && (
        <aside className="modality group">
          <Card onClick={() => SetStep(1)}>
            <p>KickBoxing</p>
            <img src={bg_modalidade_kick} alt="modalidade de kickboxing" />
          </Card>
          <Card onClick={() => SetStep(2)}>
            <p>Jiu-Jítsu</p>
            <img src={bg_modalidade_jiu} alt="modalidade de jiu-jitsu" />
          </Card>
        </aside>
      )}

      {step === 1 && (
        <aside className="modality kick">
          <h1>Kickboxing</h1>
          <div>
            <p>
              O kickboxing é uma arte marcial e esporte de combate que combina
              técnicas de boxe com chutes de artes marciais como o karatê e o
              muay thai. É uma modalidade intensa e desafiadora que oferece
              diversos benefícios físicos e mentais para quem a pratica.
            </p>

            <h2>Benefícios do Kickboxing</h2>
            <ul>
              <li>
                <strong>Condicionamento físico:</strong> O kickboxing é uma
                forma eficaz de exercício cardiovascular, ajudando a melhorar a
                resistência cardiovascular, a queima de calorias e a capacidade
                pulmonar.
              </li>
              <li>
                <strong>Coordenação e agilidade:</strong> A prática do
                kickboxing exige coordenação entre os membros superiores e
                inferiores, além de movimentos rápidos e precisos.
              </li>
              <li>
                <strong>Fortalecimento muscular:</strong> Os movimentos
                repetitivos de socos e chutes no kickboxing ajudam a fortalecer
                os músculos do corpo inteiro.
              </li>
              <li>
                <strong>Controle de peso:</strong> Devido à natureza intensa e
                ao alto gasto calórico, o kickboxing pode ser uma ótima opção
                para quem deseja perder peso ou manter um peso saudável.
              </li>
              <li>
                <strong>Autoconfiança e autoestima:</strong> O kickboxing
                proporciona um senso de conquista e melhora a autoconfiança à
                medida que você aprende novas técnicas e supera desafios
                físicos.
              </li>
              <li>
                <strong>Gerenciamento do estresse:</strong> O kickboxing é uma
                ótima maneira de liberar o estresse acumulado, ajudando a
                aliviar a tensão e melhorar o humor.
              </li>
              <li>
                <strong>Defesa pessoal:</strong> O kickboxing ensina habilidades
                de autodefesa que podem ser úteis em situações de perigo.
              </li>
            </ul>
          </div>
          <Button
            text="Voltar"
            handle={() => SetStep(0)}
            bg="white"
            color="#222727"
            size="100px"
            font="18px"
          />
        </aside>
      )}

      {step === 2 && (
        <aside className="modality jiu">
          <h1>Jiu-jítsu</h1>
          <div>
            <p>
              O jiu-jítsu é uma arte marcial japonesa que se concentra em
              técnicas de luta no chão e estrangulamentos. É um esporte
              desafiador e altamente técnico que oferece diversos benefícios
              físicos e mentais para quem o pratica.
            </p>
            <h2>Benefícios do jiu-jítsu</h2>
            <ul>
              <li>
                <strong>Condicionamento físico:</strong> O jiu-jítsu é um
                exercício completo que melhora o condicionamento cardiovascular,
                a resistência muscular e a flexibilidade.
              </li>
              <li>
                <strong>Técnica e precisão:</strong> A prática do jiu-jítsu
                exige técnica refinada e movimentos precisos para controlar e
                finalizar o oponente.
              </li>
              <li>
                <strong>Fortalecimento muscular:</strong> As técnicas de
                alavancas e imobilizações no jiu-jítsu fortalecem os músculos do
                corpo inteiro, especialmente o core e os membros superiores.
              </li>
              <li>
                <strong>Foco e concentração:</strong> Durante os treinos e
                competições de jiu-jítsu, é necessário manter um alto nível de
                foco e concentração para aplicar as técnicas corretamente.
              </li>
              <li>
                <strong>Disciplina e autocontrole:</strong> O jiu-jítsu ensina a
                importância da disciplina, respeito e autocontrole, promovendo
                valores essenciais no desenvolvimento pessoal.
              </li>
              <li>
                <strong>Confiança e autoestima:</strong> A medida que se aprende
                e aplica as técnicas do jiu-jítsu, a confiança e a autoestima
                são aprimoradas, resultando em um maior sentimento de segurança
                em si mesmo.
              </li>
              <li>
                <strong>Estratégia e tomada de decisão:</strong> O jiu-jítsu é
                um esporte estratégico, que requer tomadas de decisão rápidas e
                eficientes durante os combates.
              </li>
            </ul>
          </div>
          <Button
            text="Voltar"
            handle={() => SetStep(0)}
            bg="white"
            color="#222727"
            size="100px"
            font="18px"
          />
        </aside>
      )}
    </>
  );
}

export default Modality;
