
import React, {Component} from 'react';
import General from '../script/general.js';
import apipagesettings from '../script.api/api.pagesettings.js';
import parse from 'html-react-parser'
import './../Styles/bsm.gadgets.css';
import { Dialog } from '@headlessui/react';

const GadgetComponent  = (props: any) => {

    const getSummary = (gadget: any) => {
        if (props.pageSetting.pageEdit){
            return <div>
                <button onClick={() => props.addGadget(props.id)} style={{border: 0, background: 'unset'}}>
                {/* <svg width="60px" height="60px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" >
                    <path fill={General.getElementStyleProperty("ICON","ICON")} d="M26.6,12.9l-2.9-0.3c-0.2-0.7-0.5-1.4-0.8-2l1.8-2.3c0.2-0.2,0.1-0.5,0-0.7l-2.2-2.2c-0.2-0.2-0.5-0.2-0.7,0  
                    l-2.3,1.8c-0.6-0.4-1.3-0.6-2-0.8l-0.3-2.9C17,3.2,16.8,3,16.6,3h-3.1c-0.3,0-0.5,0.2-0.5,0.4l-0.3,2.9c-0.7,0.2-1.4,0.5-2,0.8  
                    L8.3,5.4c-0.2-0.2-0.5-0.1-0.7,0L5.4,7.6c-0.2,0.2-0.2,0.5,0,0.7l1.8,2.3c-0.4,0.6-0.6,1.3-0.8,2l-2.9,0.3C3.2,13,3,13.2,3,13.4v3.1  
                    c0,0.3,0.2,0.5,0.4,0.5l2.9,0.3c0.2,0.7,0.5,1.4,0.8,2l-1.8,2.3c-0.2,0.2-0.1,0.5,0,0.7l2.2,2.2c0.2,0.2,0.5,0.2,0.7,0l2.3-1.8  
                    c0.6,0.4,1.3,0.6,2,0.8l0.3,2.9c0,0.3,0.2,0.4,0.5,0.4h3.1c0.3,0,0.5-0.2,0.5-0.4l0.3-2.9c0.7-0.2,1.4-0.5,2-0.8l2.3,1.8  
                    c0.2,0.2,0.5,0.1,0.7,0l2.2-2.2c0.2-0.2,0.2-0.5,0-0.7l-1.8-2.3c0.4-0.6,0.6-1.3,0.8-2l2.9-0.3c0.3,0,0.4-0.2,0.4-0.5v-3.1  
                    C27,13.2,26.8,13,26.6,12.9z M15,19c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C19,17.2,17.2,19,15,19z"/>
                </svg> */}
                    {props.getCellNumber(props.id)}
                </button>
            </div>            
        }
        else{
            if (gadget.Summary.length > 0){
                return <div>
                        {gadget.Summary.map((summary: any, i: number) => {
                            return <div key={i} style={{fontSize: 12, textAlign: 'start'}}>
                                {parse(summary)}
                            </div>
                            })
                        }
                        </div>
            }
            else {
                switch (gadget.Gadget.GadgetType){
                    case 0:
                        return <div>
                            <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(0 -1028.4)">
                                <path d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z" fill="#bdc3c7"/>
                                <path d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z" transform="translate(0 1028.4)" fill="#ecf0f1"/>
                                <path d="m5 3c-1.1046 0-2 0.8954-2 2v3 1h18v-1-3c0-1.1046-0.895-2-2-2h-6-2-6z" transform="translate(0 1028.4)" fill="#e74c3c"/>
                                <path d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z" transform="translate(.5 1028.4)" fill="#c0392b"/>
                                <path d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z" transform="translate(12.5 1028.4)" fill="#c0392b"/>
                                <g fill="#bdc3c7">
                                <path d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/>
                                <path d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/>
                                <path d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/>
                                </g>
                                <path d="m24 12a12 12 0 1 1 -24 0 12 12 0 1 1 24 0z" transform="matrix(.42014 0 0 .42014 13.458 1041.8)" fill="#34495e"/>
                                <path d="m18.5 1041.8c-3.038 0-5.5 2.5-5.5 5.5h0.917c0-2.5 2.052-4.6 4.583-4.6s4.583 2.1 4.583 4.6h0.917c0-3-2.462-5.5-5.5-5.5z" fill="#2c3e50"/>
                                <path d="m18.958 1046.4v0.9h0.459 2.75c0.253 0 0.458-0.2 0.458-0.4 0-0.3-0.205-0.5-0.458-0.5h-2.75-0.459z" fill="#bdc3c7"/>
                                <path d="m18.5 1043.7c-0.253 0-0.458 0.2-0.458 0.4v1.8 0.5h0.916v-0.5-1.8c0-0.2-0.205-0.4-0.458-0.4z" fill="#bdc3c7"/>
                                <rect transform="rotate(-45)" height=".45833" width="3.2083" y="753.12" x="-730.83" fill="#c0392b"/>
                                <path d="m18.5 1045.9c-0.506 0-0.917 0.5-0.917 1s0.411 0.9 0.917 0.9 0.917-0.4 0.917-0.9-0.411-1-0.917-1zm0 0.5c0.253 0 0.458 0.2 0.458 0.5 0 0.2-0.205 0.4-0.458 0.4s-0.458-0.2-0.458-0.4c0-0.3 0.205-0.5 0.458-0.5z" fill="#bdc3c7"/>
                                <path d="m18.5 1041.4c-3.038 0-5.5 2.4-5.5 5.5 0 3 2.462 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-3.1-2.462-5.5-5.5-5.5zm0 0.9c2.531 0 4.583 2 4.583 4.6 0 2.5-2.052 4.5-4.583 4.5s-4.583-2-4.583-4.5c0-2.6 2.052-4.6 4.583-4.6z" fill="#95a5a6"/>
                                <path d="m13 12a1 1 0 1 1 -2 0 1 1 0 1 1 2 0z" transform="matrix(.45833 0 0 .45833 13 1041.4)" fill="#2c3e50"/>
                                <path d="m19.293 1046.4c0.078 0.1 0.129 0.3 0.129 0.5 0 0.1-0.051 0.3-0.129 0.4h0.129 0.372c0.052-0.1 0.086-0.3 0.086-0.4 0-0.2-0.034-0.4-0.086-0.5h-0.372-0.129z" fill="#95a5a6"/>
                                <path d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1zm12 0c-0.552 0-1 0.4477-1 1v3c0 0.5523 0.448 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.448-1-1-1z" transform="translate(0 1028.4)" fill="#95a5a6"/>
                                <path d="m6 1029.4c-0.5523 0-1 0.4-1 1v2h2v-2c0-0.6-0.4477-1-1-1zm12 0c-0.552 0-1 0.4-1 1v2h2v-2c0-0.6-0.448-1-1-1z" fill="#bdc3c7"/>
                            </g>
                            </svg>
                        </div>;
                    break;
                    case 2:
                        return <div>
                            <svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path style={{fill:'#6AB2CC'}} d="M445.725,45.335H151.589c-21.916,0-39.682,17.767-39.682,39.682v377.975
                                c0,21.915,17.767,39.682,39.682,39.682h294.136c21.916,0,39.682-17.767,39.682-39.682V85.017
                                C485.407,63.102,467.64,45.335,445.725,45.335z"/>
                            <path style={{fill:'#7DD2F0'}} d="M395.986,9.326H101.85c-21.916,0-39.682,17.767-39.682,39.682v377.975
                                c0,21.915,17.767,39.682,39.682,39.682h294.136c21.916,0,39.682-17.767,39.682-39.682V49.008
                                C435.668,27.093,417.901,9.326,395.986,9.326z"/>
                            <rect x="151.232" y="102.537" style={{fill:'#FFFFFF'}} width="195.375" height="109.638"/>
                            <g>
                                <path style={{fill:'#515262'}} d="M87.783,88.334H43.114c-9.123,0-16.52,7.395-16.52,16.52l0,0c0,9.123,7.396,16.52,16.52,16.52
                                    h44.671c9.123,0,16.52-7.396,16.52-16.52l0,0C104.304,95.73,96.907,88.334,87.783,88.334z"/>
                                <path style={{fill:'#515262'}} d="M87.783,177.095H43.114c-9.123,0-16.52,7.395-16.52,16.52l0,0c0,9.123,7.396,16.52,16.52,16.52
                                    h44.671c9.123,0,16.52-7.396,16.52-16.52l0,0C104.304,184.49,96.907,177.095,87.783,177.095z"/>
                                <path style={{fill:'#515262'}} d="M87.783,265.856H43.114c-9.123,0-16.52,7.395-16.52,16.52l0,0c0,9.123,7.396,16.52,16.52,16.52
                                    h44.671c9.123,0,16.52-7.396,16.52-16.52l0,0C104.304,273.251,96.907,265.856,87.783,265.856z"/>
                                <path style={{fill:'#515262'}} d="M87.783,354.617H43.114c-9.123,0-16.52,7.395-16.52,16.52l0,0c0,9.123,7.396,16.52,16.52,16.52
                                    h44.671c9.123,0,16.52-7.396,16.52-16.52l0,0C104.304,362.012,96.907,354.617,87.783,354.617z"/>
                            </g>
                            <path d="M141.902,102.536v109.635c0,5.152,4.176,9.326,9.326,9.326h195.379c5.15,0,9.326-4.174,9.326-9.326V102.536
                                c0-5.152-4.176-9.326-9.326-9.326H151.228C146.078,93.21,141.902,97.384,141.902,102.536z M160.554,111.862h176.727v90.983H160.554
                                V111.862z"/>
                            <path d="M297.693,129.289h-97.551c-5.15,0-9.326,4.174-9.326,9.326c0,5.152,4.176,9.326,9.326,9.326h97.551
                                c5.15,0,9.326-4.174,9.326-9.326C307.019,133.464,302.843,129.289,297.693,129.289z"/>
                            <path d="M297.693,166.764h-97.551c-5.15,0-9.326,4.174-9.326,9.326c0,5.152,4.176,9.326,9.326,9.326h97.551
                                c5.15,0,9.326-4.174,9.326-9.326C307.019,170.939,302.843,166.764,297.693,166.764z"/>
                            <path d="M485.407,394.215c-5.15,0-9.326,4.174-9.326,9.326v59.451c0,16.738-13.617,30.356-30.356,30.356H151.589
                                c-12.133,0-22.615-6.993-27.471-17.357h184.471c5.15,0,9.326-4.174,9.326-9.326c0-5.152-4.176-9.326-9.326-9.326H101.85
                                c-16.738,0-30.356-13.617-30.356-30.356v-30.001h16.29c14.252,0,25.847-11.594,25.847-25.846c0-14.251-11.594-25.846-25.847-25.846
                                h-16.29v-37.069h16.29c14.252,0,25.847-11.594,25.847-25.846c0-14.252-11.594-25.846-25.847-25.846h-16.29V219.46h16.29
                                c14.252,0,25.847-11.594,25.847-25.846s-11.594-25.846-25.847-25.846h-16.29V130.7h16.29c14.252,0,25.847-11.594,25.847-25.846
                                s-11.594-25.846-25.847-25.846h-16.29v-30c0-16.738,13.617-30.356,30.356-30.356h45.581c5.15,0,9.326-4.174,9.326-9.326
                                S152.581,0,147.431,0H101.85C74.826,0,52.842,21.986,52.842,49.008v30h-9.729c-14.252,0-25.846,11.594-25.846,25.846
                                S28.861,130.7,43.113,130.7h9.729v37.069h-9.729c-14.252,0-25.846,11.594-25.846,25.846s11.594,25.846,25.846,25.846h9.729v37.069
                                h-9.729c-14.252,0-25.846,11.594-25.846,25.846c0,14.252,11.594,25.846,25.846,25.846h9.729v37.069h-9.729
                                c-14.252,0-25.846,11.594-25.846,25.846c0,14.252,11.594,25.846,25.846,25.846h9.729v30.001c0,27.022,21.985,49.008,49.008,49.008
                                h2.477c5.69,21.024,24.704,36.009,47.262,36.009h294.136c27.023,0,49.008-21.986,49.008-49.008v-59.451
                                C494.733,398.391,490.557,394.215,485.407,394.215z M35.919,104.854c0-3.967,3.227-7.194,7.194-7.194h44.671
                                c3.911,0,7.194,3.284,7.194,7.194c0,3.967-3.227,7.194-7.194,7.194H43.113C39.146,112.047,35.919,108.822,35.919,104.854z
                                M35.919,193.615c0-3.967,3.227-7.194,7.194-7.194h44.671c3.967,0,7.194,3.227,7.194,7.194c0,3.967-3.227,7.194-7.194,7.194H43.113
                                C39.146,200.808,35.919,197.583,35.919,193.615z M35.919,282.375c0-3.967,3.227-7.194,7.194-7.194h44.671
                                c3.967,0,7.194,3.227,7.194,7.194c0,3.907-3.285,7.194-7.194,7.194H43.113C39.146,289.569,35.919,286.342,35.919,282.375z
                                M35.919,371.136c0-3.967,3.227-7.194,7.194-7.194h44.671c3.914,0,7.194,3.289,7.194,7.194c0,3.883-3.31,7.194-7.194,7.194H43.113
                                C39.146,378.33,35.919,375.103,35.919,371.136z"/>
                            <path d="M445.725,36.009h-2.494C437.518,15.277,418.508,0,395.986,0H184.735c-5.15,0-9.326,4.174-9.326,9.326
                                s4.176,9.326,9.326,9.326h211.251c15.78,0,28.78,12.103,30.219,27.512c0.001,0.007,0,0.015,0.001,0.022
                                c0.045,0.492,0.078,0.965,0.101,1.425c0.021,0.463,0.035,0.928,0.035,1.395v377.975c0,16.738-13.617,30.356-30.356,30.356h-51.507
                                c-5.15,0-9.326,4.174-9.326,9.326s4.176,9.326,9.326,9.326h51.507c27.023,0,49.008-21.986,49.008-49.008V54.661h0.731
                                c16.738,0,30.356,13.617,30.356,30.356v281.22c0,5.152,4.176,9.326,9.326,9.326s9.326-4.174,9.326-9.326V85.017
                                C494.733,57.995,472.748,36.009,445.725,36.009z"/>
                            </svg>
                        </div>;
                    break;
                    case 3:
                        return <div>
                            <svg width="60px" height="60px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={{fill:'#427794', stroke: '#2A424F'}} d="M 22,43 C 18,48 6.5,45 4.2,56 2,62 2,81 14,79 13,64 12,57 12,57 c 0,0 1,14 2,21 9,4 24,4 35,-1 0,-8 -1,-13 0,-18 0,-5 0,19 0,19 0,0 6,2 8,-5 3,-10 5,-24 -9,-28 -9,-1 -7,-2 -8,-2 -2,0 -18,0 -18,0 z"/>
                                <path style={{fill:'#C29B82', stroke: '#693311'}} d="m 23,38 c 0,0 1,3 -1,5 3,4 11,8 18,0 -1,-2 -1,-2 -1,-5 0,0 -16,0 -16,0 z"/>
                                <path style={{fill:'#CDA68E', stroke: '#693311'}} d="M 31,42 C 17,42 7.6,4.8 31,4.2 55,4.1 44,42 31,42 z"/>
                                <path style={{fill:'#553932', stroke: '#311710'}} d="M 17,26 C 14,16 14,3.2 31,2.4 44,3.1 49,15 44,26 44,21 45,19 43,16 39,15 33,16 28,11 27,15 15,13 17,26 z"/>
                                <path style={{fill:'#5F3E20', stroke: '#311710'}} d="m 45,65 c 5,-8 0,-25 3,-31 3,-10 7,-16 16,-16 10,0 16,8 20,17 1,2 0,6 2,11 1,4 -1,8 -1,10 0,5 -1,3 2,9 -5,13 -34,10 -42,0 z"/>
                                <path style={{fill:'#D8933B', stroke: '#2A424F'}} d="m 58,60 c -5,5 -18,3 -20,13 -2,6 -1,25 11,24 -1,-16 -3,-23 -3,-23 0,0 2,15 3,21 9,5 23,5 35,-1 0,-6 -1,-13 0,-18 1,-5 0,20 0,20 0,0 7,1 9,-6 2,-9 4,-22 -7,-25 -9,-3 -10,-5 -12,-5 -1,0 -16,0 -16,0 z"/>
                                <path style={{fill:'#DEB89F', stroke: '#693311'}} d="m 58,54 c 0,0 1,3 0,7 3,3 10,8 16,0 -1,-4 -1,-4 -1,-7 0,0 -15,0 -15,0 z"/>
                                <path style={{fill:'#DBBFA8', stroke: '#693311'}} d="M 66,59 C 52,59 43,21 66,20 86,21 79,59 66,59 z"/>
                                <path style={{fill:'#5F3E20'}} d="m 63,27 c -3,5 -7,8 -12,9 -4,1 2,-17 13,-17 5,0 13,3 15,15 -6,1 -14,-5 -16,-7"/>
                            </svg>
                        </div>;
                    break;
                    case 4:
                        return <div>
                            <svg height="60px" width="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path style={{fill: '#2860CC'}} d="M496.106,324.207l-52.614-43.331c1.158-8.459,1.725-16.685,1.725-24.877s-0.568-16.417-1.725-24.877
                                    l52.614-43.331c6.311-5.198,7.936-14.169,3.851-21.237l-44.522-77.112c-4.074-7.079-12.666-10.162-20.313-7.279l-63.944,23.953
                                    c-13.156-10.129-27.548-18.432-42.963-24.799l-11.231-67.361C315.648,5.899,308.68,0,300.522,0h-89.043
                                    c-8.159,0-15.126,5.899-16.462,13.958l-11.231,67.361c-15.416,6.367-29.807,14.67-42.963,24.799L76.878,82.165
                                    c-7.624-2.894-16.228,0.2-20.313,7.279l-44.522,77.112c-4.085,7.068-2.46,16.039,3.851,21.237l52.614,43.331
                                    c-1.158,8.459-1.725,16.685-1.725,24.877s0.568,16.417,1.725,24.877l-52.614,43.331c-6.311,5.198-7.936,14.169-3.851,21.237
                                    l44.522,77.112c4.085,7.079,12.7,10.184,20.313,7.279l63.944-23.953c13.156,10.129,27.548,18.432,42.963,24.799l11.231,67.361
                                    c1.332,8.061,8.323,13.958,16.462,13.958h89.043c8.153,0,15.122-5.894,16.462-13.958l11.231-67.361
                                    c15.416-6.367,29.807-14.67,42.964-24.799l63.944,23.953c7.635,2.894,16.228-0.2,20.313-7.279l44.522-77.112
                                    C504.042,338.376,502.417,329.405,496.106,324.207z"/>
                                <path style={{fill: '#2860CC'}} d="M499.957,345.444l-44.522,77.112c-4.085,7.079-12.678,10.173-20.313,7.279l-63.944-23.953
                                    c-13.156,10.129-27.548,18.432-42.963,24.799l-11.231,67.361c-1.34,8.064-8.309,13.958-16.462,13.958h-43.82V0h43.82
                                    c8.159,0,15.126,5.899,16.462,13.958l11.231,67.361c15.416,6.367,29.807,14.67,42.964,24.799l63.944-23.953
                                    c7.647-2.883,16.239,0.2,20.313,7.279l44.522,77.112c4.085,7.068,2.46,16.039-3.851,21.237l-52.614,43.331
                                    c1.158,8.459,1.725,16.685,1.725,24.877s-0.568,16.417-1.725,24.877l52.614,43.331C502.417,329.405,504.042,338.376,499.957,345.444
                                    z"/>
                                <path style={{fill: '#FFAA00'}} d="M312.32,322.783v184.331c-3.039,3.039-7.235,4.886-11.798,4.886h-89.043
                                    c-3.929,0-7.58-1.369-10.463-3.695V322.783H312.32z"/>
                                <path style={{fill: '#F28D00'}} d="M312.32,322.783v184.331c-3.039,3.039-7.235,4.886-11.798,4.886H256.69V322.783H312.32z"/>
                                <path style={{fill: '#FFD500'}} d="M312.32,147.111v75.498L256.668,256l-55.652-33.391v-75.498
                                    c-40.897,20.836-66.781,62.392-66.783,108.886c-0.001,69.725,56.8,122.405,122.371,122.438
                                    c67.539,0.035,122.498-54.903,122.498-122.435C379.103,209.504,353.218,167.947,312.32,147.111z"/>
                                <path style={{fill: '#FFAA00'}} d="M379.103,256c0-46.496-25.886-88.053-66.783-108.889v75.498L256.668,256v122.431
                                    C324.181,378.43,379.103,323.511,379.103,256z"/>
                            </svg>
                        </div>;
                    break;
                    case 5:
                        return <div>
                            <svg height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                            <polygon style={{fill: '#AFB6BB'}} points="477.691,192.66 477.691,382.68 451.299,382.68 60.701,382.68 34.309,382.68 34.309,192.66 
                                60.701,192.66 451.299,192.66 "/>
                            <polygon style={{fill: '#0186AF'}} points="450.982,81.814 345.732,81.814 345.732,7.918 "/>
                            <g>
                                <rect x="60.701" y="382.68" style={{fill:'#00ABD5'}} width="390.598" height="121.402"/>
                                <polygon style={{fill:'#00ABD5'}} points="451.299,82.026 451.299,192.66 60.701,192.66 60.701,7.918 345.732,7.918 345.732,81.814 
                                    450.982,81.814 	"/>
                            </g>
                            <g>
                                <rect x="60.701" y="382.68" style={{fill:'#00A2D4'}} width="195.299" height="121.402"/>
                                <rect x="60.701" y="7.918" style={{fill:'#00A2D4'}} width="195.299" height="184.742"/>
                            </g>
                            <polygon style={{fill:'#A0A7AB'}} points="477.691,192.66 451.299,192.66 60.701,192.66 34.309,192.66 34.309,292.948 477.691,292.948 
                                "/>
                            <g>
                                <rect x="113.485" y="432.825" style={{fill:'#FFFFFF'}} width="285.031" height="15.835"/>
                                <rect x="435.464" y="216.412" style={{fill:'#FFFFFF'}} width="21.113" height="15.835"/>
                                <rect x="435.464" y="343.093" style={{fill:'#FFFFFF'}} width="21.113" height="15.835"/>
                                <rect x="55.423" y="343.093" style={{fill:'#FFFFFF'}} width="21.113" height="15.835"/>
                                <rect x="55.423" y="216.412" style={{fill:'#FFFFFF'}} width="21.113" height="15.835"/>
                            </g>
                            <path d="M485.608,184.742h-26.392V77.791L348.234,0H52.784v184.742H26.392v205.856h26.392V512h406.433V390.598h26.392V184.742z
                                M353.65,23.151l72.277,50.746H353.65V23.151z M68.619,15.835h269.196v73.897h105.567v95.01H68.619V15.835z M443.381,496.165H68.619
                                V390.598h374.763V496.165z M469.773,374.763H42.227V200.577h427.546V374.763z"/>
                            <path d="M366.845,332.536h-21.113c-10.186,0-18.474-8.288-18.474-18.474h-15.835c0,18.919,15.392,34.309,34.309,34.309h21.113
                                c18.918,0,34.309-15.391,34.309-34.309c0-18.919-15.392-34.309-34.309-34.309h-21.113c-10.186,0-18.474-8.288-18.474-18.474
                                s8.288-18.474,18.474-18.474h21.113c10.186,0,18.474,8.288,18.474,18.474h15.835c0-18.919-15.392-34.309-34.309-34.309h-21.113
                                c-18.918,0-34.309,15.391-34.309,34.309c0,18.919,15.392,34.309,34.309,34.309h21.113c10.186,0,18.474,8.288,18.474,18.474
                                C385.32,324.248,377.032,332.536,366.845,332.536z"/>
                            <path d="M261.278,332.536h-21.113c-10.186,0-18.474-8.288-18.474-18.474h-15.835c0,18.919,15.392,34.309,34.309,34.309h21.113
                                c18.918,0,34.309-15.391,34.309-34.309c0-18.919-15.392-34.309-34.309-34.309h-21.113c-10.186,0-18.474-8.288-18.474-18.474
                                s8.288-18.474,18.474-18.474h21.113c10.186,0,18.474,8.288,18.474,18.474h15.835c0-18.919-15.392-34.309-34.309-34.309h-21.113
                                c-18.918,0-34.309,15.391-34.309,34.309c0,18.919,15.392,34.309,34.309,34.309h21.113c10.186,0,18.474,8.288,18.474,18.474
                                C279.753,324.248,271.465,332.536,261.278,332.536z"/>
                            <path d="M142.515,353.65c26.194,0,47.505-21.31,47.505-47.505h-15.835c0,17.463-14.207,31.67-31.67,31.67s-31.67-14.207-31.67-31.67
                                v-31.67c0-17.463,14.207-31.67,31.67-31.67s31.67,14.207,31.67,31.67h15.835c0-26.195-21.311-47.505-47.505-47.505
                                s-47.505,21.31-47.505,47.505v31.67C95.01,332.34,116.321,353.65,142.515,353.65z"/>
                            <g>
                                <polygon style={{fill:'#FFFFFF'}} points="126.361,145.476 86.453,105.567 126.361,65.658 137.557,76.857 108.846,105.567 
                                    137.557,134.277 	"/>
                                <rect x="145.155" y="100.289" style={{fill:'#FFFFFF'}} width="17.155" height="15.835"/>
                                <rect x="170.881" y="100.289" style={{fill:'#FFFFFF'}} width="17.155" height="15.835"/>
                                <rect x="196.619" y="100.289" style={{fill:'#FFFFFF'}} width="17.155" height="15.835"/>
                                <polygon style={{fill:'#FFFFFF'}} points="231.908,145.476 220.711,134.277 249.422,105.567 220.711,76.857 231.908,65.658 
                                    271.815,105.567 	"/>
                            </g>
                            </svg>
                        </div>;
                    break;
                    case 99:
                        return <div>
                            <svg height="60px" width="60px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M855.04 815.36c0 17.92-16.64 32-38.4 32H226.56c-20.48 0-38.4-14.08-38.4-32V371.2c0-17.92 16.64-32 38.4-32h590.08c20.48 0 
                                38.4 14.08 38.4 32v444.16z" fill="#E1E0A6" /><path d="M816.64 860.16H226.56c-28.16 0-51.2-20.48-51.2-44.8V371.2c0-24.32 23.04-44.8 
                                51.2-44.8h590.08c28.16 0 51.2 20.48 51.2 44.8v444.16c0 24.32-23.04 44.8-51.2 44.8zM226.56 352c-14.08 0-25.6 8.96-25.6 19.2v444.16c0 
                                10.24 11.52 19.2 25.6 19.2h590.08c14.08 0 25.6-8.96 25.6-19.2V371.2c0-10.24-11.52-19.2-25.6-19.2H226.56z" fill="#231C1C" />
                                <path d="M917.76 449.28c0 21.76-14.08 39.68-32 39.68L520.96 328.96 156.16 488.96c-17.92 0-32-17.92-32-39.68v-56.32c0-21.76 
                                14.08-39.68 32-39.68l364.8-184.32 364.8 184.32c17.92 0 32 17.92 32 39.68v56.32z" fill="#6FB0BE" />
                                <path d="M885.76 501.76c-1.28 0-3.84 0-5.12-1.28L520.96 343.04 161.28 500.48c-1.28 1.28-3.84 1.28-5.12 1.28-24.32 
                                0-44.8-23.04-44.8-52.48v-56.32c0-28.16 17.92-51.2 40.96-52.48l362.24-183.04c3.84-1.28 7.68-1.28 11.52 0l362.24 
                                183.04c23.04 2.56 40.96 24.32 40.96 52.48v56.32c1.28 28.16-17.92 52.48-43.52 52.48zM520.96 183.04l-358.4 181.76c-1.28 1.28-3.84 
                                1.28-5.12 1.28-10.24 0-19.2 12.8-19.2 26.88v56.32c0 14.08 7.68 25.6 16.64 26.88l362.24-158.72c3.84-1.28 6.4-1.28 10.24 0l362.24 
                                158.72c8.96-1.28 16.64-12.8 16.64-26.88v-56.32c0-15.36-8.96-26.88-19.2-26.88-2.56 0-3.84 0-6.4-1.28L520.96 183.04z" fill="#231C1C" />
                                <path d="M623.36 848.64H445.44V634.88c0-17.92 15.36-30.72 33.28-30.72h111.36c17.92 0 33.28 12.8 33.28 30.72v213.76z" fill="#FDE8C2" />
                                <path d="M623.36 861.44H445.44c-7.68 0-12.8-5.12-12.8-12.8V634.88c0-24.32 19.2-43.52 46.08-43.52h111.36c25.6 0 46.08 17.92 
                                46.08 43.52v212.48c0 7.68-5.12 14.08-12.8 14.08z m-165.12-25.6h152.32V634.88c0-11.52-10.24-17.92-20.48-17.92h-111.36c-10.24 0-20.48 
                                5.12-20.48 17.92v200.96z" fill="#231C1C" />
                            </svg>
                        </div>;
                    break;
                }
            }
        }

       
        
    }





function _onGadgetClick () {
    props.onGadgetClick(props.gadget[0].Gadget.MobileComponent)
}


const getGadget = () => {
    if (props.gadget.length > 0){
        let title = props.gadget[0].Gadget.Title;
        if (props.gadget[0].Gadget.ResourceLabel !== ""){
            title = General.getLabelByKey(props.gadget[0].Gadget.ResourceLabel, props.CurrentResource);
        }
        
        if (props.pageSetting.pageEdit){
            return  <div> 
            <div className='divgadgetheader'>
                <div className='divgadgettitle'>
                    {title}
                </div>
            </div>
            <div className='divgadgetsummary'>
                {getSummary(props.gadget[0])}
            </div>   
            </div>
        }
        else {
            return  <div>   
                        <a  onClick={_onGadgetClick.bind(this)}>
                        <div className='divgadgetheader'>
                            <div className='divgadgettitle'>
                                {title}
                            </div>
                        </div>
                        <div className='divgadgetsummary'>
                            {getSummary(props.gadget[0])}
                        </div>                        
                        </a>                        
                    </div>
        }
            
       
        
    }
    else {
        if (props.pageSetting.pageEdit){
            return <div>
                        <div className='divgadgetheader'>
                            <div className='divgadgettitle'>
                                
                            </div>
                        </div>  
                        <div className='divgadgetsummary'>
                            {getSummary(props.id)}
                        </div>
                        
                </div>}
        else{
            return <div></div>}
    }
}

  

    return <div>
            {getGadget()}
        </div>


}



