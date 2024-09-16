import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/login.component';
import HomeComponent from './components/home.component';
import HomeComponentV2 from './components/home.componentV2';
import HeaderCommandComponent from './components/headercommand.component.v2';
import ProfileComponent from './components/profile.component';
import NotificationComponent from './components/notification.component';
import AdministrationComponent from './components/administration.component';
import ManageCalendarsComponent from './components/managecalendars.component';
import apigeneral from './script.api/api.general';
import React, {Component, useEffect, useState} from 'react';
import $ from 'jquery'
import { Dialog } from '@headlessui/react'
import General from './script/general.js';
import apiuser from './script.api/api.user';
import apipagesettings from './script.api/api.pagesettings.js';

const App = () => {

  
  const [_showLogin, set_showLogin] = useState(false);
  const [CurrentResource, setCurrentResource] = useState([])
  const [_showComponent, set_showComponent] = useState("Home");
  const [_dataLoaded, set_dataLoaded] = useState(false);
  const [_pageEdit, set_pageEdit] = useState(false);
  const [_gadgets, set_gadgets] = useState([]);
  const [_pageSetting, set_pageSetting] = useState({pageEdit: false, toSave: false, page: "", contents: null})
  const [_notification, set_notification] = useState({show: false, color: "", message: "", confirm: false});
  global.language = 'it-IT';
  global.correlationid = "7829C1DA-9F96-4BFF-B095-4F47323D9B72";
  

  

  useEffect(() => {
    if (CurrentResource.length === 0)
    {
      apigeneral.getCultureResources(null).then(result => {
        if (result !== undefined && result.length > 0)
        {
          $("#hdnlabels").val(JSON.stringify(result)); 
          setCurrentResource(result);
        } 
      });
    }
    
    setHomePageByUser();
    
    
    
  })

  function setHomePageByUser()
  {
    console.log("logged:" + global.logged);
    if (!global.logged || global.logged === undefined){
      if (localStorage.getItem("currentuser") !== "undefined"){

        apiuser.userLoginByToken(JSON.parse(localStorage.getItem("currentuser")).Token)
        .then(user => {
          if (user.User.ID > 0){
            global.currentuser = user.User;
            $("#hdncurrentuser").val(JSON.stringify(user.User));
            localStorage.setItem("currentuser",JSON.stringify(user.User));
            global.logged = true;
            global.styles = user.Style;
            $("#hdnstyles").val(user.Style);
            localStorage.setItem("styles",JSON.stringify(user.Style));
            global.gadgets = user.Gadgets;
            set_gadgets(user.Gadgets);
            // set_currentGadgets(user.Gadgets);
            set_dataLoaded(true);
           
          }
          else {
            localStorage.setItem("currentuser", "undefined");
            global.logged = false;
          }
        })      
      }
    }
    else {
      set_gadgets(global.gadgets);
    }
    

  }

  function viewLogin(visible) {
    set_showLogin(visible);
  }

  function loginSuccefull() {
    console.log("loginSuccefull");
    setHomePageByUser();
  }
  
  function showPage(pagename){
    set_showComponent(pagename);
  }

  function editPage (contentsToSave, pagename)  {
    set_pageSetting({pageEdit: _pageSetting.pageEdit, toSave: true, page: pagename, contents: contentsToSave})
    set_gadgets(contentsToSave);
}

  function _cancelPage ()  {
    set_pageSetting({pageEdit: false, toSave: false, page: "", contents: null})
    set_gadgets(global.gadgets);
  }
  // render(){

    const getcurrentCustomerName = () =>{
      if ($("#hdncurrentuser").val() !== undefined && $("#hdncurrentuser").val() !== "") {
        const currentuser = JSON.parse($("#hdncurrentuser").val());
        var sty = General.getElementStyle("navbar-inverse");
        return <span 
        style={ General.getElementStyle("navbar-header")}>
          {currentuser.Customer.CustomerName}
        </span>
        
      }
      else {
        return <span>Business Service Management</span>
      }
      
      
    }

    const showComponent = () => {
      console.log("showcomponent:" + _showComponent);
      console.log("currentpage:" + window.currentpage);
      
      // if (_showComponent !== window.currentpage)
      // {
        window.currentpage= _showComponent;
        switch (_showComponent)
        {
          case "Home":
            return <HomeComponentV2 
              CurrentResource={CurrentResource} 
              pageEdit={_pageEdit} 
              gadgets={_gadgets} 
              pageSetting={_pageSetting}            
              editPage={editPage.bind(this)}
              onGadgetClick={showPage.bind(this)}/>;
            break;
          case "Profile":
            return <ProfileComponent />;
            break;
          case "Administration":
            return <AdministrationComponent 
              CurrentResource={CurrentResource} 
              pageEdit={_pageEdit} 
              //gadgets={_gadgets} 
              pageSetting={{pageEdit: false, toSave: false, page: "Administration", contents: []}}            
              //editPage={editPage.bind(this)}
              onGadgetClick={showPage.bind(this)}/>
            break;
          case "ManageCalendars":
            return <ManageCalendarsComponent 
              CurrentResource={CurrentResource} 
              pageEdit={_pageEdit} 
              //gadgets={_gadgets} 
              pageSetting={{pageEdit: false, toSave: false, page: "ManageCalendars", contents: []}}            
              //editPage={editPage.bind(this)}
              onGadgetClick={showPage.bind(this)}
              language= {global.language}
              onNotification={_showNotification.bind(this)}
              />
            break;
        };
        
      // }
      
    }

    const _setPage = (tosave, pagename) => {  
      if (_pageSetting.pageEdit){
        if (_pageSetting.toSave){
          console.log("DA SALVARE");
          set_notification({show: true, color: "red", message: "Da salvare", confirm: false});
         
        }
        else {
          set_pageSetting({pageEdit: false, toSave: false, page: "", contents: _gadgets})
        }
      }
      else {
        set_pageSetting({pageEdit: true, toSave: tosave, page: pagename, contents: _gadgets})
      }
      
    }

    const _savePage = () => {
      if (_pageSetting.toSave){
        console.log(_pageSetting.contents);
        let gadgetsToSave = [];
        switch (_pageSetting.page){
          case "HOME":
            _pageSetting.contents.forEach(hpg => {
              var pgset = {
                PageName: "MobileHomePage",
                Setting: "Gadget",
                SettingValue: hpg.Gadget.ID,
                SettingOrder: hpg.Gadget.PlaceHolder,
                User: global.currentuser.ID
              };
              gadgetsToSave.push(pgset);
            });
          break;
        }
        
        apipagesettings.SavePage(gadgetsToSave).then((saveResult) => {
          if (saveResult){
            set_notification({show: true, color: "green", message: "Salvataggio completato con successo", confirm: false});
            set_gadgets(_pageSetting.contents);
            global.gadgets = _pageSetting.contents;
            // set_currentGadgets(_pageSetting.contents);
            set_pageSetting({pageEdit: false, toSave: false, page: "", contents: _gadgets})
          }
          else {
            set_notification({show: true, color: "red", message: "Errore nel salvataggio", confirm: false});
          }
          
        });
        
      }
      
    }

    const _showNotification = (value) => {
      set_notification(value);
      
    }

    const settingSave = ()  => {
      if (_pageSetting.pageEdit){
        return <div style={{float: "inline-start"}}>
                <button onClick={() => _savePage()} style={{border: 0, background: 'unset'}}>
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 
                  5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 
                  3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 
                  5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 
                  14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" 
                  fill={General.getElementStyleProperty("ICON","ICON")}/>
                </svg>
                </button>
                <button onClick={() => _cancelPage()} style={{border: 0, background: 'unset'}}>
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 8H5V3M5.29102 16.3569C6.22284 17.7918 7.59014 18.8902 9.19218 19.4907C10.7942 20.0913 12.547 20.1624 
                  14.1925 19.6937C15.8379 19.225 17.2893 18.2413 18.3344 16.8867C19.3795 15.5321 19.963 13.878 19.9989 12.1675C20.0347 10.4569 19.5211 8.78001 18.5337 
                  7.38281C17.5462 5.98561 16.1366 4.942 14.5122 4.40479C12.8878 3.86757 11.1341 3.86499 9.5083 4.39795C7.88252 4.93091 6.47059 5.97095 5.47949 7.36556" 
                  stroke={General.getElementStyleProperty("ICON","ICON")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  />
                </svg>
                </button>
        </div>
        
        
      }
    }

    const settingCommand = () => {
      if (_showComponent === "Home"){
        return <div style={{position: 'absolute', right: 25, top: 10}}> 
        {settingSave()}       
        <button onClick={() => _setPage(false, "")} style={{border: 0, background: 'unset'}}>
          <svg width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" >
            <path fill={General.getElementStyleProperty("ICON","ICON")} d="M26.6,12.9l-2.9-0.3c-0.2-0.7-0.5-1.4-0.8-2l1.8-2.3c0.2-0.2,0.1-0.5,0-0.7l-2.2-2.2c-0.2-0.2-0.5-0.2-0.7,0  
            l-2.3,1.8c-0.6-0.4-1.3-0.6-2-0.8l-0.3-2.9C17,3.2,16.8,3,16.6,3h-3.1c-0.3,0-0.5,0.2-0.5,0.4l-0.3,2.9c-0.7,0.2-1.4,0.5-2,0.8  
            L8.3,5.4c-0.2-0.2-0.5-0.1-0.7,0L5.4,7.6c-0.2,0.2-0.2,0.5,0,0.7l1.8,2.3c-0.4,0.6-0.6,1.3-0.8,2l-2.9,0.3C3.2,13,3,13.2,3,13.4v3.1  
            c0,0.3,0.2,0.5,0.4,0.5l2.9,0.3c0.2,0.7,0.5,1.4,0.8,2l-1.8,2.3c-0.2,0.2-0.1,0.5,0,0.7l2.2,2.2c0.2,0.2,0.5,0.2,0.7,0l2.3-1.8  
            c0.6,0.4,1.3,0.6,2,0.8l0.3,2.9c0,0.3,0.2,0.4,0.5,0.4h3.1c0.3,0,0.5-0.2,0.5-0.4l0.3-2.9c0.7-0.2,1.4-0.5,2-0.8l2.3,1.8  
            c0.2,0.2,0.5,0.1,0.7,0l2.2-2.2c0.2-0.2,0.2-0.5,0-0.7l-1.8-2.3c0.4-0.6,0.6-1.3,0.8-2l2.9-0.3c0.3,0,0.4-0.2,0.4-0.5v-3.1  
            C27,13.2,26.8,13,26.6,12.9z M15,19c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C19,17.2,17.2,19,15,19z"/>
          </svg>
        </button>
      </div>;
      }
      else {
        return <div></div>
      }
      
    }

    return (
        <div>
          <div className="App divheader" 
          style={General.getElementStyle("navbar-inverse")}>
            <input type='hidden' id='hdncurrentuser' />
            <input type='hidden' id='hdnlabels' />
            <input type='hidden' id='hdnstyles' />
            <div>
                <img src={require('./assets/defaultLogo.jpg')} className='logo'/>
            </div>
            <div className='divSiteTitle' >
                <div style={{position: "relative", top: 10}}>{getcurrentCustomerName()}</div> 
                <HeaderCommandComponent 
                CurrentResource={CurrentResource} 
                showLogin={viewLogin.bind(this)} 
                showPage={showPage.bind(this)}
                />
                {settingCommand()}
            </div>
           
          </div>
          <div className='divNotifications' >
            <div>
                {/* {ShowNotification()} */}
                <NotificationComponent notification={_notification} showNotification={_showNotification.bind(this)} CurrentResource={CurrentResource}/>
            </div>
          </div>
          <div>
              {showComponent()}
          </div>
          <Dialog open={_showLogin} onClose={() => viewLogin(false)}>
            <Dialog.Panel>
              <div className='divLogin'>
                <LoginComponent onClose={viewLogin.bind(this)} onSuccessfull={loginSuccefull.bind(this)} />
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      );
    // }
}

export default App;
