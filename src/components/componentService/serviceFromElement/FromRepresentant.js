import React, { Component } from 'react';
class FromDataRepresentative extends Component {
state = {
    repName: this.props.representative.first,
    repSurname: this.props.representative.surname,
    repTitle: this.props.representative.title,
    repEmail: this.props.representative.email,
    repPhone: this.props.representative.phone,

}

handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]:value
    })
}
    render() { 
        
        return  ( 

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
   );
    
}
}
 
export default FromDataRepresentative;