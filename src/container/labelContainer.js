import React from 'react';

class Label extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <label>{this.props.name} :</label>
            </div>
        );
    }
}

export default Label;