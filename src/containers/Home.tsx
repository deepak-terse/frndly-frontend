import React, { Component } from 'react';
import Button from '../components/form-input/Button';
import '../styles/Home.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IProps extends RouteComponentProps<any> {
    history: any
}

class Home extends Component<IProps> {

    constructor(props: any) {
        super(props);
        this.state = {}

        this.goToUserList = this.goToUserList.bind(this);
    }

    goToUserList() {
        this.props.history.push('/userList')
    }

    render() {
        return (
            <div className="Home">
                <span id="heading">Hi!</span>
                <span id="subheading">Welcome to Frndly</span>

                <Button
                    placeholder = "See Users"
                    type = "button"
                    onClick = {this.goToUserList}
                />
            </div>
        )
    }
}

export default withRouter(Home)