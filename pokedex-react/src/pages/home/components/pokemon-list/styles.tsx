import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 24px 0 0 0;
  @media (min-width: 1025px) {
    overflow-x: scroll;
    height: calc(100vh - 245px);
  }

`

export const Pokemon = styled.div`
  border-radius: 4px;
  border: 1px solid var(--color-light-gray);
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 136px;
  overflow: hidden;
  height: 205px;
  @media (min-width: 375px) {
    width: 163px;
  }
  @media (min-width: 425px) {
    width: 188px;
  }
  @media (min-width: 768px) {
    width: 172px;
  }
  @media (min-width: 1024px) {
    width: 177px;
  }
  > .image {
    display: flex;
    justify-content: center;
    img {
      height: 100px;
    }
  }
  > .infos {
    display: flex;
    flex-direction: column;
    margin: 16px 0 0 0;
    > .number {
      color: var(--color-dark-gray);
      font-weight: 700;
      font-size: 12px;
    }
    > .name {
      color: var(--color-black);
      font-size: 14px;
      font-weight: 700;
      margin: 2px 0 0 0;
    }
    > .type-list {
      display: flex;
      gap: 8px;
      margin: 6px 0 0 0;
    }
  }
`

export const Type = styled.div<any>`
  background: var(--type-${props => props.type.toLowerCase()});
  padding: 3px 6px;
  border-radius: 4px;
  display: flex;
  > .name {
    color: #fff;
    font-weight: 700;
    font-size: 10px;
  }
`