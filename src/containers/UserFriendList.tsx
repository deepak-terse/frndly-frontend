import React, { Component } from 'react';
import {Link, RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import UserCard from '../components/UserCard';
import {getAPIs} from '../config/constants';
import Strings from '../config/strings.json';
import '../styles/UserList.scss';

interface UserFListProps extends RouteComponentProps<any> {
    location: any,
    history: any
}
  
interface UserFListState {
    users: any
    usersCount: number
}

class UserFriendList extends Component<UserFListProps, UserFListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            usersCount: 0
        };
    }

    render() {
        return (
            <div>
                <div className="header">
                    <span className="icon material-icons" onClick={this.props.history.goBack}>
                        arrow_back
                    </span>                    
                    <span className="pageTitle">{Strings.labels.friendList}</span>
                </div>
                <div className="info">
                    <span>
                        {Strings.labels.user}: {this.props.location.state.firstName} {this.props.location.state.lastName}
                    </span>
                    <span>
                        {Strings.labels.total}: {this.state.usersCount}
                    </span> 
                </div>
                {this.state.users.map((user: any, index: number) =>
                    <Link key={index} to = {{pathname: '/userDetails', state: user} } >
                        <UserCard  user={user}/>
                    </Link>
                )}
            </div>
        )
    }

    componentDidMount() {
        axios({
            method: 'post',
            url: getAPIs().getUserFriends,
            data: {
                userId: this.props.location.state.id
            }
        }).then((response) => {
            this.setState({ 
                users: response.data.data.result,
                usersCount: response.data.data.count
            });

        }).catch((error)=>{
        });
    }
}

export default withRouter(UserFriendList);