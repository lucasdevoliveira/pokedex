import * as S from "./styles"

const TextInput = ({ label, placeholder }: any) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} />
    </S.Container>
  )
}

export default TextInput