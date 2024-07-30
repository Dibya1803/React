import React, { Component } from "react";
import { connect } from "react-redux";

class NewComp extends Component{
    styles = {
        fontstyle : "italic",
        color : "purple",
    };

    render() {
        return(
            <div className="App">
                <h3 style={this.styles}>{this.props.message}</h3>
                <button onClick={this.props.ButtonChange}>Enter</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.message,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        ButtonChange: () => dispatch({type: "Message Change"})
    };
};


export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(NewComp);