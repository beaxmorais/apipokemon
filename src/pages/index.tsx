import CardList from "./components/cardList/cardList"
import Header from "./components/header/header"
import { useEffect, useState } from "react"

type Pokemon = {
  id: string,
  name: string,
  category: string, 
  image_url: string,
  background_image_url: string, 
  created_at: string,
}

export default function Home() {

  const [searchPokemon, setSearchPokemon ] = useState('')
  const [filter, setFilter] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Pokemon[] | null>(null); 

  const handleQueryName = (query: string) => { 
    setSearchPokemon(query)
    setFilter(true)
  }

  let url = 'https://dev-api-teste.mandarin.com.br/pokemons'

  if(filter) {
     url = `https://dev-api-teste.mandarin.com.br/pokemons?name=${searchPokemon}`;
  }

  const fetchPokemons = async () => {
      try {
          setLoading(true)

          const response = await fetch(url)
          const resdata = await response.json()

          if(!resdata) throw ' Problema na requisiçao ' 

          const data: Pokemon[] = resdata;
          setData(data)

      } catch (error) {
          console.log(error)
      } finally {
          setLoading(false)
      }
  }

  useEffect(() => {
    fetchPokemons()
  }, [searchPokemon])

  return (
    <>
     <Header queryName={handleQueryName}></Header>
     <CardList pokemons={data}></CardList>
    </>
  )
}
