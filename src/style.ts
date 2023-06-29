import styled, { createGlobalStyle } from 'styled-components';
import NoTeacher from './assets/images/bg_novo_fundo.png';
import Teacher from './assets/images//bg_fundo_teacher.png';

export const Container = styled.div`
  display: flex;
  place-content: center;
  width: 100vw;
  height: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${(props: { path: string }) =>
      props.path !== '/contact' && props.path !== '/'
        ? `url(${NoTeacher})`
        : `url(${Teacher})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;
    margin: 0;
  }
`;
