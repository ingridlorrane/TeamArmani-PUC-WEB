import styled from 'styled-components';
import { IButton } from '.';

export const Buttons = styled.button<IButton>`
  background-color: ${(p: IButton) => p.bg && p.bg};
  font-size: ${(p: IButton) => p.font && p.font};
  color: ${(p: IButton) => p.color && p.color};
  width: ${(p: IButton) => p.size && p.size};
  display: ${(p: IButton) => p.display && p.display};
  justify-content: ${(p: IButton) => p.justify && p.justify};
  align-items: ${(p: IButton) => p.align && p.align};
  grid-gap: 12px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  border: none;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: ${(p: IButton) => p.color && p.color};
    color: ${(p: IButton) => p.bg && p.bg};
  }
`;
