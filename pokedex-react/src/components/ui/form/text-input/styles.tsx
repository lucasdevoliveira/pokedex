import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Label = styled.label`
  color: var(--color-dark-gray);
  font-size: 16px;
  font-weight: 700;
`

export const Input = styled.input`
  border: 1px solid var(--color-light-gray);
  background: var(--color-light-gray);
  padding: 12px 16px;
  border-radius: 4px;
`