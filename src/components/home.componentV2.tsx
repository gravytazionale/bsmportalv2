import React, {Component, useEffect, useRef, useState} from 'react';
import General from '../script/general.js';
import apipagesettings from '../script.api/api.pagesettings.js';
import GadgetsComponentV2 from './gadget.component.v2'
import parse from 'html-react-parser'
import './../Styles/bsm.gadgets.css';
import { Dialog } from '@headlessui/react';

export default class HomeComponentV2 extends React.Component<any, any> {
    constructor (props: any){
        super(props); 
        this.state = {
            _gadgets:[]
        };

    }



    render() {
        const renderGadgets = () => {
            if (this.props.gadgets.length){
                return <GadgetsComponentV2 
                    gadgets={this.props.gadgets} 
                    CurrentResource={this.props.CurrentResource} 
                    pageSetting={this.props.pageSetting}                
                    editPage={this.props.editPage}
                    onGadgetClick={this.props.onGadgetClick}
                    />
            }
            else {return <div></div>}
        }

        return <div style={{width: '100%'}}>
            {renderGadgets()}
            </div>
    }

}