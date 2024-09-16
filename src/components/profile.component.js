import React, {Component, useEffect} from 'react';
import './../Styles/bsm.headercommand.css';
import $ from 'jquery'
import General from './../script/general.js'

const ProfileComponent = (props) =>{

    const _resetProfile = () => {
        localStorage.setItem("currentuser", "undefined");
          global.logged = false;
          global.styles = undefined;
          global.gadgets = undefined;
          console.log(global.style);
    }

    return(
        <div>
            <button onClick={_resetProfile()}>
                reset profile
            </button>
        </div>
    )
}

export default ProfileComponent;