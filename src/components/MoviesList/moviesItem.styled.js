import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(Link)`
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  font-size: 34px;
  font-weight: 400;

  &:hover,
  :focus {
    color: #d0451b;
  }
`;
