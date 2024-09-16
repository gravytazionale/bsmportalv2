import React from "react"
import _appParameters from '../app.parameters.json';

export default class apiuser extends React.Component{
   
    static userLogin = async  (usermail, password) => {   
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            };
            var requrl = _appParameters.apiurl + 'api/user/LoginByPortal/?usermail=' + usermail + '&password=' + password + '&pagename=MobileHomePage';
            const response = await fetch(requrl, requestOptions)
            const responseJson = await response.json();
            // console.log('userLogin()');
            return responseJson;
            } 
            catch (error) {
            console.error(error.message); 
            } 
            finally {
            
            }

    }

    static userLoginByToken = async (token) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            };
            var requrl = _appParameters.apiurl + '/api/user/LoginByTokenByPortal/?token=' + token + '&pagename=MobileHomePage';
            const response = await fetch(requrl, requestOptions)
            const responseJson = await response.json();
            // console.log('userLoginByToken()');
            return responseJson;
            } 
            catch (error) {
            console.error(error.message); 
            } 
            finally {
            
            }
        }
    }


