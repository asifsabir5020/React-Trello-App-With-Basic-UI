import React, { useState } from 'react';
import Icon from "@material-ui/core/Icon";
import TextareaAutosize from 'react-textarea-autosize';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const TrelloNewItemForm = props => {
    return (
        <div>
            <Card
                style={{
                    width: 282,
                    minHeight: 50,
                    padding: 8,
                    marginBottom: 8,
                }}
            >
                <TextareaAutosize
                    placeholder={props.formProps.formPlaceHolder}
                    autoFocus
                    // onBlur={() => props.setShouldShowNewItemForm(false)}
                    onChange={e => props.setNewItemText(e.currentTarget.value)}
                    value={props.newItemText}
                    style={{
                        resize: 'none',
                        width: '100%',
                        overflow: 'hidden',
                        outline: 'none',
                        border: 'none',
                    }}
                />
            </Card>
        </div>
    );
}


const TrelloAddButton = props => {
    const [shouldShowNewItemForm, setShouldShowNewItemForm] = useState(false);
    const [newItemText, setNewItemText] = useState('');
    const { islist } = props;
    const btnTitle = islist ? 'Add New List' : 'Add New Card';
    const formPlaceHolder = islist ? 'Enter list title ...' : 'Enter a title for this new card ...';
    const formProps = {
        formPlaceHolder,
    };
    const btnConditionalStyles = {
        opacity: islist ? 0.5 : 1,
        color: islist ? 'white' : 'inherit',
        backgroundColor: islist ? 'rgba(0,0,0,.15)' : 'inherit',
    };
    const handleRemoveItem = () => {
        setShouldShowNewItemForm(false);
        setNewItemText('');
    }
    const handleSaveItem = () => {
        if(islist){
            props.addNewListTitle(newItemText);
            setShouldShowNewItemForm(false);
            setNewItemText('');
            props.setNewCreatedItem({title: newItemText});
        }else{
            props.addNewCardTitle(newItemText, props.ListId);
            setShouldShowNewItemForm(false);
            setNewItemText('');
            props.setNewCreatedItem({title: newItemText, id: props.ListId});
        }
    }
    const handleAddNewItem = () => {
        setShouldShowNewItemForm(true);
        setNewItemText('');
    }

    return (
        <div>
            {shouldShowNewItemForm && (
                <TrelloNewItemForm
                    islist={islist}
                    formProps={formProps}
                    setShouldShowNewItemForm={setShouldShowNewItemForm}
                    newItemText={newItemText}
                    setNewItemText={setNewItemText}
                />
            )}

                <div>
                    {shouldShowNewItemForm && (
                        <>
                           <Button
                               disabled={!newItemText}
                             onClick={handleSaveItem}
                             variant="contained"
                             style={{
                                 color: 'white',
                                 backgroundColor: newItemText ? '#5aac44': '#a2a0a0',
                             }}
                           >Save</Button>
                            <Button
                                onClick={handleRemoveItem}
                                style={{
                                    color: 'black',
                                }}
                            >X</Button>
                        </>
                    ) || (
                        <>
                        <div style={{...styles.container, ...btnConditionalStyles}} onClick={handleAddNewItem}>
                            <Icon>+</Icon><span>{btnTitle}</span>
                        </div>
                        </>
                    )}

            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: 'red',
        height: 40,
        width: 300,
        borderRadius: 3,
        cursor: 'pointer',
        paddingLeft: 5,
    }
};

export default TrelloAddButton;