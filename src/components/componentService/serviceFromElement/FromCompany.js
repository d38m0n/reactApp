import React, { Component } from 'react';
class FromDataCompany extends Component {
    state = {
        brand: this.props.company.brand,
        companyID: this.props.company.companyID,
        phoneCompany: this.props.company.phoneCompany,
        emailCompany: this.props.company.emailCompany,
        state: this.props.location.state,
        city: this.props.location.city,
        street: this.props.location.street
    }

    handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    render() 
    {return (
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
    }
}
 
export default FromDataCompany;