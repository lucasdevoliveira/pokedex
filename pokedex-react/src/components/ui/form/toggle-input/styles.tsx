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

export const Input = styled.div`
  border: 1px solid var(--color-light-gray);
  background: var(--color-light-gray);
  padding: 4px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
`

export const Options = styled.div<any>`
  padding: 8px;
  width: 100%;
  text-align: center;
  background: var(${(props) => props.enabled ? '--color-green' : 'transparent'});
  border-radius: 4px;
  color: var(${(props) => props.enabled ? '--color-white' : '--color-dark-gray'});
  font-weight: 400;
`