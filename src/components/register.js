import React from 'react';
import Text from '../container/textContainer';
import ButtonCustom from '../container/buttonContainer';
import Header from '../components/header';
import {Form, FormGroup, Label, Container, Row, Col} from 'reactstrap';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            uName: '',
            pass: '',
            fName: '',
            lName: ''
        }
    }

    onTextboxChange = async (values) => {
        await this.setState({
            [`${values.name}`]: values.value
        })
    }

    render() {
        return (
            <Container>
                <Header />
                <Row style={{padding:'8%', marginTop: '70px'}}>
                    <Col xs='12' sm='3'>
                        <ButtonCustom name='Create user' keyName='Register'/>                            
                    </Col>
                    <Col xs='12' sm='3'>
                        <ButtonCustom name='User Details'  keyName='userDetails'/>                            
                    </Col>
                    <Col xs='12' sm='3'>
                        <ButtonCustom name='Edit Details'  keyName='editDetails'/>                            
                    </Col>
                    <Col xs='12' sm='3'>
                        <ButtonCustom name='Delete Details'  keyName='deleteDetails'/>                            
                    </Col>
                </Row>
                <Row>
                    <Form>
                        <FormGroup>
                            <Label for='firstName'>First Name:</Label>
                            <Text type='text' name='fName' placeHolder='Enter Your First Name' uniqId='fname' onChange={(values) => this.onTextboxChange(values)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='lastName'>Last Name:</Label>
                            <Text type='text' name='lName' placeHolder='Enter Your Last Name' uniqId='lname' onChange={(values) => this.onTextboxChange(values)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='userName'>UserName:</Label>
                            <Text type='text' name='uName' placeHolder='Enter Your UserName' uniqId='uname' onChange={(values) => this.onTextboxChange(values)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password:</Label>
                            <Text type='password' name='pass' placeHolder='Enter Your Password' uniqId='pass' onChange={(values) => this.onTextboxChange(values)} />
                        </FormGroup>
                        <ButtonCustom name='Register' value={this.state} keyName='registerSubmit'/>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default Register;