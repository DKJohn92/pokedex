import React from 'react'
import Pokemon from '../Interfaces/Pokemon'

export default function PokemonInfo({pokemon}: Pokemon) {
    
   const getColor = (type:string) => {
        switch(type){
            case 'fire':
                return "bg-red-500";
            case 'grass':
                return 'bg-green-500';
            case 'electric':
                return 'bg-yellow-300';
            case 'water':
                return 'bg-blue-500';
            case 'ground':
                return 'bg-yellow-900'
            case 'rock':
                return 'bg-yellow-700';
            case 'fairy':
                return 'bg-pink-200';       
            case 'poison':
                return 'bg-purple-500';
            case 'bug':
                return 'bg-green-300';
            case 'dragon':
                return 'bg-indigo-500';
            case 'psychick':
                return 'bg-purple-200';
            case 'flying':
                return 'bg-blue-200';
            case 'fighting':
                return 'bg-red-900';
            case 'normal':
                return 'bg-gray-300';
            case 'ice':
                return 'bg-blue-200'
            case 'dark':
                return 'bg-gray-700'
            case 'steel':
                return 'bg-gray-400'
            case 'ghost':
                return 'bg-purple-300'
            default: 
                return 'bg-gray-100'
        }
    }
    
    let types = pokemon.types.map((type) => {
        return type.type.name
    });

    const backgoundColor = (types: string[]) => {
        let color1 = getColor(types[0])
        return color1;
    }

    return (
        <div className="pt-24 w-full flex">
            <div className={backgoundColor(types) + ' rounded-md  flex-1'}>
                <h1 className="text-center capitalize text-5xl pt-16">{pokemon.name}</h1>
                <img className="pt-12 mx-auto" src={pokemon.image} alt={pokemon.name} />
                <div className="text-center pb-8">
                    <p>Species:</p>
                    <p>{pokemon.species}</p>
                </div>
            </div>
            <div className="bg-gray-500  rounded-md ml-32 flex-1 text-white">
                <div className="content-center text-center pt-8">
                    <div>
                        <p className="font-bold">Stats: </p>
                    </div>
                    <div className="">
                    {pokemon.stats.map((stat, index) => {
                        return(
                            <div key={index} className="capitalize flex-1">
                                <p className="flex-1 textm">{stat.stat.name}: {stat.base_stat}</p>
                            </div>   
                        )
                    })}
                    </div>
                </div>
                <div className="text-center pt-8">
                    <span>Type: </span>
                    {pokemon.types.map((type, index) => {
                        return(
                            <span key={index}>{type.type.name} </span>
                        )
                    })}
                </div>
                <div className="text-center pt-8">
                    <p>Weight: {pokemon.weight} Kg</p>
                </div>
                <div className="text-center pt-8">
                    <p>Moves:</p>
                    {pokemon.moves.slice(0, 10).map((moveName, index:number) => {
                        return(
                            <p key={index}>
                                {moveName.move.name}
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}




