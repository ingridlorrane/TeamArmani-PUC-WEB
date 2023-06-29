import styled, { createGlobalStyle } from 'styled-components';
import NoTeacher from './assets/images/bg_novo_fundo.png';
import Teacher from './assets/images//bg_fundo_teacher.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin-bottom: 24px;
  min-height: 600px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${(props: { path: string }) =>
      props.path !== '/contact' && props.path !== '/'
        ? `url(${NoTeacher})`
        : `url(${Teacher})`};
    background-color: #222727;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    min-height: 100vh;
    height:100%;
    margin: 0;
  }
`;
