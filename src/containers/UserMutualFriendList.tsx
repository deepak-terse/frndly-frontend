import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import UserCard from '../components/UserCard';
import '../styles/UserList.scss';

interface MyProps extends RouteComponentProps<any> {
    location: any,
    history: any
}
  
interface MyState {
    users: any
    usersCount: number
}

class UserFriendList extends Component<MyProps, MyState> {
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
            <div>
                <div className="header">
                    <span className="icon material-icons" onClick={this.props.history.goBack}>
                        arrow_back
                    </span>
                    <span className="pageTitle">Mutual Friend List</span>
                </div>
                <div className="info">
                    <span>
                        User: {this.props.location.state.firstName} {this.props.location.state.lastName}
                    </span>
                    <span>
                        Total: {this.state.usersCount}
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
            url: 'http://localhost:5000/getUserMutualFriends',
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