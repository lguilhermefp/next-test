import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import data from './pages/API/data.json';

const startState = {
    cards: []
};

export const initialCards = () => {
    return {
        type: 'INITIALCARDS',
        cards: data,
    };
};

export const addItem = (item) => {
    return {
        type: 'ADD',
        item: item,
    }
};

export const reducer = (state = initalState, action) => {
    switch(action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards,
            }
        case 'ADD':
            return {
                ...state,
                cards: [...state.cards, action.item],
            }
        default:
            return state;
    }
}

const store = ( initialStore = startState ) => {
    return createStore(reducer, initialStore);
};

export const initStore = createWrapper(store);