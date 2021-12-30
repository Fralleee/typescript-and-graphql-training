import { FC } from "react";
import styled from "styled-components";

// #region styled
const List = styled.ul`
  margin: 0;
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
// #endregion

const CountryList: FC = ({ children }) => {
  return (
    <List>{children}</List>
  );
}

export default CountryList;
