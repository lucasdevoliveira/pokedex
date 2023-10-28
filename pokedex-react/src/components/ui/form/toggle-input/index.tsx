import { useState } from "react"
import * as S from "./styles"

const ToggleInput = ({ label }: any) => {
  const [isEnabled, setIsEnabled ] = useState(false);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input>
        <S.Options enabled={isEnabled} onClick={() => setIsEnabled(true)}>Ativado</S.Options>
        <S.Options enabled={!isEnabled} onClick={() => setIsEnabled(false)}>Desativado</S.Options>
      </S.Input>
    </S.Container>
  )
}

export default ToggleInput