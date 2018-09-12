import React from 'react';

export const User = ({ email, picture, name, location }) => {

    return (
        <div className="user">
            <img src={picture.thumbnail} alt="" />
            <h1>{name.first} {name.last}</h1>
            <p><a href={"mailto:" + email}>{email}</a></p>
            <p>{location.city}, {location.state}</p>
        </div>
    )
}

