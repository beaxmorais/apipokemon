import CardStyle from "./styles";
import Image from "next/image";

export interface Pokemon {
    id: string, 
    name: string,
    category: string,
    image_url: string,
    background_image: string,
    created_at: string,
}

export default function Card( 
    { id, 
      name, 
      category, 
      image_url, 
      background_image, 
      created_at}: Pokemon) {

    return(
    <CardStyle>
    <Image
        src={image_url}
        alt="Descrição da imagem"
        width={45}
        height={49}
      />
        <h1>{name}</h1>
        <p>{category}</p>
    </CardStyle>)
        
}