import React from "react"
import _appParameters from '../app.parameters.json';
import $ from 'jquery'

class general { 
    
    constructor(props){
        this.getReactProperty = this.getReactProperty.bind(this);
    }

    getLabelByKey (key, CurrentResource){
        var result;
        var jres = CurrentResource.filter(function (a) { return a.Key == key; });
        
        if (jres[0] != null) {
            result = jres[0].Value;
        return result;
        }
        
    }

    getProperty (classname, property){
        
        if (global.styles !== undefined){
            var custStyle = global.styles.filter(st => st.Class === classname && st.Property === property)[0].Value.replace("!important","").replace("px","").trim() 
            if (custStyle !== undefined){
                return custStyle;
            }
            else {
                return "";
            }
            
        }

    }

    getReactProperty (custStyle, property){
        var style = custStyle.filter(cs => cs.Property === property);
        if (style.length > 0){
            if(String(property).indexOf("width") === -1 && String(property).indexOf("size") === -1){
                return style[0].Value.replace("!important","").replace("px","").trim()
            }
            else{
                return Number(style[0].Value.replace("!important","").replace("px","").trim());
            }
            
        }
        else {return ""}
    }

    getElementStyle (classname, customstyles = {}){
        
        //var customstyles = {minWidth: 200};
        var custresult = {};
        
        if (global.styles !== undefined){
            var custStyle = global.styles.filter(st => st.Class === classname);
            if (custStyle !== undefined){
                // custStyle.forEach(item => {
                //     const stt = this.getReactProperty(custStyle, 'color');
                //     result.push({color: stt})
                // });
                var custresult = {
                    color: this.getReactProperty(custStyle, 'color'),
                    backgroundColor: this.getReactProperty(custStyle, 'background-color'),
                    borderColor: this.getReactProperty(custStyle, 'border-color'),
                    fontFamily: this.getReactProperty(custStyle, 'font-family'),
                    fontStyle:  this.getReactProperty(custStyle, 'font-style'),
                    fontSize:  this.getReactProperty(custStyle, 'font-size'),
                    borderWidth: this.getReactProperty(custStyle, 'border-width'),
                    borderStyle: this.getReactProperty(custStyle, 'border-style')
                }

                
                
            }
        }
        var result = {...custresult, ...customstyles};
        
        return result;
    }

    getElementStyleProperty(classname, property){
        var result = "";
        if (global.styles !== undefined){
            var custStyle = global.styles.filter(st => st.Class === classname);
            if (custStyle !== undefined){
                result = this.getReactProperty(custStyle, property);
            }
        }
        return result;
    }

    compareTwoArrayOfObjects = (
        first_array_of_objects,
        second_array_of_objects
    ) => {
        return (
            first_array_of_objects.length === second_array_of_objects.length &&
            first_array_of_objects.every((element_1) =>
                second_array_of_objects.some((element_2) =>
                    Object.keys(element_1).every((key) => element_1[key] === element_2[key])
                )
            )
        );
    };

    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
}

const General = new general();
export default General;