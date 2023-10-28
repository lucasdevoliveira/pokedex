import * as S from "./styles"
import Title from "../typography/title"

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_44)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50 27.2222H38.7653C37.6975 33.8365 31.9409 38.8889 24.9996 38.8889C18.0583 38.8889 12.3017 33.8365 11.2339 27.2222H1.22818e-08C1.12886 39.9884 11.8907 50 25 50C38.1093 50 48.8711 39.9884 50 27.2222ZM50 22.7778H38.7653C37.6975 16.1635 31.9409 11.1111 24.9996 11.1111C18.0583 11.1111 12.3017 16.1635 11.2339 22.7778H0C1.12886 10.0116 11.8907 0 25 0C38.1093 0 48.8711 10.0116 50 22.7778Z" fill="white"/>
            <path d="M24.9996 34.4445C30.236 34.4445 34.481 30.216 34.481 25C34.481 19.784 30.236 15.5556 24.9996 15.5556C19.7632 15.5556 15.5182 19.784 15.5182 25C15.5182 30.216 19.7632 34.4445 24.9996 34.4445Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_1_44">
              <rect width="50" height="50" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <Title>Pokedex</Title>
      </S.Logo>
    </S.Header>
  )
}

export default Header