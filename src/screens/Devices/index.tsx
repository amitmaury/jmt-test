import React, { Component} from 'react';
import './index.scss';
import GenericCard from "../../Components/GenericCard";
import deviceListData from "../../config/deviceList.json";

interface Props {
    history: any;
}
interface StateComponent {
}
export class Devices extends Component<any, StateComponent> {
    constructor(props: any, state: StateComponent) {
        super(props, state)
        this.state = {
        }
    }
    render() {
        return (
            <div id="deviceWrapper">
                <div className="device-container">
                    <div className="device-page-div">
                        <h1 className="header-title">Devices</h1>
                        <GenericCard productList={deviceListData} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Devices;
