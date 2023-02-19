import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(NavLink)`
  box-shadow: inset 0px 1px 0px 0px #cf866c;
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border-radius: 3px;
  border: 1px solid #942911;

  cursor: pointer;
  color: #ffffff;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 13px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #854629;
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
    background-color: #bc3315;
  }
  &:focus {
    position: relative;
    top: 1px;
  }
`;
export const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  gap: 20px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  gap: 20px;
`;
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  background-color: #ffffff;
  margin-left: 50px;
`;
export const PageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const Header = styled.h2`
  color: black;
  font-size: 44px;
  font-weight: 400;
`;
