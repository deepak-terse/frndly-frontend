import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import UserCard from '../components/UserCard';
import {getAPIs} from '../config/constants';
import Strings from '../config/strings.json';
import '../styles/UserList.scss';


interface UserMFListProps extends RouteComponentProps<any> {
    location: any,
    history: any
}
  
interface UserMFListState {
    users: any
    usersCount: number
}

class UserMutualFriendList extends Component<UserMFListProps, UserMFListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            usersCount: 0
        };
        this.goToUserDetails = this.goToUserDetails.bind(this);
    }

    goToUserDetails() {
        this.props.history.push('/userDetails', )
    }

    render() {
        return (
            <div className="userList">
                <div className="header">
                    <span className="icon material-icons" onClick={this.props.history.goBack}>
                        arrow_back
                    </span>
                    <span className="pageTitle">{Strings.labels.mutualFriendList}</span>
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
            url: getAPIs().getUserMutualFriends,
            data: {
                userId: this.props.location.state.id
            }
        }).then((response) => {
            if (response.data.statusCode == 200){
                this.setState({ 
                    users: response.data.data.result,
                    usersCount: response.data.data.count
                });
            } else {
                console.log('Error found : ', response.data.message);
            }
        }).catch((error)=>{
            console.log('Error found : ', error);
        });
    }
}

export default withRouter(UserMutualFriendList);