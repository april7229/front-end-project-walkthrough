const initialState = [,
    {
        _id: 'adshfjslglff;hf;',
        title: 'first Note',
        body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh',
        createdAt: 1527536455213,
    },
    {
        _id: 'jslglff;hf;',
        title: 'second Note',
        body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh',
        createdAt: 1527536455214,
    },
    {
        _id: 'lff;hf;',
        title: 'third Note',
        body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh',
        createdAt: 1527536455210,
    },
    {
        _id: 'aglff;hf;',
        title: 'forth Note',
        body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh',
        createdAt: 1527536455208,
    },
    {
        _id: 'aglff;hf;',
        title: 'fifth Note',
        body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh',
        createdAt: 1527536455207,
    },
    {
        _id: 'aglff;hf;',
        title: 'six Note',
        body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh',
        createdAt: 1527536455206,
    },

];
// Current Application State, {action object}
const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return state; 
        default:
        // returns: the Next Appication State    
            return state;    
    }
}
export default notesReducer;