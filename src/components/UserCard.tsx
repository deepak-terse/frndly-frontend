import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Components.scss'


export default function UserCard(props: any) {
    return <div className="userCard">
        <img className ="avatar" src={props.user.avatar}/>
        <span className = "userName">{props.user.firstName} {props.user.lastName}</span>
    </div>
}

UserCard.propTypes = {
    user: PropTypes.object
}