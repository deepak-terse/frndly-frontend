import React, { Component } from 'react';
import PropTypes from "prop-types";

interface MyProps {
}
  
interface MyState {
}

class UserDetails extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                UserDetails
            </div>
        )
    }
}

export default UserDetails