import React, { Component } from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';

interface IProps extends RouteComponentProps<any> {
    history: any
}

class UserList extends Component<IProps> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                Hello user list
            </div>
        )
    }
}

export default withRouter(UserList);