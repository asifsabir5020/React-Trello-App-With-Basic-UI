import { v4 as uuidv4 } from 'uuid';
import { trelloSampleList } from './data';
import {ADD_NEW_CARD_TITLE, ADD_NEW_LIST_TITLE, SORT_LIST} from "./constants";

export const initialState = {
    list:{ data: trelloSampleList, loading: false},
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NEW_CARD_TITLE: {
            const newState = { ...state };
            const targetIndex = newState.list.data.findIndex(item => item.id === action.listId);
            newState.list.data[targetIndex].cards = newState.list.data[targetIndex].cards.concat({id:uuidv4(), text: action.title });
            return newState;
        }
        case ADD_NEW_LIST_TITLE: {
            const newState = { ...state };
            newState.list.data = newState.list.data.concat({id:uuidv4(), title: action.title , cards: []});
            return newState;
        }
        case SORT_LIST: {
            const {
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIdIndexStart
            } = action.payload;
            const newState = {...state};
            if(droppableIdStart === droppableIdEnd){
                const list = newState.list.data.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIdIndexStart, 1);
                list.cards.splice(droppableIdEnd, 0, ...card);
            }
            if(droppableIdStart !== droppableIdEnd){
                const listStart = newState.list.data.find(list => droppableIdStart === list.id);
                const card = listStart.cards.splice(droppableIdIndexStart, 1);
                const listEnd = newState.list.data.find(list => droppableIdEnd === list.id);
                listEnd.cards.splice(droppableIdEnd, 0, ...card);
            }
            return newState;
        }
        default:
            return state;
    }
}

export default reducer;