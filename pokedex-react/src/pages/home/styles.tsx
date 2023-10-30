import styled from "styled-components"

export const Container = styled.main`
  @media (min-width: 1025px) {
    display: flex;
    width: 1024px;
    margin: 0 auto;
    flex-direction: column;
  }
`

export const Menu = styled.div`
  display: none;
  @media (min-width: 1025px) {
    display: block;
    width: 300px;
    padding: 0 100px 0 0;
    margin: 24px 0 0 0;
  }
`

export const Content = styled.div`
  @media (min-width: 1025px) {
    display: flex; 
  }
`