import * as S from "./styles"

const TextInput = ({ label, placeholder, onChange }: any) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} onChange={onChange}/>
    </S.Container>
  )
}

export default TextInput