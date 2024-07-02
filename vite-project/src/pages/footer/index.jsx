import { Contact, ContactText, DirectionContact, FooterContainer, ListFooter, LogoContact, LogoFotooter, Options, SocialMedia, SquarelMedia } from "./styles.js"
import Logo from "../../assets/papo-hamburguer.png"
import Ping from "../../assets/Ping.svg"
import Email from "../../assets/Email.svg"
import Facebook from "../../assets/Facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Pinterest from "../../assets/Pinterest.svg"

export default function PapoFooter(){
    return(
        <FooterContainer>
            <LogoFotooter src={Logo}/>

            <ListFooter>
                <Options>Home</Options>
                <Options>Unidades</Options>
                <Options>Quem somos?</Options>
                <Options>Cardapio</Options>
            </ListFooter>

            <Contact>
                <DirectionContact>
                    <LogoContact src={Email}/>
                    <ContactText>papoburguer@gmail.com</ContactText>
                </DirectionContact>
                <DirectionContact>
                    <LogoContact src={Ping} />
                    <ContactText>Pernambuco,PE</ContactText>
                </DirectionContact>
                <SquarelMedia>
                    <SocialMedia src={Facebook}/>
                    <SocialMedia src={Pinterest}/>
                    <SocialMedia src={Instagram}/>
                </SquarelMedia>
            </Contact>
        </FooterContainer>
    )
}