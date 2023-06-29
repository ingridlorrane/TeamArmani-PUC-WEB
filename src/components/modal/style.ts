import styled from 'styled-components';
import { IModal } from '.';

export const ModalContainer = styled.div<IModal>`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modals = styled.div<IModal>`
  background-color: #fefefe;
  width: 480px;
  margin: 15% auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #888;
`;
export const ModalBody = styled.div<IModal>`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  height: 200px;
`;
