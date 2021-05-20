import styled from "styled-components";

const StyledButton = styled.button<ButtonComponentProps>`
  background: "purple";
  color: "white";

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 6px;
  width: 20em;
  height: 3em;
`;

export type ButtonComponentProps = {
  children?: HTMLCollection | string;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  onClick,
  children,
  ...otherProps
}: ButtonComponentProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
