import * as S from "./styles"

const Button = ({ children, onClick }: any) => {
  return (
    <S.Button onClick={() => onClick()}>{children}</S.Button>
  )
}

export default Button