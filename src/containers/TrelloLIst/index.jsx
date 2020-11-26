import React, {useState} from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloCard from "../../common/components/TrelloCard";
import TrelloAddButton from "../../common/components/TrelloAddButton";
import {addNewCardTitle, addNewListTitle, sortList} from "./actions";

const TrelloList = props => {
    const [newCreatedItem, setNewCreatedItem] = useState({});
    const { list, addNewCardTitle, addNewListTitle } = props;

    const handleOnDrag = params => {
        const { destination, source } = params;
        if(!destination){
           return;
        }
        props.sortList(source.droppableId, destination.droppableId, source.index);
    }
    return (
        <div style={styles.container}>
            <DragDropContext onDragEnd={handleOnDrag}>
                {list.map(listItem => (
                    <Droppable droppableId={listItem.id} key={listItem.id}>
                        {provided => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={styles.listContainer}
                        >
                            <div>
                                <h2>{listItem.title}</h2>
                                {listItem.cards.map((card, index) =>  (
                                    <div key={card.id}>
                                        <TrelloCard cardInfo={card} index={index}/>
                                    </div>
                                ))}
                                <TrelloAddButton
                                    addNewCardTitle={addNewCardTitle}
                                    ListId={listItem.id}
                                    setNewCreatedItem={setNewCreatedItem}
                                />
                            </div>
                            {provided.placeholder}
                        </div>)}
                    </Droppable>
                ))}
                <TrelloAddButton
                    islist
                    addNewListTitle={addNewListTitle}
                    setNewCreatedItem={setNewCreatedItem}
                />
            </DragDropContext>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'inherit',
    },
    listContainer: {
        backgroundColor: '#ccc',
        width: 300,
        padding: 8,
        marginRight: 8,
        borderRadius: 3,
        height: '100%',
    },
}

export const mapStateToProps = state => {
    return {
        list: state.trelloList.list.data || []
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        addNewCardTitle: (title, listId) => dispatch(addNewCardTitle(title, listId)),
        addNewListTitle: title => dispatch(addNewListTitle(title)),
        sortList: (a, b, c) => dispatch(sortList(a, b, c)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TrelloList);