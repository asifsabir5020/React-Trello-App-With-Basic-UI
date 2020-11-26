import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = props => {
    return (
        <Draggable draggableId={props.cardInfo.id} index={props.index}>
            {provided => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <Card style={styles.container}>
                    <CardContent>
                        <Typography gutterBottom >
                            {props.cardInfo.text}
                        </Typography>
                    </CardContent>
                </Card>
            </div>)}
        </Draggable>
    );
};

const styles = {
    container: {
        marginBottom: 8,
    },
}
export default TrelloCard;