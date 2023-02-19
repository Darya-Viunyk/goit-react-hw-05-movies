import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 1200px;
  gap: 10px;
  list-style: none;
`;

export const HeaderName = styled.h2`
  color: black;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`;
export const AboutName = styled.p`
  color: black;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Cart = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 3px;
  border: 2px solid #cdcece;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
