import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList'
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote'
import EditNote from '../EditNote/EditNote';
class MainContent extends Component {
    render() {
        return (
            <div className='main_container'>
                 {/* <NotesList />  */}
                {/* <CreateNote /> */}
                <EditNote />
            </div>
        );
    }
}

export default MainContent;