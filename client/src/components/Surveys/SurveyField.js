import React from 'react';

export default ({ input, lable, meta: { error, touched } }) => {
    return (
        <div>
            <label style={{ fontSize: '15px' }}>{lable}</label>
            <input {...input} style={{ marginBottom: '4px' }} />
            <div className='red-text' style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};