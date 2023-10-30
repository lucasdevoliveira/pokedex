import * as S from "./styles"

const TextInput = ({ label, placeholder, onChange, className }: any) => {
  return (
    <S.Container className={className}>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} onChange={onChange}/>
    </S.Container>
  )
}

export default TextInput