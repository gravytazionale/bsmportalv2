import React, {Component, useEffect} from 'react';
import './../Styles/bsm.headercommand.css';
import $ from 'jquery'
import General from './../script/general.js'

const HeaderCommandComponent = (props) =>{

    useEffect(() => {
        //$("#imgCommand").attr('fill', props.CurrentStyle.color);
        $("#spnHome").html(General.getLabelByKey("NavigationHome", props.CurrentResource)) 
        // $("#spnLogin").html(general.getLabelByKey("Label_Login"))
        $("#spnAbout").html(General.getLabelByKey("Label_About", props.CurrentResource))
    });

    function showCommands() {
        if ($("#divCommands").css('display') === 'none'){
            $("#divCommands").css('display', 'block');
        }
        else {
            $("#divCommands").css('display', 'none');
        }
    }

    function showLogin (visible){
        
        props.showLogin(visible);
        showCommands();
    }
    
    function showPage(pagename){
        props.showPage(pagename);
        showCommands();
    }

    const getLoginButton = () => {
        if ($("#hdncurrentuser").val() !== undefined && $("#hdncurrentuser").val() !== ""){
            return <button id='btnLogin' onClick={() => showPage("Profile")}>
                    <span >{global.currentuser.LastName} {global.currentuser.FirstName}</span>
                </button>
        }
        else {
            return <button id='btnLogin' onClick={() => showLogin(true)}>
                        <span>{General.getLabelByKey("Label_Login", props.CurrentResource)}</span>
                    </button> 
        }
    }

    

    

    return( <div style={{marginLeft: 10, position: "relative", top: 10}}>
        <button onClick={() => showCommands()} style={{border: 0, background: 'unset'}}>
            <svg fill={General.getElementStyleProperty("ICON","ICON")} version="1.1" id="imgCommand" xmlns="http://www.w3.org/2000/svg" 
                width="30px" height="30px" viewBox="0 0 124 124" >
            <g>
                <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
                <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
                <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
            </g>
            </svg>
        </button>
        <div id='divCommands' className='divCommands' style={General.getElementStyle("modal-content")}>
            <div>
                <button id='btnLogin' onClick={() => showPage("Home")}>
                    <span id='spnHome'></span>
                </button>
            </div>
            <div>
                {getLoginButton()}
            </div>
            <div><span id='spnAbout'></span></div>
        </div>
    </div>)

}


export default HeaderCommandComponent;