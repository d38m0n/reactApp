import React, { Component } from 'react';
import TableBodyApp from './componentAside/ServiceAsideTableBody';
import TableHeadApp from './componentAside/ServiceAsideThead';
import AsideSearch from "./componentAside/ServiceAsideSearch";
import ClientViewAside from "./componentAside/ServiceAsideViewClient"
class AsideTable extends Component { 
state ={
    currentyClient:"",
};

ChangeViewToShowClient = (idClient) =>{
    const currentyClient = idClient;
    this.setState({
        currentyClient: currentyClient
    })
    
};

TableViewAside = () =>(
    <div className="tableSection">
        <TableHeadApp /> 
        <TableBodyApp chanegView={this.ChangeViewToShowClient}/>                                         
    </div>
);
NormalViewAside = () => (
    <aside>
        <AsideSearch/>  
        <this.TableViewAside/>
    </aside>
);

ExitViewClient=()=>(
    this.setState({
        currentyClient: ""
    }));
render(){
    return ( 
        this.state.currentyClient?
        <ClientViewAside 
        currentyClient={this.state.currentyClient}
        exit={this.ExitViewClient}/>
        : <this.NormalViewAside/>
    ); 
}
 
}
 
export default AsideTable;