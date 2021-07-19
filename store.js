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
}

const store = ( initialStore = startState ) => {
    return createStore(reducer, initialState);
};

export const initStore = createWrapper(store);