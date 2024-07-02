import { Description, SectionContainer, SquareImages, TextSubContainer, TitleHistory, WhoButton } from "./styles.js"
import Restaurante from "../../assets/restaurante.png"


export default function History(){
    return(
        <SectionContainer>
            <TextSubContainer>
                <TitleHistory>HISTORíA</TitleHistory>
                <Description>Lorem ipsum dolor sit amet consectetur. Arcu congue ut pulvinar nulla. Tempor suscipit donec diam nibh faucibus arcu. Nibh viverra vestibulum cursus amet molestie. Amet eu at lacus eros tincidunt laoreet donec ut. Tortor est suspendisse fusce tempor. Nulla quam consectetur commodo egestas tristique. Diam in nunc tempus ullamcorper viverra. Adipiscing lacus lectus at elementum eget sagittis nunc sit tempus. Ullamcorper ut aliquam ut consectetur. <br /> Viverra placerat odio et venenatis. Ac risus egestas ultrices commodo turpis in velit sed semper. Id in ut id donec enim leo amet. Nec id arcu turpis ut. Bibendum sed sed leo tempus imperdiet pellentesque proin molestie duis. Ultrices proin senectus eget vulputate purus. Feugiat sit blandit ut donec blandit orci. Faucibus sodales nulla lobortis platea. Pretium dignissim ut nunc porta diam nec egestas viverra tellus. Eros arcu purus at tincidunt ut iaculis feugiat. Placerat vitae sodales sed consectetur sit duis praesent. Felis proin at quam imperdiet etiam tortor velit. Tellus adipiscing sed arcu vestibulum ac viverra.</Description>
                <WhoButton>Quem somos?</WhoButton>
            </TextSubContainer>
            <SquareImages src={Restaurante}/>
        </SectionContainer>
    )
}