import * as S from "./styles"

const Button = ({ children, onClick, className }: any) => {
  return (
    <S.Button className={className} onClick={() => onClick()}>{children}</S.Button>
  )
}

export default Button