import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 12px;
      transform: rotate(-90deg);
      width: 12px;
    }
  }

  h1 {
    font-size: 24px;
  }
`;
