import React, { Component } from 'react'
import FromCompanyData from "./FromCompany"
import FromClientInformation from "./FormClient"
import FromRepresentantData from "./FromRepresentant"
class FormApp extends Component {
    logoClient= (e) =>(
        <div class="boxClient logoClient"
        style={{ 
      backgroundImage: `url(${this.props.currentyClient.picture.large})`  }} >
        </div>
    )
    clientButtonsContainer = (e) =>(
        <div className="buttonContainerClient">
           <div className="buttonWrapper">
                <button ><i class="fas fa-warehouse"></i>Magazyn</button>
                <button ><i class="fas fa-tools"></i>Serwisy</button>
                <button ><i class="fas fa-dice-d6"></i>Maszyny</button>
            </div>
        </div>
        )
        
    render() { 
        const {customer, representative, company, location} = this.props.currentyClient;
        return(
    <aside className="currentlyViewClient" >
        <from class="wrapperGrid" >
            <this.logoClient/>
            <FromCompanyData company = {company} location={location}/>
            <FromRepresentantData representative = {representative}/>
            <FromClientInformation customer={customer}/>
            <input type="submit" value="Wyślij" onClick={this.handleSubmit} className="submitClientEdit " />
        </from>
        <this.clientButtonsContainer/>
        <a href="/#"  onClick={this.props.exit} className="exitClient"><i class="far fa-window-close"></i></a>
    </aside>) ;
    }
}
 
export default FormApp