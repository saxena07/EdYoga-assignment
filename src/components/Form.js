import React from 'react';
import Progressbar from './Formcomponents/Progressbar';
import Formcontainer from './Formcomponents/Formcontainer';
import Formheader from './Formcomponents/Formheader';
import './Form.css';

function Form() {
    return (
        <form className='form'>
            <Progressbar />
            <Formheader />
            <Formcontainer text="12 Months Subscription" toptext="99" bottomtext="8"/>
            <Formcontainer text="12 Months Subscription" toptext="179" bottomtext="15"/>
            <Formcontainer text="6 Months Subscription" toptext="149" bottomtext="25"/>
            <Formcontainer text="3 Months Subscription" toptext="99" bottomtext="33"/>
        </form>
    )
}

export default Form;