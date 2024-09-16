import React, {Component} from 'react';
import General from '../script/general.js';
import apicalendar from '../script.api/api.calendar.js';
import ConfigCalendarComponent from './configcalendar.component';
import parse from 'html-react-parser'
import './../Styles/bsm.calendars.css';
import { Dialog } from '@headlessui/react';
import moment from 'moment';
import 'moment/locale/it';
import NotificationComponent from '../components/notification.component';


export default class ManageCalendarsComponent extends React.Component<any, any> {
    constructor (props: any){
        super(props); 
        this.state = {
            __calendars:[],
            __showDetail: false,
            __detailType: "none",
            __selectcalendar: {},
            __filter: '',
            __notification: false
        };

        

        moment.locale(String(this.props.language));
        console.log(moment.locale());
    }


    componentDidMount(): void {
        this.getCalendars();
    }

    getCalendars = () => {
        apicalendar.GetCalendars(null, false).then(result => {
            if (result !== undefined && result.length > 0){
                this.setState(
                    {
                        __calendars: result,
                        __showDetail: false,
                        __detailType: "none"                    
                    });
            }
        })
    }

    _calendarclick = (calendarID: string) => {
        var selectedcalendar = this.state.__calendars.filter((a: any) => {return a.ID === calendarID})[0];
        this.setState({
            __showDetail: true,
            __selectcalendar: selectedcalendar
        })
    }

    _calendarclose = () => {
        this.setState({
            __showDetail: false,
            __selectcalendar: {}
        })
    }

    _configcalendarSaved = (calendar: any) => {
        // console.log(calendar);
        // const tcalendars: any[] = this.state.__calendars.filter((cal: any) => {return cal.ID !== calendar.ID});
        // tcalendars.push(calendar);
        // this.setState({__calendars: tcalendars});
        this.getCalendars();
        this._showNotification({show: true, color: "green", message: "Calendario salvato", confirm: false});
    }

    _closeDetail = () => {}
    
    _onNewCalendar = () => {
        this.setState({
            __showDetail: true,
            __selectcalendar: {
                ID: "NEW"
            }
        })
    }

    _showNotification = (value: {}) => {
        this.setState({__notification: value})            
      }

    _onConfirmNotification = () => {
    }

