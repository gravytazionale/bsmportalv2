import React from 'react';
import General from '../script/general.js';
import apicalendar from '../script.api/api.calendar.js';
import parse from 'html-react-parser'
import './../Styles/bsm.calendars.css';
import { Dialog } from '@headlessui/react';
import moment from 'moment';
import 'moment/locale/it';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { it } from 'date-fns/locale/it';
import Switch from "react-switch";
import { SketchPicker } from 'react-color';
import NotificationComponent from '../components/notification.component';
import { resourceUsage } from 'process';
registerLocale('it', it)

export default class ConfigCalendarComponent extends React.Component<any, any> {
    constructor (props: any){
        super(props); 

        let calendar = {
            ID : "NEW",
            Anonimous: false,
            Confirm: false,
            DateEnd: moment(Date()).format(("YYYY-MM-DDTHH:mm:ss")),
            DateStart: moment(Date()).format(("YYYY-MM-DDTHH:mm:ss")),
            Description: "",
            Duration: 0,
            Enabled: false,
            MaxEntry: 0,
            Name: "Nuovo Calendario",
            PublicUrl: "",
            Reservation: false,
            Color: "#ffffff"
            
        }
        if(this.props.calendar.ID !== "NEW"){
            calendar = this.props.calendar
        }

        this.state = {
            __calendar:JSON.parse(JSON.stringify(calendar)),
            __orcalendar: JSON.parse(JSON.stringify(calendar)),
            __startdate: new Date(),
            __showcolorPicker: false,
            __unsaved: false,
            __notification: {show: false, color: "", message: "", confirm: false}
        };

        console.log(this.props.calendar);
        

       
    }

    _onchangedate(date: Date | null, field: string){
        var chcalendar: {} = this.state.__calendar;
        Object.defineProperty(chcalendar, field, {value: moment(date).format(("YYYY-MM-DDTHH:mm:ss"))});
        this.setState({__calendar: chcalendar, __unsaved: true});
        console.log(this.state.__calendar);
    }

    _onchangetext(value: string, field: string){
        var chcalendar: {} = this.state.__calendar;  
        Object.defineProperty(chcalendar, field, {value: value});        
        this.setState({__calendar: chcalendar, __unsaved: true});
        console.log(this.state.__calendar);
    }

    _onchangenumber(value: number, field: string){
        var chcalendar: {} = this.state.__calendar;
        Object.defineProperty(chcalendar, field, {value: value});
        this.setState({__calendar: chcalendar, __unsaved: true});
        console.log(this.state.__calendar);
    }

    _onchangebool(value: boolean, field: string){
        var chcalendar: {} = this.state.__calendar;
        Object.defineProperty(chcalendar, field, {value: value});
        this.setState({__calendar: chcalendar, __unsaved: true});
        console.log(this.state.__calendar);
    }

    _onchangeColorPicker = (color: any) => {
        this._onchangetext(color.hex, "Color")
      };

      _openColorPicker = () => {
        this.setState({__showcolorPicker: !this.state.__showcolorPicker});
      }

      _closeColorPicker = () => {
        this.setState({__showcolorPicker: false});
      }

      _onchangeSwitch = (checked: any, event: any, id: any) => {
        switch (id){
            case "chkAnonymous":
                this._onchangebool(checked,"Anonymous")
            break;
            case "chkConfirm":
                this._onchangebool(checked,"Confirm")
            break;
        }
      }

      _oncloseCalendar = () => {
        if (this.state.__unsaved){
            this._showNotification({show: true, color: "red", message: "I cambiamenti non sono stati salvati", confirm: true});
        }
        else {
            this.props.calendarClose();
        }
        
      }

      _showNotification = (value: {}) => {
        this.setState({__notification: value})            
      }

