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

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Chip = styled.div<any>`
  border: 1px solid var(--type-${props => props.type.toLowerCase()});
  background: ${props => props.selected ? `var(--type-${props.type.toLowerCase()})` : '#fff'};
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  > .name {
    color: ${props => props.selected ? `var(--color-white)` : `var(--type-${props.type.toLowerCase()})`};
    font-weight: 700;
    font-size: 12px;
  }
`