import { v4 as uuidv4 } from 'uuid';

export const trelloSampleList = [
    {
        title: 'Project Setup',
        id: uuidv4(),
        cards: [
            {
                id: uuidv4(),
                text: 'Create project using create-react-app',
            },
            {
                id: uuidv4(),
                text: 'Install redux react-redux uuid react-textarea-autosize react-beautiful-dnd @material-ui/core',
            }
        ],
    },
    {
        title: 'Tasks',
        id: uuidv4(),
        cards: [
            {
                id: uuidv4(),
                text: 'Configure redux store',
            },
            {
                id: uuidv4(),
                text: 'Style Trello Card and List',
            },
            {
                id: uuidv4(),
                text: 'Add new card functionality',
            },
            {
                id: uuidv4(),
                text: 'Add new list functionality',
            },
            {
                id: uuidv4(),
                text: 'Drag and Drop package setup',
            },
            {
                id: uuidv4(),
                text: 'Drag and Drop functionality',
            },
        ],
    },
];