import { Buttons } from "./style";

export interface IButton {
  text?: string | JSX.Element;
  icon?: JSX.Element;
  handle?: () => void;
  size?: string;
  color?: string;
  bg?: string;
  font?: string;
  display?: string;
  justify?: string;
  align?: string;
}

export const Button = ({
  text,
  icon,
  handle,
  size,
  color,
  bg,
  font,
  display,
  justify,
  align,
}: IButton) => {
  return (
    <Buttons
      onClick={handle}
      onKeyDown={(event: any) => event.which === 13 && handle}
      size={size}
      color={color}
      bg={bg}
      font={font}
      display={display}
      justify={justify}
      align={align}
    >
      {text}
      {icon}
    </Buttons>
  );
};
