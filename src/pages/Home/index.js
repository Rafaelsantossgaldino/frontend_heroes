import { Container, HeroCard, CardList } from "./styles" 
import { useState, useEffect } from "react"

export default function Home() {

  const [heroes, setHeroes] = useState([])
  const image_path = ""

  async function getHeroes() {
    const response = await fetch("http://127.0.0.1:3001/api/heroes")
    const content = await response.json()
    setHeroes(content)
  }
  useEffect(() => {
    getHeroes()
  }, [])
  
  return (
    <Container>
      <h1>Heroes</h1>
      <CardList>
        {heroes.map(hero => {
          return (
            <HeroCard key={hero.id}>
              <img src={hero.image_url} alt={hero.tile}/>
              <span>{hero.title}</span>
            </HeroCard>
          )
        })}
      </CardList>
    </Container>
  );
}
