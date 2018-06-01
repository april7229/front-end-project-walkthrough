import React, { Component } from 'react';
import './index.css';

class DeleteNote extends Component {
    
        
    render() {
      let  toggle = this.props.toggle;
        return (
            <div className={toggle ? 'delete_wrapper':'hidden'}>
                <div>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                
                    <div className='delete_buttons_wrapper'>
                    <div
                             className='button--danger'
                                onClick={this.showModal}   
                            >    
                                    DELETE
                                </div>
                            <div
                                className='button'
                                onClick={this.showModal}   
                            >
                                No
                                
                    </div>
                </div>
            </div>    
        ); 
    }
}
    


export default DeleteNote;