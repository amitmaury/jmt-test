import React, { Component } from 'react';
import UserTextField from './components/UserTextField'

interface propsInterfacce {
    label: string;
    name?: string;
    id: string;
    type: string;
    variant: string;
    value?: string | null;
    onChangeValue: (
        event: React.ChangeEvent<HTMLInputElement>,
        val: any
    ) => void;
    placeholder?: string;
    required?: boolean;
}
export class GenericTextField extends Component<propsInterfacce>{

    handleChange = (e: any) => {
        this.props.onChangeValue(e.target.id, e.target.value);
    }
    render() {
        return (
            <UserTextField
                label={this.props.label}
                variant={this.props.variant}
                id={this.props.id}
                type={this.props.type}
                value={this.props.value}
                onChange={this.handleChange}
                placeholder={this.props.placeholder}
                required={this.props.required}
            />
        )
    }
}

export default GenericTextField;

