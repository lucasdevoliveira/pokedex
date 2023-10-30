import styled from "styled-components"

export const Container = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1025px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    .button {
      display: none;
    }
    .name-input {
      width: 586px;
    }
    .order-input {
      width: 405px;
    }
  }
`