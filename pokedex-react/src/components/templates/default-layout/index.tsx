import { Outlet } from "react-router-dom"
import Header from "../../ui/header"
import * as S from "./styles"

const DefaultLayout = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  )
}

export default DefaultLayout