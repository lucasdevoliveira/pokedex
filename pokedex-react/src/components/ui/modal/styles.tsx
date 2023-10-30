import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  background: rgba(217, 217, 217, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 400px;
  height: 600px;
  background: var(--color-white);
  margin: 124px 0px 0 0;
  border-radius: 4px;
  padding: 24px;
  position: relative;
`

export const Close = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`