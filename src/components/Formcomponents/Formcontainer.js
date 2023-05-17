import React from 'react';
import './Formcontainer.css';

function Formcontainer({text, toptext, bottomtext}) {
    return (
        <div className="Formcontainer">
            <div type='radio' className="Textfield" style={{border: '2px solid #BEBEBE'}}>
            <input type="radio" className='radiobutton' />
            <div className="Textcontainer">{text} 
                    <div className='Righttext'>
                    <div className='Toptext'>Total ₹{toptext}</div>
                    <div className='Bottomtext'>₹{bottomtext}/mo</div>
                    </div>
            </div>
            <div className="Tag">Offer expired</div>
            </div>
        </div>
    )
}

export default Formcontainer;