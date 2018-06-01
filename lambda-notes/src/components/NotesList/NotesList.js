import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class NotesList extends Component {
    constructor() {
        super()
        this.state = {
            notesArray: [
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
            ]
        }
    }
    generateNotes = (what, where) => {
        return (
            <Link to={`/note/${what._id}`}className='unstiledLink'>
                <div className='note' key={what._id}>
                    <div>
                        <h4>{what.title}</h4>
                        <hr></hr>
                        <p>{what.body}</p>
                    </div>
                </div>
            </Link>
        )

    }


    render() {
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                    {this.state.notesArray.map((note, index) => {
                        return (
                            <div className='note' key={index + note.title}>
                                <div>
                                    <h4>{note.title}</h4>
                                    <hr></hr>
                                    <p>{note.body}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default NotesList;