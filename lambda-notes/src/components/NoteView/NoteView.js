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
            <div className='noteView_container'>
            <div className ='content_topContent'>    
                
            <div>    
                    <h3 className='content_header'>
                    {this.state.notesArray[0].title}    
                    </h3>
                    <div>
                        <a>edit</a>
                        <a>delete</a>
                    </div>
                </div>
                
                    <div className='noteView'>
                        <p className=''>
                            {this.state.notesArray[0].body}
                   </p>         
                </div>
                </div>
            </div>    
                        
                                   
        )
    }
}
   

export default NoteView;
