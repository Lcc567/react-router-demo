import React , {Component} from 'react'

class User extends Component {
    state = {  }
    render() { 
        console.log('user', this.props);
        return ( 'User' );
    }
}
 
export default User;