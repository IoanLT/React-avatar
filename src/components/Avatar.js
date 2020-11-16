import React from 'react';

const Avatar = ({image, name, lastName}) => {
    
    return (
        <div>
            <img src={image} alt={name} />
            <h1>{name} {lastName}</h1>
        </div>
    )
};

export default Avatar;






