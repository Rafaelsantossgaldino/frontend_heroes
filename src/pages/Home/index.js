import { Container, HeroCard, CardList } from "./styles" 

export default function Home() {

  const heroes = [
    {
      id: 1,
      title: 'Spider Man',
      image_url: 'https://static1.purebreak.com.br/articles/9/98/61/9/@/392535--homem-aranha-3-multiverso-teorias-c-950x0-3.jpg'
    },
    {
      id: 2,
      title: 'Hulk',
      image_url: 'https://static1.purebreak.com.br/articles/9/98/61/9/@/392535--homem-aranha-3-multiverso-teorias-c-950x0-3.jpg'
    },
    {
      id: 3,
      title: 'Batman',
      image_url: 'https://static1.purebreak.com.br/articles/9/98/61/9/@/392535--homem-aranha-3-multiverso-teorias-c-950x0-3.jpg'
    }
  ]

  return(
    <Container>
      <h1>Heroes</h1>
      <CardList>
        {heroes.map(hero => {
          return (
            <HeroCard key={hero.id}>
              <a href="http:google.com.br"><img src={hero.image_url} alt={hero.tile}></img></a>
              <span>{hero.title}</span>
            </HeroCard>
          )
        })}
      </CardList>
    </Container>
  )
}
