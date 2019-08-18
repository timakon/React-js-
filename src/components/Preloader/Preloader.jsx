import './Preloader.css';
import React, {PureComponent} from 'react';


export default class Loading extends PureComponent{
    render(){
        return(
            <div className="pr">
                <div className="preloader">
                    <img className="logo-preloader"
                         src="https://raw.githubusercontent.com/BorisTab/landing/master/images/logo.png"/>
                </div>
            </div>
        );
    }
}