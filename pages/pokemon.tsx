import React from 'react'
import Layout from '../components/Layout';
import { GetServerSideProps } from 'next'
import PokemonInfo from '../components/PokemonInfo'
import Pokemon from '../Interfaces/Pokemon'
import BackArrow from '../components/BackArrow';



export default function pokemon({ pokemon }: Pokemon) {  
    return (
        <Layout title={pokemon.name}>
            <BackArrow />
            <PokemonInfo pokemon={pokemon}/>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const id = query.id;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const resSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const species = await resSpecies.json();
    const paddedIndex = ("00" + (id )).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    pokemon.image = image;
    pokemon.species = species.flavor_text_entries[0].flavor_text;
    return {
        props: { pokemon },
    }
}


