import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  font-size: 24px;
  font-weight: bold;

  &:active {
    color: red;
  }
`;
export const List = styled.ul`
  display: flex;
  background: #ffffff;
  padding: 20px;
  margin-top: 0;
  list-style: none;
  border: 2px solid #cdcece;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
