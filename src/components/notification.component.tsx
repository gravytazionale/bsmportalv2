import React, {Component, useEffect} from 'react';
import General from '../script/general.js';
import '../App.css';

const NotificationComponent = (props: any) =>{

        function _onCancel (){
          props.showNotification({show: false, color: "", message: "", confirm: false});
        }
       
        function _onConfirm (){
          props.onConfirm();
        }

        const ShowNotification = () => {          


            if (props.notification.show){  
                console.log("show notification");
                if(!props.notification.confirm )
                {
                  setTimeout(function () {
                    props.showNotification({show: false, color: "", message: "", confirm: false});
                  }, 5000);
                }
                      
                return <div style={General.getElementStyle("modal-content")} className='divNotificationMsg'>
                  <div style={{borderRadius: 10, backgroundColor: props.notification.color, height: 70, alignContent: "center"}}>
                      {props.notification.message}
                      {props.notification.confirm ? 
                        <div> Confermare l'operazione? 
                          <button style={General.getElementStyle("btn-default",{borderRadius: 10, height: 30, width:100, marginLeft: 10})} onClick={_onConfirm}>
                            {General.getLabelByKey("Button_Confirm", props.CurrentResource)}
                        </button>
                        <button style={General.getElementStyle("btn-default",{borderRadius: 10, height: 30, width:100, marginLeft: 10})} onClick={_onCancel} >
                            {General.getLabelByKey("Button_Cancel", props.CurrentResource)}
                        </button>
                        </div> : null}
                  </div>
                  
                </div>;
                
              }
              else {
                return <div></div>
              }
        }

        return <div>
            {ShowNotification()}
        </div>
    
}

export default NotificationComponent