      _saveCalendar = () => {
        if(this.state.__calendar.ID === "NEW"){
            apicalendar.NewCalendar(null, General.getLabelByKey("DateFormat", this.props.CurrentResource), this.state.__calendar).then(result => {
                if (result !== undefined && result === true){
                    console.log(result);
                    this.setState({__unsaved: false})
                    this._showNotification({show: true, color: "green", message: "Calendario salvato", confirm: false});
                    this.props.configcalendarSaved(this.state.__calendar);
                }
                else {
                    this._showNotification({show: true, color: "red", message: "c'è stato un errore nel salvataggio", confirm: false});
                }
            });
        }
        else {
            apicalendar.SaveCalendar(null, this.state.__calendar.ID, General.getLabelByKey("DateFormat", this.props.CurrentResource), this.state.__calendar).then(result => {
                if (result !== undefined && result === true){
                    console.log("save successfull");
                    this.setState({__unsaved: false})
                    this._showNotification({show: true, color: "green", message: "Calendario salvato", confirm: false});
                    this.props.configcalendarSaved(this.state.__calendar);
                }
                else {
                    this._showNotification({show: true, color: "red", message: "c'è stato un errore nel salvataggio", confirm: false});
                }
            });
        }
        

      }

      _onConfirmNotification = () => {
        this.setState({
            __unsaved: false,
            __notification: {show: false, color: "", message: "", confirm: false},
            __calendar:JSON.parse(JSON.stringify(this.props.calendar))
        });
        
        
        this.props.calendarClose();
      }

      _onPublicUrl = () => {
        const publicurl = General.makeid(10);
        this._onchangetext(publicurl, "PublicUrl");
        this._showNotification({show: true, color: "green", message: "è stato creato l'indirizzo pubblico", confirm: false});
      }


      

