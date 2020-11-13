import React, { Component, Dispatch } from 'react';
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import './index.scss';
import GenericTextField from "../../Components/GenericTextField/index";
import { addNewUser } from "../../redux/userForm/actions";
import { RootState } from "../../redux/rootReducer";

interface ConnectedReduxProps<S> {
    dispatch: Dispatch<S>;
}
interface Props extends RouteComponentProps<any>, ConnectedReduxProps<any> {
    history: any;
    responseMsg: any;
}
interface StateComponent {
    firstName: string;
    lastName: string;
    email: string;
    age: string;
}
export class Home extends Component<any, StateComponent> {
    constructor(props: any, state: StateComponent) {
        super(props, state)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            age: ""
        }
    }
    UNSAFE_componentWillReceiveProps(newProps: any) {

        if (newProps.responseMsg) {
            console.log("helllow")
            alert("Form has been submitted succesfully");
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                age: ""
            })
        }
    }

    handleChange = (prop: keyof StateComponent) => (event: any, val: string) => {
        const textValue: string = val.trim();

        if (event === 'firstName') {
            this.setState({ ...this.state, [event]: textValue });
        } else if (event === 'lastName') {
            this.setState({ ...this.state, [event]: textValue });
        } else if (event === 'email') {
            this.setState({ ...this.state, [event]: textValue });
        } else if (event === 'age') {
            this.setState({ ...this.state, [event]: textValue });
        }
    }
    handleUserForm = () => {
        this.props.dispatch(
            addNewUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                age: this.state.age
            })
        );
    }

    render() {
        return (
            <div id="homeWrapper">
                <div className="inner-container">
                    <div className="landing-page-div">
                        <h1 className="header-title">Add New User</h1>
                        <form className="landing-page-form" autoComplete="off">
                            <div className="row">
                                <div className="column" >
                                    <GenericTextField
                                        required={false}
                                        label="First Name"
                                        name="firstName"
                                        variant="outlined"
                                        id="firstName"
                                        type="text"
                                        value={this.state.firstName}
                                        onChangeValue={this.handleChange('firstName')}
                                    >
                                    </GenericTextField>
                                    <GenericTextField
                                        required={false}
                                        label="Last Name"
                                        name="lastName"
                                        variant="outlined"
                                        id="lastName"
                                        type="text"
                                        value={this.state.lastName}
                                        onChangeValue={this.handleChange('lastName')}
                                    >
                                    </GenericTextField>
                                </div>
                                <div className="column">
                                    <GenericTextField
                                        required={false}
                                        label="Email"
                                        name="email"
                                        variant="outlined"
                                        id="email"
                                        type="email"
                                        value={this.state.email}
                                        onChangeValue={this.handleChange('email')}
                                    >
                                    </GenericTextField>
                                    <GenericTextField
                                        required={false}
                                        label="Age"
                                        name="age"
                                        variant="outlined"
                                        id="age"
                                        type="number"
                                        value={this.state.age}
                                        onChangeValue={this.handleChange('age')}
                                    >
                                    </GenericTextField>
                                </div>
                            </div>
                            <div className="submit-btn">
                                <button className="user-form-btn" data-testid="userbtn"
                                    onClick={this.handleUserForm.bind(this)} >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps: any = (state: RootState) => ({
    responseMsg: state.addNewUserData.responseMsg
});

export default connect(mapStateToProps, null)(Home);
