export const reducer = (state, action) => {
    if(action.type === 'ADD_HERO'){
        const heroes = [...state.heroes, action.payload];
        return {...state, heroes: heroes};
    }

    if(action.type === 'SET_HEROES'){
        return {...state, heroes: action.payload};
    }

    if(action.type === 'SET_LOADING'){
        return {...state, isLoading: action.payload};
    }

    if(action.type === 'SET_SEARCHTERM'){
        return {...state, searchTerm: action.payload};
    }
    throw new Error('no matching action type');
}