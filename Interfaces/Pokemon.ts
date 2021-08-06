export default interface Pokemon {
    pokemon: {
        id: number,
        types: [{
            type: {
                name: string,
            }
        }],
        name: string,
        image: string,
        species: string,
        weight: number,
        moves: [
            moveName: {
                move: {name: string,}
            },
        ],
        stats: [
            stat: {
                stat:{
                    name: string,
                },
                base_stat:number
            }
        ],
    }
}