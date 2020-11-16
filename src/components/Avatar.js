import React from 'react';

const Avatar = ({image, firstName, lastName}) => {
    return (
        <div className='character-container'>
            <img src={image} alt={firstName} />
            <h2>{firstName} {lastName}</h2>
        </div>
    )     
};

export default Avatar;






