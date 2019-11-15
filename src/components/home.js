import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import {Container, Col, Row} from 'reactstrap';
import ButtonCustom from '../container/buttonContainer';

class Home extends React.Component {

    render(){
        let userName = '';
        let message = '';
        if(this.props.cred){
            userName=this.props.cred.userName;
            message= this.props.cred.message;
        }
        return (
            <div>
                <Header />
                <Container  style={{marginTop: '70px', padding:'5%'}}>
                    <Row>
                        <Col xs='6'>
                            <p>Welcome to Home Page <b>{userName}</b></p>
                        </Col>
                        <Col xs='6'>
                            <p><b>{message}</b></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Create user' keyName='Register'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='User Details' value={userName} keyName='userDetails'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Edit Details' value={userName} keyName='editDetails'/>                            
                        </Col>
                        <Col xs='12' sm='3'>
                            <ButtonCustom name='Delete Details' value={userName} keyName='deleteDetails'/>                            
                        </Col>
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

export default connect(mapStateToProps)(Home);