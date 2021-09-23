import React, { Component } from 'react';
import Client from './ServiceAsideTableBodyClient';


class TableBody extends Component {
    state = {
        clients:[],
        isLoaded: false,
       }
       
       componentDidMount() {
          setTimeout(this.fetchData, 500 )
       }
       
       fetchData = () => {
           fetch("./dataService.json")
            .then(async response => {
               const data = await response.json();
               if (!response.ok){
                   throw Error (response.status);
               }
               this.setState({
                   clients: data,
                  isLoaded: true
               })
           })
           .catch(err => console.log(err.message));
           
       }

     ClientLock(id){
        console.log(id, "lock");
     }
  
     ClientDelete(id){
         console.log(id,"delete")
         this.fetchData();
         
     }

     
    render() {
       
        return(
        this.state.isLoaded ?
        <div className="tbl-content">

            <table cellPadding="0" cellSpacing="0">
                <tbody>
                {this.state.clients
                .filter(client => client.isActive)
                .map( client => (
                        <Client key={client.id.value} clientData={client} 
                        lock={this.ClientLock.bind(this,client.id.value)}
                        show={this.props.chanegView.bind(this,client)}
                        delete={this.ClientDelete.bind(this,client.id.value)}/>
                    )
                )} 
                </tbody>
            </table>   
        </div>: <p className="loadDateToTable">Wczytuje dane...</p>
        )
    }
}
export default TableBody;