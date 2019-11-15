import React from 'react';
import Text from '../container/textContainer';
import ButtonCustom from '../container/buttonContainer';
import Header from '../components/header';
import {Form, FormGroup, Label} from 'reactstrap';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uName: '',
            pass: ''
        }
    }

    onTextboxChange = async (values) => {
        await this.setState({
            [`${values.name}`]: values.value
        });
    }

    render(){
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div style={{padding:'8%', marginTop: '70px'}}>
                    <Form>
                        <FormGroup>
                            <Label for='userName'>UserName:</Label>
                            <Text type='text' name='uName' placeHolder='Enter Your UserName' uniqId='uname' onChange={(values) => this.onTextboxChange(values)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password:</Label>
                            <Text type='password' name='pass' placeHolder='Enter Your Password' uniqId='pass' onChange={(values) => this.onTextboxChange(values)} />
                        </FormGroup>
                        <ButtonCustom style={{'marginRight': '5%'}} name='Login' value={this.state} keyName='Login'>Login</ButtonCustom>
                        <ButtonCustom name='Register' keyName='Register' >Register</ButtonCustom>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;