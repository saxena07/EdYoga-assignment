import React from 'react';
import './Progressbar.css'

function Progressbar() {
    return (
        <div className='Progressbar'>
            <div className='stage'>
                <div className='icon'>1</div>
                <div className='text'>Sign Up</div>
            </div>
            <div className='stage'>
                <div className='icon'>2</div>
                <div className='text'>Subscribe</div>
                </div>
        </div>
    )
}

export default Progressbar;