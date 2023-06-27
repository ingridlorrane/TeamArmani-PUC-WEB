import styled from 'styled-components';
import BgTeache from './assets/images/bg_teacher.png';

export const Container = styled.div`
  display: flex;
  place-content: center;
  width: 100vw;
  height: 100%;
`;

export const BgTeacher = styled.div`
  background-image: url(${BgTeache});
  background-position: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 800px;
  width: 40%;
  margin: 0;
  background-repeat: no-repeat;
  background-size: contain;
`;