    render() {

      
        

        return <div >
            <div id="divCalendarTitle">{this.state.__calendar.Name} : {General.getLabelByKey("Label_Edit", this.props.CurrentResource)}</div>
            <div>
                <NotificationComponent 
                    notification={this.state.__notification} 
                    showNotification={this._showNotification.bind(this)} 
                    CurrentResource={this.props.CurrentResource}
                    onConfirm={this._onConfirmNotification.bind(this)}
                    />
            </div>
            <div className='divcalendarformelement'>
                <div className='divcalendarlabel'>
                    {General.getLabelByKey("Label_CalendarName", this.props.CurrentResource)}
                </div>
                <div>
                    <input type='text' id='txtCalName' defaultValue={this.state.__calendar.Name} onChange={e => this._onchangetext(e.target.value, "Name" )} style={{width: 300}} />
                </div>
            </div>
            <div style={{float: 'none'}} className='divcalendarformelement'>
                <div className='divcalendarlabel'>
                    {General.getLabelByKey("Label_CalendarDateStart", this.props.CurrentResource)}
                </div>
                <div>
                    <DatePicker
                        locale="it"
                        id='txtCalStartDate' 
                        value={moment(this.state.__calendar.DateStart).format('L') } 
                        selected={this.state.__calendar.DateStart}
                        onChange={(date) => this._onchangedate(date, "DateStart")}
                        showMonthDropdown
                        showYearDropdown                                               
                        />
                    

                </div>
            </div>
            <div className='divcalendarformelement'>
             <div className='divcalendarlabel'>
                    {General.getLabelByKey("Label_Description", this.props.CurrentResource)}
                </div>
                <div>
                    <textarea id='txtCalDescription' defaultValue={this.state.__calendar.Description} onChange={e => this._onchangetext(e.target.value, "Description" )} style={{width: 300, height: 100}}>                        
                    </textarea>
                </div>
            </div>
            <div style={{float: 'none'}} className='divcalendarformelement'>
                <div className='divcalendarlabel'>
                    {General.getLabelByKey("Label_CalendarDateEnd", this.props.CurrentResource)}
                </div>
                <div>
                <DatePicker
                        locale="it"
                        id='txtCalEndDate' 
                        value={moment(this.state.__calendar.DateEnd).format('L') } 
                        selected={this.state.__calendar.DateEnd}
                        onChange={(date) => this._onchangedate(date, "DateEnd")}
                        showMonthDropdown
                        showYearDropdown                                               
                        />
                </div>
            </div>
            <div style={{float: 'none'}} className='divcalendarformelement'>
             <div className='divcalendarlabel'>
                    {General.getLabelByKey("Label_MaxEntry", this.props.CurrentResource)}
                </div>
                <div>
                    <input type='text' id='txtCalMaxEntry' defaultValue={this.state.__calendar.MaxEntry} onChange={e => this._onchangenumber(Number(e.target.value), "MaxEntry" )} style={{width: 100}} /> 
                </div>
            </div>
            <div style={{float: 'none'}} className='divcalendarformelement'>
             <div className='divcalendarlabel'>
                    {General.getLabelByKey("Label_Color", this.props.CurrentResource)}
                </div>
                <div>
                    <input type='text' id='txtCalColor' value={this.state.__calendar.Color} style={{width: 100}} onClick={this._openColorPicker} /> 
                    {/* <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue" />
                    </svg> */}
                    <div style={{backgroundColor: this.state.__calendar.Color
                        , width: 25, height: 21, float: "right", position: "relative", right: 25}}></div>
                    { this.state.__showcolorPicker ? <div className='divColorPicker'>
                    <div className='cover' onClick={this._closeColorPicker}/>
                    <SketchPicker color={ this.state.__calendar.Color } onChange={ this._onchangeColorPicker }  />
                    </div> : null }
                </div>
            </div>
            <div style={{float: 'none'}} className='divcalendarformelement'>
             <div className='divcalendarlabel'>
                    {General.getLabelByKey("Label_Duration", this.props.CurrentResource)}
                </div>
                <div>
                    <input type='text' id='txtCalDuration' defaultValue={this.state.__calendar.Duration} onChange={e => this._onchangenumber(Number(e.target.value), "Duration" )} style={{width: 100}} /> 
                </div>
            </div>
            <div className='divcalendarformelement' style={{width: "33%"}}>
                <div className='divcalendarlabel' style={{width: "35%"}}>
                    {General.getLabelByKey("Label_Confirm", this.props.CurrentResource)}
                </div>
                <div>
                    <Switch id='chkConfirm' onChange={this._onchangeSwitch} checked={this.state.__calendar.Confirm} />
                </div>
            </div>
            <div className='divcalendarformelement' style={{width: "33%"}}>
                <div className='divcalendarlabel' style={{width: "35%"}}>
                    {General.getLabelByKey("Label_Anonymous", this.props.CurrentResource)}
                </div>
                <div>
                    {/* <input type='text' id='txtCalAnonymous' value={this.state.__calendar.Name} style={{width: 20}} />  */}
                    <Switch id='chkAnonymous' onChange={this._onchangeSwitch} checked={this.state.__calendar.Anonymous} />
                </div>                
            </div>
            <div className='divcalendarformelement' style={{width: "33%"}}>
                <div className='divcalendarlabel' style={{width: "35%"}}>
                    {General.getLabelByKey("Label_CalendarPublic", this.props.CurrentResource)}
                </div>
                <div>
                    <span>{this.state.__calendar.PublicUrl}</span>
                </div>                
            </div>
            <div id="configcalendarCommand">
                <button style={General.getElementStyle("btn-default",{borderRadius: 10, height: 30, width:150})} onClick={this._onPublicUrl}>
                    {General.getLabelByKey("Label_CalendarPublic", this.props.CurrentResource)}
                </button>
               
                <button style={General.getElementStyle("btn-default",{borderRadius: 10, height: 30, width:150})} onClick={() => this._onchangebool(!this.state.__calendar.Enabled, 'Enabled')}>
                    {this.state.__calendar.Enabled ?
                        General.getLabelByKey("Button_Unable", this.props.CurrentResource):
                        General.getLabelByKey("Button_Enable", this.props.CurrentResource)
                        
                    }
                </button>
                <button style={General.getElementStyle("btn-default",{borderRadius: 10, height: 30, width:150})} onClick={this._saveCalendar}>
                    {General.getLabelByKey("Button_Save", this.props.CurrentResource)}
                </button>
                <button style={General.getElementStyle("btn-default",{borderRadius: 10, height: 30, width:150})}>
                    {General.getLabelByKey("Button_Delete", this.props.CurrentResource)}
                </button>
                <button style={General.getElementStyle("btn-default",{borderRadius: 10, height: 30, width:150})} onClick={this._oncloseCalendar}>
                    {General.getLabelByKey("Button_Close", this.props.CurrentResource)}
                </button>
            </div>
            <div>
                
            </div>
        </div>
    }

}