import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import Text from '../container/textContainer';
import {Container, Col, Row, Form, FormGroup, Label} from 'reactstrap';
import ButtonCustom from '../container/buttonContainer';

class EditDetails extends React.Component {
    constructor(props){
        super(props);
        console.log("value from the props", this.props)
        this.state={
            userName: this.props.cred?this.props.cred.userName : '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    onTextboxChange = async (values) => {
        await this.setState({
            [`${values.name}`]: values.value
        })
    }

    render(){
        
        return (
            <div>
                <Header />
                <Container  style={{marginTop: '70px', padding:'5%'}}>
                    <Row>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Create user' keyName='Register'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='User Details' value={this.state.userName} keyName='userDetails'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Edit Details' value={this.state.userName} keyName='editDetails'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Delete Details' value={this.state.userName} keyName='deleteDetails'/>                            
                        </Col>
                    </Row>
                    <Row style={{padding:'5%'}}>
                        <Form>
                            <FormGroup>
                                <Label for='firstName'>First Name:</Label>
                                <Text type='text' name='firstName' placeHolder='Enter Your First Name' uniqId='fname' onChange={(values) => this.onTextboxChange(values)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='lastName'>Last Name:</Label>
                                <Text type='text' name='lastName' placeHolder='Enter Your Last Name' uniqId='lname' onChange={(values) => this.onTextboxChange(values)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password:</Label>
                                <Text type='password' name='password' placeHolder='Enter Your Password' uniqId='pass' onChange={(values) => this.onTextboxChange(values)} />
                            </FormGroup>
                            <ButtonCustom name='Update' value={this.state} keyName='updateDetails'/>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let len = state.userInfo.length;
    if(len){
        return {cred: state.userInfo[len-1]}
    }
    else {
        return {cred: {}}
    }
}

export default connect(mapStateToProps)(EditDetails);