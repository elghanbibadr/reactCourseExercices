import React from 'react';

import InputItem from './InputItem';
function Form(props) {
    return (
        <form className='form'>
            <InputItem label='UserName'/>
            <InputItem label='Age'/>
        </form>
    );
}

export default Form;