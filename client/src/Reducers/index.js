const initialState = {
    pokemons: [],
    allPokemons: [],
    details: [],
    types: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case "ALL_POKEMONS":
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }

        case "NAME_SEARCH":
            return {
                ...state,
                pokemons: [action.payload]
            }

        case "DETAILS":
            return {
                ...state,
                details: action.payload
            }

        case "TYPES":
            return {
                ...state,
                types: action.payload
            }

        case "POKEMON_POST":
            return {
                ...state
            }

        case "ATTACK_FILTER":
            let filtro = [...state.pokemons]

            filtro = filtro.sort((a, b) => {
                if (a.Ataque < b.Ataque) {

                    return action.payload === "Mas Fuerte" ? 1 : -1;
                }
                if (a.Ataque > b.Ataque) {
                    return action.payload === "Menos Fuerte" ? 1 : -1;
                }
                return -1;
            });
            return {
                ...state,
                pokemons:
                    action.payload === "Ataque" ? state.allPokemons : filtro
            }

        case "CREATED_FILTER":
            const filtrocreado =
                action.payload === "Creados"
                    ? state.allPokemons.filter((value) => typeof value.ID === "string")
                    : state.allPokemons.filter((value) => typeof value.ID === "number");
            return {
                ...state,
                pokemons:
                    action.payload === "Todos" ? state.allPokemons : filtrocreado
            }

        case "TYPE_FILTER":
            const allPokemons = state.allPokemons
            const filtrotipo =
                action.payload === "type"
                    ? allPokemons
                    : allPokemons.filter((value) => value?.Tipo?.includes(action.payload) || value?.tipos?.map(v => v.Nombre)?.includes(action.payload));
            return {
                ...state,
                pokemons: filtrotipo,
            }

        case "ORDEN":
            let orden = [...state.pokemons]
            orden = orden.sort((a, b) => {
                if (a.Nombre < b.Nombre) {
                    return action.payload === "DESCENDENTE" ? 1 : -1;
                }
                if (a.Nombre > b.Nombre) {
                    return action.payload === "ASCENDENTE" ? 1 : -1;
                }
                return 0;
            });
            return {
                ...state,
                pokemons:
                    action.payload === "Orden" ? state.allPokemons : orden
            }

        default: return state
    }
}

export default rootReducer
