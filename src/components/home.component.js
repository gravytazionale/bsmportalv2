import React, {Component, useEffect, useRef, useState} from 'react';
import './../Styles/bsm.home.css';
import GadgetsComponentV2 from './gadget.component.v2'



// export default class HomeComponent extends React.Component {
    const HomeComponent = (props) => {

    // constructor(props){
    //     super(props);
    //     console.log("home");
    //     this.state = {homegadgets: this.props.gadgets};
    //     const prevClearChildStateCount = React.useRef(0)
    // }

    const [_gadgets , setGadgets] = useState([]);
    const prevClearChildStateCount = useRef(props.gadgets);

    useEffect(() => {
        if (props.gadgets !== prevClearChildStateCount.current){
            setGadgets(props.gadgets);
        }
        prevClearChildStateCount.current = props.gadgets;
    }, [props.gadgets])
    
    

    const renderGadgets = () => {
        if (_gadgets.length){
            return <GadgetsComponentV2 
                gadgets={_gadgets} 
                CurrentResource={props.CurrentResource} 
                pageSetting={props.pageSetting}                
                editPage={props.editPage}
                onGadgetClick={props.onGadgetClick}
                />
        }
        else {return <div></div>}
    }

    // render(){
        return <div style={{width: '100%'}}>
            
            {/* <GadgetsComponent gadgets={global.gadgets} CurrentResource={this.props.CurrentResource} pageEdit={this.props.pageEdit}/> */}
            {renderGadgets()}
        </div>
    // }
}

export default HomeComponent;