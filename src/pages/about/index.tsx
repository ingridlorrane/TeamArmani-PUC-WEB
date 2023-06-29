import bg_quemsomos from '../../assets/images/bg_quemsomos_v2.png';
import './style.css';

function About() {
  return (
    <aside className="about">
      <div>
        <p>
          O Team Armanni é um centro de treinamento dedicado à arte marcial,
          nascido de um sonho que se tornou realidade em outubro de 2020.
        </p>
        <p>
          Nosso objetivo é proporcionar um ambiente inclusivo, onde todos possam
          se desenvolver e crescer. Com o apoio de amigos e familiares,
          trabalhamos incansavelmente para oferecer um espaço amplo e equipado,
          no qual podemos nos dedicar ao que amamos.
        </p>
        <p>
          Ao longo do tempo, evoluímos constantemente, aprimorando nossa
          estrutura e expandindo nossa equipe. Enfrentamos desafios, superamos
          obstáculos e contamos com o apoio essencial dos alunos, que se
          tornaram verdadeiros companheiros e bênçãos em nossa jornada.
        </p>
        <p>
          Hoje, temos mais de trinta alunos ativos, formando competidores e
          participando de eventos de luta, enquanto gradualmente conquistamos
          nosso espaço e ganhamos reconhecimento no meio marcial. <br />
          Acreditamos nos valores fundamentais da arte marcial: respeito,
          disciplina e honra. Esses princípios nos inspiram a lutar sempre,
          dentro e fora dos tatames. Venha fazer parte do Team Armanni e
          embarque em uma jornada de autodesenvolvimento e crescimento pessoal.
          Desafie-se, supere-se e junte-se a uma equipe apaixonada pela luta e
          pela superação.
        </p>
        <p>
          Aqui, acreditamos que todos têm o potencial de superar seus limites e
          alcançar seus objetivos.
        </p>
        <p>
          Nossa comunidade acolhedora e motivadora está pronta para recebê-lo de
          braços abertos.
        </p>
      </div>
      <img src={bg_quemsomos} alt="quem somos" />
    </aside>
  );
}

export default About;
