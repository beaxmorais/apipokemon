import { useState, useEffect } from "react"
import Card from "../card/card"
import  MainList  from "./styles";

export interface Pokemon {
    id: string,
    name: string,
    category: string, 
    image_url: string,
    background_image_url: string, 
    created_at: string,
}

export interface Props {
    pokemons: Pokemon[] | null
}

export default function CardList ({pokemons}: Props) {

    return (
        <MainList>
             {pokemons ? (pokemons.map(item => (
                <div key={item.id}>
                    <Card id={item.id} name={item.name} category={item.category} image_url={item.image_url} background_image={item.background_image_url} created_at={item.created_at} />
                </div>
            ))):
                <></>
            }
        </MainList>
    )
}