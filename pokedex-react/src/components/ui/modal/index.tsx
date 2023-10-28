import * as S from "./styles"

const Modal = ({ children, onClose }: any) => {
  return (
    <S.Container>
      <S.Content>
        <S.Close onClick={() => onClose()}>X</S.Close>
        {children}
      </S.Content>
    </S.Container>
  )
}

export default Modal