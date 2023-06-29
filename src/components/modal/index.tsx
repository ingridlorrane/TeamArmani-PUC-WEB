import { ModalBody, ModalContainer, Modals } from './style';

export interface IModal {
  showModal?: boolean;
  handle?: () => void;
  text?: string;
  symbol?: JSX.Element;
  button?: JSX.Element;
}

export const Modal = ({ showModal, button, symbol, text, handle }: IModal) => {
  return (
    <ModalContainer style={{ display: showModal ? 'block' : 'none' }}>
      <Modals onClick={handle}>
        <ModalBody>
          {symbol}
          {text}
          {button}
        </ModalBody>
      </Modals>
    </ModalContainer>
  );
};
