export type PokeInfo = {
    name?: string;
    url?: string;
    pokemon: {
        name?: string;
        url?: string;
    }
}


export type Pokemon = {
    name: string;
    id: number;
    sprites: {
        front_default: string,
        back_default: string,
        front_shiny: string;
    }
    types: any[];
}

export type PokemonType = {
    name: string;
}