    render() {

        const _onclick = () => {
            this.props.onGadgetClick("Home")
        }

         
        function getEnalbed (value: boolean)  {

            if (value){
                return <svg width="20px" height="20px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <mask id="mask_circle">
                        <circle cx="50" cy="50" r="50" fill="white"/>
                        <circle cx="50" cy="50" r="12" fill="#000000"/>
                        </mask>
                        <linearGradient x1="20" y1="60" x2="60" y2="40" id="Gradient" gradientUnits="userSpaceOnUse">
                        <stop style={{stopColor: '#0F650E;stop-opacity:1'}} offset="0" />
                        <stop style={{stopColor:'#399238;stop-opacity:1'}} offset="1" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" style={{fill:'#0F650E'}}/>
                    <circle cx="50" cy="50" r="43" style={{fill: '#12AC40'}}/>

                    </svg>
            }
            else {
                return <svg width="20px" height="20px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <mask id="mask_circle">
                        <circle cx="50" cy="50" r="50" fill="white"/>
                        <circle cx="50" cy="50" r="12" fill="#000000"/>
                        </mask>
                        <linearGradient x1="20" y1="60" x2="60" y2="40" id="Gradient" gradientUnits="userSpaceOnUse">
                        <stop style={{stopColor: '#0F650E;stop-opacity:1'}} offset="0" />
                        <stop style={{stopColor:'#399238;stop-opacity:1'}} offset="1" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" style={{fill:'#0F650E'}}/>
                    <circle cx="50" cy="50" r="43" style={{fill: '#A10D36'}}/>

                    </svg>
            }
        }
        

        const renderCalendars = () => {
            if (this.state.__calendars !== undefined && this.state.__calendars.length > 0){
                let allcalendars = this.state.__calendars;
                if (this.state.__filter !== undefined && this.state.__filter.length > 0){
                    allcalendars = this.state.__calendars.filter((cal: any) => {return cal.Name.toLowerCase().indexOf(this.state.__filter.toLowerCase()) > -1})
                }
                const ordercalendars = allcalendars.sort((a: any,b: any) => a.Name.localeCompare(b.Name));
                return <div style={{marginTop: 10}}>
                        {ordercalendars.map((calendar: any, index: number) =>{
                            return <a key={index} onClick={() => this._calendarclick(calendar.ID)}>
                                    <div  style={{display: "flex", height: 30, marginBottom: 5}} >
                                        
                                            <div style={General.getElementStyle("bsm_c_celltext",{width: "30%", float: "left", borderTopLeftRadius: 10, borderBottomLeftRadius: 10})}>
                                                <span style={{position: "relative", top: "20%"}}>{calendar.Name}</span>
                                            </div>
                                            <div style={General.getElementStyle("bsm_c_celltext",{width: "30%", float: "left"})}>
                                                <span style={{position: "relative", top: "20%"}}>{calendar.Description}</span>
                                            </div>
                                            <div style={General.getElementStyle("bsm_c_celltext",{width: "20%", float: "left"})}>
                                                <span style={{position: "relative", top: "20%"}}>{moment(calendar.DateEnd).format('L') }</span>
                                            </div>
                                            <div style={General.getElementStyle("bsm_c_celltext",{float: "none", flex: "auto", borderTopRightRadius:10, borderBottomRightRadius: 10})}>
                                                <span style={{position: "relative", top: "20%"}}>{getEnalbed(calendar.Enabled)}</span>
                                            </div>  
                                    </div>
                                    </a>
                        })}
                    </div>
            }
        }


        const renderDetail = () => {
            return <Dialog open={this.state.__showDetail} onClose={() => this._closeDetail}>
                        <Dialog.Panel>
                        <div style={General.getElementStyle("modal-content",
                            {bordeStyle: "solid", position: "absolute", borderRadius: 6, left: "15%", top: "20%", width: "70%", padding: 20, zIndex: 10})} >
                            <ConfigCalendarComponent 
                                calendar={this.state.__selectcalendar} 
                                CurrentResource={this.props.CurrentResource} 
                                calendarClose={this._calendarclose.bind(this)}
                                configcalendarSaved={this._configcalendarSaved.bind(this)}
                            />
                        </div>
                        </Dialog.Panel>
                    </Dialog>
        }

        return <div id='divmanagecalendars'>            
        <div style={General.getElementStyle("bsm_c_pagetitle")} className='divPageTitle'>
            {General.getLabelByKey("Admin_ManageCalendar_PageTitle", this.props.CurrentResource)}
        </div>
        <div style={{width: '100%'}}>
                <NotificationComponent 
                    notification={this.state.__notification} 
                    showNotification={this._showNotification.bind(this)} 
                    CurrentResource={this.props.CurrentResource}
                    onConfirm={this._onConfirmNotification.bind(this)}
                    />
        </div>
        <div className='divcalendarstable' style={{width: '80%'}}>
            <div style={{display: "flex"}} >                
                <div style={General.getElementStyle("bsm_c_columntitle",{width: "30%", float: "left", borderTopLeftRadius: 10, borderBottomLeftRadius: 10})}>{General.getLabelByKey("Admin_ManageCalendar_CalendarName", this.props.CurrentResource)}</div>
                <div style={General.getElementStyle("bsm_c_columntitle",{width: "30%", float: "left"})}>{General.getLabelByKey("Admin_ManageCalendar_CalendarDescription", this.props.CurrentResource)}</div>
                <div style={General.getElementStyle("bsm_c_columntitle",{width: "20%", float: "left"})}>{General.getLabelByKey("Admin_ManageCalendar_CalendarDueDate", this.props.CurrentResource)}</div>
                <div style={General.getElementStyle("bsm_c_columntitle",{float: "none", flex: "auto", borderTopRightRadius:10, borderBottomRightRadius: 10})}>{General.getLabelByKey("Admin_ManageCalendar_CalendarEnabled", this.props.CurrentResource)}</div>  
            </div>
            <div  style={{display: "flex", height: 30, marginBottom: 5}} >
                 <div style={{width: "30%", float: "left", borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
                    <input type='text' id='txtsearchName' style={{width: '90%', marginTop: 10}} value={this.state.__filter} onChange={e => this.setState({__filter: e.target.value})} />
                </div>
                <div style={{width: "30%", float: "left", borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
                    <button style={General.getElementStyle("btn-default",{borderRadius: 10, height: 30, width:250, marginTop: 5})} onClick={this._onNewCalendar}>
                        {General.getLabelByKey("Admin_NavigationCalendarNewCalendar", this.props.CurrentResource)}
                    </button>
                </div>
            </div>
            {renderCalendars()}
        </div>
            {renderDetail()}
    </div>
    }
}