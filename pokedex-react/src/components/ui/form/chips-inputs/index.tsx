import * as S from "./styles"

const ChipsInput = ({ label, data, onChange }: any) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Chips>
        {data && data.map((item: any) => {
          return (
            <S.Chip type={item.label} selected={item.selected} onClick={() => onChange({
              label: item.label,
              selected: !item.selected
            })}>
              <span className="name">{ item.label }</span>
            </S.Chip>
          )
        })}
      </S.Chips>
    </S.Container>
  )
}

export default ChipsInput