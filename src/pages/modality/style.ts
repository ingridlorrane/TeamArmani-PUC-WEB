import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  height: 372px;
  padding: 12px;
  cursor: pointer;
  border-radius: 1rem;
  background-color: #a4a6a6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: #a4a6a6 0px 5px 15px;
    width: 304px;
    height: 376px;
  }
`;
