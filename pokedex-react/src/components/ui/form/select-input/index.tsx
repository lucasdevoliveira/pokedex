import { useState } from "react"
import * as S from "./styles"

const SelectInput = ({ label, placeholder, options }: any) => {
  const [value, setValue] = useState<any>(null)
  const [open, setOpen] = useState(false)

  const selectitem = (item: any) => {
    setValue(item)
    setOpen(!open)
  }

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input onClick={() => setOpen(!open)}>
        <p>
          { value?.value
            ? value?.value
            : placeholder 
          }
        </p>
      </S.Input>
      { open 
        ? (
          <S.Options>
            { options.map((item: any, key: number) => {
              return (
                <S.Option key={key} onClick={() => selectitem(item)}>
                  { item.label }
                </S.Option>
              )
            })}
          </S.Options>
        )
        : null 
      }
    </S.Container>
  )
}

export default SelectInput