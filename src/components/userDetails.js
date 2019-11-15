import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import {Container, Col, Row, Form, FormGroup, Label} from 'reactstrap';
import ButtonCustom from '../container/buttonContainer';

class UserDetails extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        let userName = '';
        let firstName = '';
        let lastName= '';
        let password= '';
        let id= '';
        if(this.props.cred){
            console.log("this.props.cred in the userDetails", this.props.cred)
            id=this.props.cred._id;
            userName=this.props.cred.userName;
            firstName= this.props.cred.firstName;
            lastName= this.props.cred.lastName;
            password= this.props.cred.password;
        }
        return (
            <div>
                <Header />
                <Container  style={{marginTop: '70px', padding:'5%'}}>
                    <Row>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Create user' keyName='Register'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='User Details' value={userName, id} keyName='userDetails'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Edit Details' value={userName, id} keyName='editDetails'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Delete Details' value={userName} keyName='deleteDetails'/>                            
                        </Col>
                    </Row>
                    <Row style={{padding:'5%'}}>
                        <Form>
                            <FormGroup>
                                <Label for='firstName'>First Name:</Label>
                                <Label>{firstName}</Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for='lastName'>Last Name:</Label>
                                <Label>{lastName}</Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for='userName'>User Name:</Label>
                                <Label>{userName}</Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password:</Label>
                                <Label>{password}</Label>
                            </FormGroup>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("State in the store ======>", state)
    let len = state.userInfo.length;
    if(len){
        return {cred: state.userInfo[len-1]}
    }
    else {
        return {cred: {}}
    }
}

export default connect(mapStateToProps)(UserDetails);