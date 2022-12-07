import React from 'react';

import InputItem from './InputItem';
function Form(props) {
    return (
        <>
        <form className='form'>
            <InputItem label='UserName'/>
            <InputItem label='Age'/>
            <button>Add User</button>
        </form>
        <ul className='Userlist'>
            <li>max 31 year</li>
            <li>max 31 year</li>
        </ul>

        </>
    );
}

export default Form;