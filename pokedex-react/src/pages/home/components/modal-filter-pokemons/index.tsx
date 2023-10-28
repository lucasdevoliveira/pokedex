import * as S from "./styles"
import Modal from "../../../../components/ui/modal"
import Title from "../../../../components/ui/typography/title"
import TextInput from "../../../../components/ui/form/text-input"
import ToggleInput from "../../../../components/ui/form/toggle-input"
import SelectInput from "../../../../components/ui/form/select-input"

const ModalFilterPokemons = ({ open = false, onClose }: any) => {
  const options = [
    {
      label: 'opções 1',
      value: 'opções 1'
    },
    {
      label: 'opções 2',
      value: 'opções 2'
    },
    {
      label: 'opções 3',
      value: 'opções 3'
    },
    {
      label: 'opções 4',
      value: 'opções 4'
    },
    {
      label: 'opções 2',
      value: 'opções 2'
    },
    {
      label: 'opções 3',
      value: 'opções 3'
    },
    {
      label: 'opções 4',
      value: 'opções 4'
    }
  ]
  return (
    <>
      { open 
        ? (
          <S.Container>
            <Modal onClose={() => onClose()}>
              <S.Content>
                <Title>Filtrar por:</Title>
                <S.Inputs>
                  {/* <TextInput label="Ordens" placeholder="Selecione uma opção" /> */}
                  <SelectInput 
                    label="Ordens" 
                    placeholder="Selecione uma opção" 
                    options={options}
                  />
                  <ToggleInput label="Favoritos" />
                </S.Inputs>
              </S.Content>
            </Modal>
          </S.Container> 
        )
        : null
      }
    </>
  )
}

export default ModalFilterPokemons