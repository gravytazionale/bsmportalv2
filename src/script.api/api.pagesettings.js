import React from "react"
import _appParameters from '../app.parameters.json';
import $ from 'jquery'

export default class apipagesettings extends React.Component{

    static GetAvailableGadgets = async (cacheUri) =>{
        try {
            var user;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            const requrl = _appParameters.apiurl + 'api/pagesettings/GetAvailableGadget/?token=' + global.currentuser.Token + '&correlationid=' + global.correlationid;
            console.log(requrl);
            const response = await fetch(requrl, requestOptions)
            const responseJson = await response.json();
            return responseJson;
            } 
            catch (error) {
            console.error(error.message);
            } 
            finally {
            
            }

    }

    static SavePage = async (json) => {
        try {
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json)
            };
            const requrl = _appParameters.apiurl + '/api/pagesettings/SavePageSettings/?token=' + global.currentuser.Token + '&correlationid=' + global.correlationid;
            console.log(requrl);
            const response = await fetch(requrl, requestOptions)
            const responseJson = await response.json();
            return responseJson;
            } 
            catch (error) {
            console.error(error.message);
            } 
            finally {
            
            }
    }

    static GetAdministrativeGadget = async (cacheUri) => {
        try {
            var user;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            const requrl = _appParameters.apiurl + 'api/pagesettings/GetAdministrativeGadget/?token=' + global.currentuser.Token + '&correlationid=' + global.correlationid;
            console.log(requrl);
            const response = await fetch(requrl, requestOptions)
            const responseJson = await response.json();
            return responseJson;
            } 
            catch (error) {
            console.error(error.message);
            } 
            finally {
            
            }
    }

}
