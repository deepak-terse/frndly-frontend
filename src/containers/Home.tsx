import React, { Component } from 'react';
import Button from '../components/form-input/Button';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Strings from '../config/strings.json';
import '../styles/Home.scss';


interface UserDetailsProps extends RouteComponentProps<any> {
    history: any
}

class Home extends Component<UserDetailsProps> {
    constructor(props: any) {
        super(props);
        this.goToUserList = this.goToUserList.bind(this);
    }

    render() {
        return (
            <div className="Home">
                <span id="heading">{Strings.labels.hi}!</span>
                <span id="subheading">{Strings.labels.homeWelcomeMsg}</span>

                <Button
                    placeholder = {Strings.buttonLabels.seeUsers}
                    type = "button"
                    onClick = {this.goToUserList}
                />
            </div>
        )
    }

    goToUserList() {
        this.props.history.push('/userList')
    }
}

export default withRouter(Home)