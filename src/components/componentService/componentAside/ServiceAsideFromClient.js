import React, { Component } from 'react';
class FormApp extends Component {

state = {
    project: this.props.currentyClient.project,
    dateRegistered: this.props.currentyClient.registered.date,
    type: this.props.currentyClient.type,
    national: this.props.currentyClient.nat,
    login: this.props.currentyClient.login.username,
    description: this.props.currentyClient.description,
    repName: this.props.currentyClient.representative.first,
    repSurname: this.props.currentyClient.representative.surname,
    repTitle: this.props.currentyClient.representative.title,
    repEmail: this.props.currentyClient.representative.email,
    repPhone: this.props.currentyClient.representative.phone,
    brand: this.props.currentyClient.company.brand,
    companyID: this.props.currentyClient.company.companyID,
    phoneCompany: this.props.currentyClient.company.phoneCompany,
    emailCompany: this.props.currentyClient.company.emailCompany,
    state: this.props.currentyClient.location.state,
    city: this.props.currentyClient.location.city,
    street:this.props.currentyClient.location.street  
    
}
         
handleChange = (e) =>{
    console.log(this.state.repSurname)
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]:value
    })
}
logoClient= (e) =>(
    <div class="boxClient logoClient"
    style={{ 
  backgroundImage: `url(${this.props.currentyClient.picture.large})`  }} >
    </div>
)
informationClient= (e) =>(
    
    <div class="boxClient informationClient">
     <p>Informacje:</p>
       <label for="project">Projekt:</label>
       <input type="text" id="project" name="project" value={this.state.project} onChange={this.handleChange}/>
       <label for="dateRegistered">Rejestracja:</label>
       <input type="text" id="dateRegistered" name="dateRegistered" value={this.state.dateRegistered} onChange={this.handleChange} />
       <label for="type">Rodzaj:</label>
       <input type="text" id="type" name="type" value={this.state.type} onChange={this.handleChange}/>
       <label for="national">Kraj</label>
       <input type="text" id="national" name="national" value={this.state.national} onChange={this.handleChange}/>
       <label for="login">Login</label>
       <input type="text" id="login" name="login" value={this.state.login} onChange={this.handleChange}/>
       <label for="description">Opis:</label>
       <textarea type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}/>
  </div>
)
basicDataRepresentative = (e) =>(
<div class="boxClient basicDataRepresentative">
     <p>Reprezentacja:</p>
     <label for="repName">Imię:</label>
     <input type="text" id="repName" name="repName" value={this.state.repName} onChange={this.handleChange}/>
     <label for="repSurname">Nazwisko:</label>
     <input type="text" id="repSurname" name="repSurname" value={this.state.repSurname} onChange={this.handleChange}/>
     <label for="repTitle">Stanowisko:</label>
     <input type="text" id="repTitle" name="repTitle" value={this.state.repTitle} onChange={this.handleChange}/>
     <label for="repEmail">Email:</label>
     <input type="text" id="repEmail" name="repEmail" value={this.state.repEmail} onChange={this.handleChange}/>
     <label for="repPhone">Telefon:</label>
     <input type="text" id="repPhone" name="repPhone" value={this.state.repPhone} onChange={this.handleChange}/>   
</div>  
)
basicDataCompany= (e) =>(
<div class="boxClient basicDataCompany">
    <p>Dane Firmy:</p>
    <label for="brand">Nazwa:</label>
    <input type="text" id="brand" name="brand" value={this.state.brand} onChange={this.handleChange}/>
    <label for="companyID">NIP:</label>
    <input type="text" id="companyID" name="companyID" value={this.state.companyID} onChange={this.handleChange}/>
    <label for="phoneCompany">Telefon:</label>
    <input type="text" id="phoneCompany" name="phoneCompany" value={this.state.phoneCompany} onChange={this.handleChange}/>
    <label for="emailCompany">E-mail:</label>
    <input type="text" id="emailCompany" name="emailCompany" value={this.state.emailCompany} onChange={this.handleChange}/>
    <label for="state">Województwo:</label>
    <input type="text" id="state" name="state" value={this.state.state} onChange={this.handleChange}/>
    <label for="city">Miasto:</label>
    <input type="text" id="city" name="city" value={this.state.city} onChange={this.handleChange}/>
    <label for="street">Ulica:</label>
    <input type="text" id="street" name="street" value={this.state.street} onChange={this.handleChange}/>
    
</div>
    )
    handleSubmit(event) {
        alert("Zapisano zmiany");
        event.preventDefault();
      }  
clientFrom= (e) => (
    <from class="wrapperGrid" >
       <this.logoClient/>
       <this.informationClient/>
       <this.basicDataRepresentative/>
       <this.basicDataCompany/>                                   
       
        <input type="submit" value="Wyślij" onClick={this.handleSubmit} className="submitClientEdit " />
    </from>)

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
    return (
    <aside className="currentlyViewClient" >
        <this.clientFrom/>
        <this.clientButtonsContainer/>
        <a href="/#"  onClick={this.props.exit} className="exitClient"><i class="far fa-window-close"></i></a>
    </aside> );
}
   
}
export default FormApp;