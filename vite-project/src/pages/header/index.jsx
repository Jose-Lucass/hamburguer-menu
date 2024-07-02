import { HeaderContainer, HeaderImg, SubContainer, Anchor } from "./styles"
import Logo from "../../assets/papo-hamburguer.png"


export default function Header(){
    return(
        <HeaderContainer>
            <HeaderImg src={Logo}/>
            <SubContainer>
                <Anchor>HOME</Anchor>
                <Anchor>HISTORIA</Anchor>
                <Anchor>CARDAPIO</Anchor>
                <Anchor>PROMOÇÕES</Anchor>
                <Anchor>FRANQUIA</Anchor>
                <Anchor>RESTAURANTES</Anchor>
                <Anchor>CONTATO</Anchor>
                <Anchor>PAPO CLUB</Anchor>
            </SubContainer>
        </HeaderContainer>
    )
}