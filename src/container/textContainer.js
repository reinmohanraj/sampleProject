import React, {Component} from 'react';
import {Input} from 'reactstrap';

class Text extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            value: ''
        }
    }

    onTextChange = async (e) => {
        e.preventDefault();
        await   this.setState({
            name: this.props.name,
            value: e.target.value
        })
        this.props.onChange(this.state)
    }

    render(){
        return (
            <div>
                <Input type={this.props.type} name={this.props.name} id={this.props.uniqId} placeholder={this.props.placeHolder} onChange={(e) => {this.onTextChange(e)}}></Input>
            </div>
        );
    }
}

export default Text;