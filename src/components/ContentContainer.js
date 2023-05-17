import React from 'react';
import './ContentContainer.css';
import Mainlockup from './Mainlockup';
import Form from './Form';

function ContentContainer() {
    return (
        <div className='ContentContainer'>
            <Mainlockup />
            <Form />
        </div>
    )
}

export default ContentContainer;