import { useState, useEffect } from "react"
import * as S from "./styles"

const SelectInput = ({ label, placeholder, options, onChange, value, className }: any) => {
  const [valueDefault, setValueDefault] = useState<any>(null)
  const [open, setOpen] = useState(false)

  const selectitem = (item: any) => {
    setValueDefault(item)
    setOpen(!open)
    onChange(item)
  }

  useEffect(() => {
    console.log(value)
    setValueDefault(value)
  }, [value])

  return (
    <S.Container className={className}>
      <S.Label>{label}</S.Label>
      <S.Input onClick={() => setOpen(!open)}>
        <p className="value">
          { valueDefault?.value
            ? valueDefault?.label
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