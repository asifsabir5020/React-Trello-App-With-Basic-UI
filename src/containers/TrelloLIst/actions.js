import * as constants from './constants';

export const addNewCardTitle = (title, listId) => {
    return {
        type: constants.ADD_NEW_CARD_TITLE,
        title,
        listId,
    }
}

export const addNewListTitle = title => {
    return {
        type: constants.ADD_NEW_LIST_TITLE,
        title,
    }
}

export const sortList = (
    droppableIdStart,
    droppableIdEnd,
    droppableIdIndexStart,
) => {
    return {
        type: constants.SORT_LIST,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIdIndexStart,
        },
    }
}


