import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: 2px solid #fff;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
