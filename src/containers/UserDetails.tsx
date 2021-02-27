import React, { Component } from 'react';
import Button from '../components/form-input/Button';
import { RouteComponentProps } from 'react-router-dom';
import Strings from '../config/strings.json';
import '../styles/UserDetails.scss';


interface UserDetailsProps extends RouteComponentProps<any> {
    location: any,
    history: any
}

class UserDetails extends Component<UserDetailsProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="userDetails">
                <div className="header">
                    <span className="icon material-icons" onClick={this.props.history.goBack}>
                        arrow_back
                    </span>
                    <span className="pageTitle">{Strings.labels.userDetails}</span>
                </div>
                <div className="userDetailsCard">
                    <img className ="photo" src={this.props.location.state.avatar}/>
                    <span className = "name">{this.props.location.state.firstName} {this.props.location.state.lastName}</span>
                    <div>
                        <Button
                            className = "button"
                            placeholder = {Strings.buttonLabels.seeFriends}
                            type = "button"
                            onClick = {() => {this.props.history.push({pathname: '/userFriendList', state: this.props.location.state})}}
                        />
                        <Button
                            className = "button"
                            placeholder = {Strings.buttonLabels.seeMutualFriends}
                            type = "button"
                            onClick = {() => {this.props.history.push({pathname: '/userMutualFriendList', state: this.props.location.state})}}
                        /> 
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails