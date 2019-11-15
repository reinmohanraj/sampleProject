import React from 'react';
import {connect} from 'react-redux';
// import {credentials} from '../actions/index';
import {loginCred} from '../actions/loginAction';
import {registerCred} from '../actions/registerActions';
import {userDetails} from '../actions/userDetailsAction';
import {editDetails} from '../actions/editDetailsAction';
import {deleteDetails} from '../actions/deleteDetailsAction';
import history from '../history';
import {Button} from 'reactstrap';

class ButtonCustom extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    onButtonClick = async (e) => {
        if(this.props.keyName === 'Register'){
            history.push('/register');
        } else if(this.props.keyName === 'registerSubmit'){
            console.log("Register props value ===>", this.props.value);
            this.props.registerCred(this.props.value);
            history.push('/home')
        } else if(this.props.keyName === 'Login'){
            console.log("Login props value ===>", this.props.value);
            this.props.loginCred(this.props.value);
            history.push('/home')
        } else if(this.props.keyName === 'userDetails'){
            console.log("Fetch props value ===>", this.props.value);
            this.props.userDetails(this.props.value);
            history.push('/userdetails')
        } else if(this.props.keyName === 'editDetails'){
            console.log("Edit props value ===>", this.props.value);
            // this.props.editDetails(this.props.value);
            history.push('/editdetails')
        } else if(this.props.keyName === 'updateDetails'){
            console.log("this.ptrops.value in button container", this.props.value)
            this.props.editDetails(this.props.value);
            history.push('/home')
        } else if(this.props.keyName === 'deleteDetails'){
            console.log("this.ptrops.value in button container", this.props.value)
            this.props.deleteDetails(this.props.value);
            history.push('/login')
        }
    }

    render(){
        return (
            <Button style={this.props.style} onClick={(e) => {this.onButtonClick(e)}}>{this.props.name}</Button>
        );
    }
}

const mapDispatchToProps = {
    loginCred,
    registerCred,
    userDetails,
    editDetails,
    deleteDetails
}

export default connect(null, mapDispatchToProps)(ButtonCustom);