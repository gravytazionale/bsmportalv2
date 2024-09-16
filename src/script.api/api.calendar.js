import React from "react"
import _appParameters from '../app.parameters.json';
import $ from 'jquery'

export default class apicalendar extends React.Component{  
    static GetCalendars = async (cacheUri, onlyenabled) =>{
        try {
            var user;
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            };
            const requrl = _appParameters.apiurl + 'api/calendars/GetCalendars/?token=' + global.currentuser.Token + '&correlationid=' + global.correlationid + '&onlyenable=' + onlyenabled;
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

    static SaveCalendar = async (cacheUri, calendarid, dateformat, data) =>{
        try {
            var user;
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            const requrl = _appParameters.apiurl + 'api/calendars/SaveCalendar/?token=' + global.currentuser.Token + 
            '&correlationid=' + global.correlationid + 
            '&calendarid=' + calendarid + 
            '&currentdateformat=' + dateformat;
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