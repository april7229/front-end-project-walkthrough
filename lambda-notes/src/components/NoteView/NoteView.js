import React, { Component } from 'react';
import './index.css';

class NoteView extends Component {
    constructor() {
        super()
        this.state = {
            notesArray: [
                {
                    _id: 'adshfjslglff;hf;',
                    title: 'first Note',
                    body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh',
                    createdAt: 1527536455211,
                },
                {
                    _id: 'jslglff;hf;',
                    title: 'second Note',
                    body: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh',
                    createdAt: 1527536455211,
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
            ]
        }
    }


    render() {
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                   
                </div>
            </div>
                        
                                   
        )
    }
   }

export default NoteView;