export default class GadgetsComponentV2 extends React.Component<any, any> {
// const GadgetsComponentV2 = (props: any) => {

constructor (props: any){
    super(props); 
    this.state = {
        gadgets: props.gadgets,
        pageEdit: props.pageEdit,
        pageSetting: props.pageSetting,
        __showAvailableGadget: false,
        availableGadgets: [],
        currentPlaceHolder: 0
    };
}

componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
    if (JSON.stringify(this.state.gadgets) !== JSON.stringify(this.props.gadgets) && !this.state.pageSetting.toSave){
        this.setState({gadgets: this.props.gadgets})
    }
}




  _addGadget = (id: number) => {
        apipagesettings.GetAvailableGadgets(null).then(result => {
            if (result !== undefined && result.length > 0){
                this.setState(
                    {availableGadgets: result,
                    __showAvailableGadget: true,
                    currentPlaceHolder: id});
            }
        })
    }

    _showAvailableGadgetModal = (value: boolean) => {
        this.setState({__showAvailableGadget: value});
    }

    _setGadget = (gadget: any) => {
        let resGadgets = this.state.gadgets.filter((a: any) => {return a.Gadget.PlaceHolder !== this.state.currentPlaceHolder});
        gadget.Gadget["PlaceHolder"] = this.state.currentPlaceHolder;
        resGadgets.push(gadget);
        this.setState({gadgets: resGadgets});
        this.props.editPage(resGadgets, "HOME");
    }

    _unsetGadget = () => {
        let resGadgets = this.state.gadgets.filter((a: any) => {return a.Gadget.PlaceHolder !== this.state.currentPlaceHolder});
        this.setState({
            gadgets: resGadgets,
            pageSetting: {pageEdit: this.state.pageSetting.pageEdit, toSave: true, page: this.state.pageSetting.page, contents: this.state.pageSetting.contents}
        });
        this.props.editPage(resGadgets, "HOME");
    }

    showAvailableGadgets = () => {
        return this.state.availableGadgets.map((gadget: any, key: number) => {
            console.log("showAvailableGadgets");
            let title = gadget.Gadget.Title;
            if (gadget.Gadget.ResourceLabel !== ""){
                title = General.getLabelByKey(gadget.Gadget.ResourceLabel, this.props.CurrentResource);
            }
            let selected = this.state.gadgets.filter((a: any) =>{return a.Gadget.PlaceHolder === this.state.currentPlaceHolder && a.Gadget.ID === gadget.Gadget.ID})
            if (selected.length > 0){
                return <div key={"gtitle" + key}>
                    <button onClick={() => this._unsetGadget()} style={{border: 0, background: 'unset', color: General.getElementStyleProperty("modal-content","color")}}>
                        <b>{title}</b>
                    </button>
                    </div>
            }
            else {
                return <div key={"gtitle" + key}>
                    <button onClick={() => this._setGadget(gadget)} style={{border: 0, background: 'unset', color: General.getElementStyleProperty("modal-content","color")}}>
                    {title}
                    </button>
                </div>
            }
            
        })
    }

    getCellNumber = (id: number) => {
        let path = "";
        switch (id){
            case 0: path="M12 20C14.7614 20 17 17.7614 17 15V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V15C7 17.7614 9.23858 20 12 20Z"; break;
            case 1: path="M12 20V4L9 7"; break;
            case 2: path="M8 8C8 6.97631 8.39052 5.95262 9.17157 5.17157C10.7337 3.60947 13.2663 3.60947 14.8284 5.17157C16.3905 6.73366 16.3905 9.26632 14.8284 10.8284L9.17157 16.4853C8.42143 17.2354 8 18.2528 8 19.3137L8 20L16 20"; break;
            case 3: path="M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10L16 4H8"; break;
            case 4: path="M10 4L8.47845 11.6078C8.23093 12.8453 9.17752 14 10.4396 14H16M16 14V8M16 14V20"; break;
            case 5: path="M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10C9.87439 10 8.83566 10.3719 8 10.9996L9 4H16";break;
            case 6: path="M13 4L7.77313 12.3279M17 15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15C7 12.2386 9.23858 10 12 10C14.7614 10 17 12.2386 17 15Z"; break;
            case 7: path="M8 4H16L10 20"; break;
            

        }
        if (id === 8){
            return <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_429_10994)">
            <circle cx="12" cy="15" r="5" stroke={General.getElementStyleProperty("ICON","ICON")} strokeWidth="2.5" strokeLinejoin="round"/>            
            <circle cx="12" cy="7" r="3" stroke={General.getElementStyleProperty("ICON","ICON")} strokeWidth="2.5" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_429_10994">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        }
        else {
            return <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_429_11154)">
            <path d={path}
            stroke={General.getElementStyleProperty("ICON","ICON")} 
            strokeWidth="2.5" 
            strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_429_11154">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        }
    }

    render (){

        const getGadget = (id: number) => {
            
            let gadget = [];
            if (this.state.gadgets !== undefined){
                const gadgets  = this.state.gadgets;
                gadget = gadgets.filter(function(a: any){return a.Gadget.PlaceHolder === id;})
               
                return <GadgetComponent 
                    gadget={gadget} 
                    CurrentResource={this.props.CurrentResource} 
                    pageEdit={this.props.pageEdit} 
                    pageSetting={this.props.pageSetting}
                    id={id} 
                    showAvailableGadget={this._showAvailableGadgetModal.bind(this)}
                    addGadget={this._addGadget.bind(this)}
                    getCellNumber={this.getCellNumber.bind(this)}
                    onGadgetClick={this.props.onGadgetClick}/>
                
                
            }
            //return undefined;
        }

        const selectCell =  (id: number) => {

            if (this.state.currentPlaceHolder === id){
                return General.getElementStyleProperty("modal-content","color");
            }
            else {
                return "unset"
            }
            
        }

       

        return <div>
        <div className='divgadgets'>
            <div className='divgadget' style={General.getElementStyle("bsm_c_celltext")}>{getGadget(0)}</div>
            <div className='divgadget' style={General.getElementStyle("bsm_c_celltext")}>{getGadget(1)}</div>
            <div className='divgadget'style={General.getElementStyle("bsm_c_celltext")}>{getGadget(2)}</div>            
        </div>
        <div className='divgadgets'>
            <div className='divgadget' style={General.getElementStyle("bsm_c_celltext")}>{getGadget(3)}</div>
            <div className='divgadget' style={General.getElementStyle("bsm_c_celltext")}>{getGadget(4)}</div>
            <div className='divgadget'style={General.getElementStyle("bsm_c_celltext")}>{getGadget(5)}</div>            
        </div>
        <div className='divgadgets'>
            <div className='divgadget' style={General.getElementStyle("bsm_c_celltext")}>{getGadget(6)}</div>
            <div className='divgadget' style={General.getElementStyle("bsm_c_celltext")}>{getGadget(7)}</div>
            <div className='divgadget'style={General.getElementStyle("bsm_c_celltext")}>{getGadget(8)}</div>            
        </div>
        <Dialog open={this.state.__showAvailableGadget} onClose={() => this.setState({__showAvailableGadget: false})}>
            <Dialog.Panel>
                <div className='divAvalableGadget' style={General.getElementStyle("modal-content")}>
                    <div style={{fontSize: "1.5em"}}>
                        {General.getLabelByKey("PopupTitle_Gadget", this.props.CurrentResource)}
                    </div>
                    <div>
                        <div style={{float: 'left', minWidth: '30%'}}>
                            {this.showAvailableGadgets()}
                        </div>
                        <div style={{float: 'right', minWidth: '30%'}}>
                            <div style={{display: 'table', width: '100%'}}>
                                <div className='divGadgetTableRow'>
                                    <div className='divGadgetTableCell' id='gtable0' style={{backgroundColor: selectCell(0)}}>
                                        <button onClick={() => this._addGadget(0)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(0)}
                                        </button> 
                                    </div>
                                    <div className='divGadgetTableCell' id='gtable1' style={{backgroundColor: selectCell(1)}}>
                                        <button onClick={() => this._addGadget(1)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(1)}
                                        </button> 
                                    </div>
                                    <div className='divGadgetTableCell' id='gtable2' style={{backgroundColor: selectCell(2)}}>
                                        <button onClick={() => this._addGadget(2)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(2)}
                                        </button> 
                                    </div>
                                </div>
                                <div className='divGadgetTableRow'>
                                    <div className='divGadgetTableCell' id='gtable3' style={{backgroundColor: selectCell(3)}}>
                                        <button onClick={() => this._addGadget(3)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(3)}
                                        </button> 
                                    </div>
                                    <div className='divGadgetTableCell' id='gtable4' style={{backgroundColor: selectCell(4)}}>
                                        <button onClick={() => this._addGadget(4)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(4)}
                                        </button> 
                                    </div>
                                    <div className='divGadgetTableCell' id='gtable5' style={{backgroundColor: selectCell(5)}}>
                                        <button onClick={() => this._addGadget(5)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(5)}
                                        </button>  
                                    </div>
                                </div>
                                <div className='divGadgetTableRow'>
                                    <div className='divGadgetTableCell' id='gtable6' style={{backgroundColor: selectCell(6)}}>
                                        <button onClick={() => this._addGadget(6)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(6)}
                                        </button> 
                                    </div>
                                    <div className='divGadgetTableCell' id='gtable7' style={{backgroundColor: selectCell(7)}}>
                                        <button onClick={() => this._addGadget(7)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(7)}
                                        </button>  
                                    </div>
                                    <div className='divGadgetTableCell' id='gtable8' style={{backgroundColor: selectCell(8)}}>
                                        <button onClick={() => this._addGadget(8)} style={{border: 0, background: 'unset', width: "95%", height: "95%"}}>
                                            {this.getCellNumber(8)}
                                        </button>  
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                   
                </div>
            </Dialog.Panel>
        </Dialog>
    </div>
    }
}