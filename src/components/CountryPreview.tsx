import { FC } from "react";
import styled from "styled-components";

interface IButtonProps {
  isActive: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

interface IProps extends IButtonProps {
  flag: string
}

const Country = styled.button<IButtonProps>`
  padding: 0;
  border: 0;
  margin: 1rem;
  cursor: pointer;

  img {
    width: 150px;
    height: auto;
    box-shadow: rgba(50, 50, 93, 0.45) 0px 6px 24px -2px;
    transition: all 200ms cubic-bezier(0.215, 0.610, 0.355, 1);

    ${props => props.isActive
    ? `transform: scale(1.1);`
    : `&:hover { transform: scale(1.05); }`
  }
  }
`

const CountryPreview: FC<IProps> = ({ isActive, flag, onClick }) => {
  return (
    <Country isActive={isActive} onClick={onClick}><img src={flag} alt="Flag" /></Country>
  );
}

export default CountryPreview;
