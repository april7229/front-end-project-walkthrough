import React, { Component } from 'react';
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote';

class EditNote extends Component {
    render() {
        return (
            <div className='noteView_container'>
                <div className='noteView_topContent'>
                    <h3 className='content_header'>
                        Edit Note:
                        </h3>
                </div>
                <div className='editNote_form'>
                    <input type="text"
                        className='editNote_title'
                        placeholder='Note Title'
                    />
                    <textarea
                        className='editNote_body'
                        placeholder='Note Content'
                        rows="20"
                    />

                    <a href='#' className='button_link' />
                    <div className='nav_button editNote_button'>Update</div>

                </div>
            </div>





        )
    }
}


export default EditNote;