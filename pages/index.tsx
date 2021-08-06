import Layout from '../components/Layout';
import Image from 'next/image';
import Logo from '../assets/PokeDex.png';
import PokemonThumb from '../components/PokemonThumb';
import Link from 'next/link'
import {  GetServerSideProps } from 'next'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination'

  export interface Result {
    name: string,
    url: string,
    image: string,
    id: number,
  }

  export interface Pokemons {
    pokemons: Result[],
  }

  export default function Home({ pokemons }: Pokemons) {
  
  const [pokemonList, setPokemonList] = useState(pokemons);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=16");
  const [nextPageUrl, setNextPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=16");
  const [prevPageUrl, setPrevPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=16");
  

  useEffect(() => {
    axios.get(currentPageUrl).then(res=> {
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemonList(res.data.results.map((result:Result) => {
        let url = result.url;
        let id = parseInt(url.split('/')[6])
        let paddedIndex = '';
        if(id + 1 > 100){
          paddedIndex = id.toString();
        } else {
              paddedIndex = ("00" + (id )).slice(-3)
        }
        let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
        return {
          ...result,
          image, 
          id,
        };
      }))
    })
  }, [currentPageUrl])
  
  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const prevPage = () => {
    if(prevPageUrl != null) {
      setCurrentPageUrl(prevPageUrl)
    } 
  }

  return (
    <Layout title="PokeDex">
      <h1 className="pt-12">
        <div className="flex justify-center">
            <Image src={Logo} alt="Daniel's PokeDex Logo"/>
        </div>
      </h1>
      <Pagination 
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <ul className="grid grid-cols-4 gap-10 pt-10">
      {pokemonList.map((pokemon, index) => {
        let id = pokemon.id
        return(
          <li key={index}>
            <Link href={`/pokemon?id=${id}`} >
              <a>
                <PokemonThumb index={id -1} pokemon={pokemon} />
              </a>
            </Link>
          </li>
        ) 
        })}
      </ul>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=16`);
    const {results} = await res.json();
    let paddedIndex = '';
    const pokemons = results.map((result:Result, index:number) => {
      if(index + 1 > 100){
           paddedIndex = index.toString();
      } else {
           paddedIndex = ("00" + (index + 1)).slice(-3)
      }
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return {
        ...result,
        image, 
      };
    })
    return {
      props: { pokemons }
    }
}