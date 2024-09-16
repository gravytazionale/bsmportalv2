import React, {Component} from 'react';
import General from '../script/general.js';
import apipagesettings from '../script.api/api.pagesettings.js';
import GadgetsComponentV2 from './gadget.component.v2'
import parse from 'html-react-parser'
import './../Styles/bsm.gadgets.css';
import { Dialog } from '@headlessui/react';

export default class AdministrationComponent extends React.Component<any, any> {
    constructor (props: any){
        super(props); 
        this.state = {
            __admingadgets:[]
        };


    }

    componentDidMount(): void {
        apipagesettings.GetAdministrativeGadget(null).then(result => {
            if (result !== undefined && result.length > 0){
                this.setState({__admingadgets: result})}
        })

    }

    renderGadgets = () => {        

        if (this.state.__admingadgets.length >0){
            let admingadgets: any = [];
            this.state.__admingadgets.forEach((gd: any)  => {
                var agd = {
                    Gadget: gd,
                    Summary: []
                }
                admingadgets.push(agd);
            });
            var backhome = {
                Gadget: {
                    PlaceHolder: 8,
                    Notification: false,
                    ID: "19d5c9a4-1533-44be-83c5-6291a8a2406e",
                    Title: "BackHome",
                    GadgetType: 99,
                    Image: "m-messanger.png",
                    Url: "/Interface/Messanger.aspx",
                    MobileComponent: "Home",
                    IsDefault: false,
                    Permission: 1,
                    GadgetOrder: 0,
                    ResourceLabel: "NavigationHome"
                },
                Summary: []
                
            }
            admingadgets.push(backhome);

            return <GadgetsComponentV2 
                gadgets={admingadgets} 
                CurrentResource={this.props.CurrentResource} 
                pageSetting={this.props.pageSetting}                
                editPage={this.props.editPage}
                onGadgetClick={this.props.onGadgetClick}
                />
        }
        else {return <div></div>}
       
        
        
    }

    render (){
        return <div style={{width: '100%'}}>            
            <div style={General.getElementStyle("bsm_c_pagetitle")} className='divPageTitle'>
                {General.getLabelByKey("Admin_PageTitle", this.props.CurrentResource)}
            </div>
            
            {this.renderGadgets()}

            
        </div>
    }
}