import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`

export const Label = styled.label`
  color: var(--color-dark-gray);
  font-size: 16px;
  font-weight: 700;
`

export const Input = styled.div`
  border: 1px solid var(--color-light-gray);
  background: var(--color-light-gray);
  padding: 0 16px;
  height: 44px;
  color: var(--color-dark-gray)
  display: flex;
  font-size: 14px;
  align-items: center;
  border-radius: 4px;
  display: flex;
  gap: 8px;
`

export const Options = styled.div`
  width: 100%;
  height: 100px;
  background: var(--color-white);
  position: absolute;
  border: 1px solid var(--color-light-gray);
  margin: 76px 0 0 0;
  padding: 8px 12px;
  border-radius: 4px;
  overflow: auto;
`

export const Option = styled.div`
  padding: 8px 6px;
  font-size: 14px;
`



