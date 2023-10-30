import { useState } from "react"
import * as S from "./styles"

const ToggleInput = ({ enabled = false, label, onChange }: any) => {
  const [isEnabled, setIsEnabled ] = useState(enabled);

  const setStatus = (status: boolean) => {
    setIsEnabled(status)
    onChange(status)
  }

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input>
        <S.Options enabled={isEnabled} onClick={() => setStatus(true)}>Ativado</S.Options>
        <S.Options enabled={!isEnabled} onClick={() => setStatus(false)}>Desativado</S.Options>
      </S.Input>
    </S.Container>
  )
}

export default ToggleInput