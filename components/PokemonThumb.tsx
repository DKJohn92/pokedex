import React from 'react';

interface Pokemon {
    name: string,
    image: string,
}

export interface PokemonTumbProps {
    index: number
    pokemon: Pokemon
}

export default function PokemonThumb({ pokemon, index }:PokemonTumbProps) {
    return(
        <div className="bg-gray-200 rounded">
            <img className="" src={pokemon.image} alt={pokemon.name} />
            <div className="text-center text-lg capitalize">
                <span>{index + 1}.</span>
                <span> { pokemon.name }</span>
            </div>   
        </div>  
    )
}