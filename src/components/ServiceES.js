import React, {Component} from 'react';
import './styleServiceES.css';
import HeaderApp from './componentService/ServiceHeaderApp';
import NavApp from './componentService/ServiceNavApp';
import MainApp from './componentService/ServiceMainApp';
import AsideApp from './componentService/ServiceAsideApp';
import QuickAccessApp from './componentService/ServiceQuickAccessApp';

import ArrowApp from './componentService/ServiceArrowApp';

class ServiceES extends Component {

render() {

    return (
        <div className="body esServis">
            <HeaderApp/>
            <nav> <NavApp/></nav>
            <MainApp/>
            <AsideApp/>
            <QuickAccessApp/>
            <ArrowApp/>
        </div>
    );
}}


export default ServiceES;