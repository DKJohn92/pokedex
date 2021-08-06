# Daniel's PokeDex #

## Used stack ##
* Next.js
* Tailwindcss
* TypeScript

## About ##
For this little project i was given the [PokeAPI](https://https://pokeapi.co/). 
The task was to list all Pokemons with an pagination and max 16 Pokemon per site. The API already delivers pagination links, i decided to use Next's getServerSideProps to deliver a first content-paint and then axios to get the data from the API after using the pagination. On the Pokemon detail page i used getServerSideProps to get more data of the Pokemon from the API. The images come from the official [Pokemon webstite](https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png).

## What i could have done better ##
Due to the set time limit of 4h i felt a little under preassure and therefore wrote a few lines of code which i've could have wrote better with more time, for example:
* the getColor() function to set the backgroundcolor of each pokemon on the detail page based on it's type
* the initial data fetching with getServerSideProps instead of axios
* using more components
* the typescript interfaces

I have to say that is was a fun codeing challenge afterall.

