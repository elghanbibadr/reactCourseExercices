import React from 'react';

function InputItem(props) {
    return (
        <div className='form-inputLabel'>
            <label>{props.label}</label>
            <input/>
        </div>
    );
}

export default InputItem;