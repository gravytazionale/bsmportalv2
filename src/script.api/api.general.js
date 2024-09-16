import React from "react"
import _appParameters from '../app.parameters.json';
import $ from 'jquery'

export default class apigeneral extends React.Component{  

    

    
    static getCultureResources = async (cacheUri) => {   
        try { 
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            const requrl = _appParameters.apiurl + '/api/resource/GetResource/?culture=' + global.language + '&correlationid=' + global.correlationid;
            const response = await fetch(requrl, requestOptions)
            const responseJson = await response.json();
            
            // FileSystem.writeAsStringAsync (
            //     cacheUri,
            //     JSON.stringify(responseJson),
            //     { encoding: FileSystem.EncodingType.UTF8 } );
            
            $("#hdnlabels").val("");    
            return responseJson;
            
            
            } 
            catch (error) {
            console.error(error.message);
            } 
            finally {
            
            }

    }

    
    
    

}