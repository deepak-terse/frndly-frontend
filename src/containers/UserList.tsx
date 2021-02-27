import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import UserCard from '../components/UserCard';
import {getAPIs} from '../config/constants';
import Strings from '../config/strings.json';
import '../styles/UserList.scss';


interface UserListProps extends RouteComponentProps<any> {
    history: any
}
  
interface UserListState {
    users: any
    usersCount: number
    skip: number
}

class UserList extends Component<UserListProps, UserListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            usersCount: 0,
            skip: 0
        };
        
        this.loadMore = this.loadMore.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <span className="icon material-icons" onClick={this.props.history.goBack}>
                        arrow_back
                    </span>
                    <span className="pageTitle">{Strings.labels.userList}</span>
                </div>
                <div className="info">
                    <span>
                        {Strings.labels.total}: {this.state.usersCount}
                    </span> 
                 </div>
                    {this.state.users.map((user: any, index: number) =>
                    <Link key={index} to = {{pathname: '/userDetails', state: user} } >
                        <UserCard  user={user}/>
                    </Link>
                )}
                <div className="more" onClick={this.loadMore}>
                    <span> {Strings.labels.loadMore}</span>
                    <span className="material-icons">
                        expand_more
                    </span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.fetchData();
    }

    loadMore() {
        this.fetchData();
    }

    fetchData(){
        axios({
            method: 'post',
            url: getAPIs().getUsers,
            data: {
                "take": 5,
                "skip": this.state.users.length
            }
        }).then((response) => {
            if (response.data.statusCode == 200){
                this.setState({ 
                    users: this.state.users.concat(response.data.data.result),
                    usersCount: response.data.data.count
                });
            } else {
                console.log('Error found : ', response.data.message);
            }


        }).catch((error)=>{
            console.log('Error found: ', error)
        });
    }
}

export default withRouter(UserList);