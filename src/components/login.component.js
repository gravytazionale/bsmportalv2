import React, {Component, useEffect, useState} from 'react';
import $ from 'jquery'
import apiuser from '../script.api/api.user';
import './../Styles/bsm.login.css';
import apigeneral from '../script.api/api.general';

const LoginComponent = (props) =>{

    const [userMail, setuserMail] = useState('');


    // constructor(props){
    //     super(props);
    //     console.log(this.props.parameters);
    //     this.state = {
    //         mailaddress: ""
    //     }
    // }

    async function _onLogin () {
        console.log(global.currentuser);
        apiuser.userLogin(userMail, "")
        .then(user => {
            if (user.User.ID > 0){
                global.logged = true;
                global.currentuser = user.User;
                $("#hdncurrentuser").val(JSON.stringify(user.User));
                localStorage.setItem("currentuser",JSON.stringify(user.User));
                global.styles = user.Style;
                $("#hdnstyles").val(user.Style);
                localStorage.setItem("styles",JSON.stringify(user.Style));
                global.gadgets = user.Gadgets;
                _onClose(false);

            }
        });
    }
        
    // }

    function _onClose(){
        props.onClose(false);
        props.onSuccessfull();
    }
    
    // setUserMail(evt) {
    //     const val = evt.target.value;
    //     // ...       
    //     this.setState({
    //         mailaddress: val
    //     });
    //   }

    // render(){
        return <div>
                <div>
                    <span id='login.mailaddress' className='login.label'>
                        Mail Address
                    </span>
                </div>
                <div>
                    <input type='text' id='login.txtmailaddress' autoComplete='off' className='login-inputbox' value={userMail} 
                    onChange={evt => setuserMail(evt.target.value)} />
                </div>
                <div>
                    <span id='login.password'>
                        Password
                    </span>
                </div>
                <div>
                    <input type='password' id='login.txtpassword' autoComplete='off' className='login-inputbox' />
                </div>
                <div>
                    <button id='btnLogin' className='bsmbutton' onClick={_onLogin.bind(this)}>Login</button>
                </div>
            </div>
    // }
    
}

export default LoginComponent;