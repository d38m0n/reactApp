import React, { Component } from 'react';
class FromDataClient extends Component {
    state = {
        project: this.props.customer.project,
        data: this.props.customer.date,
        type: this.props.customer.type,
        nat: this.props.customer.nat,
        username: this.props.customer.username,
        dsc: this.props.customer.description
    }

    handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    render() { 

        return  <div class="boxClient informationClient">
        <p>Informacje:</p>
          <label for="project">Projekt:</label>
          <input type="text" id="project" name="project" value={this.state.project} onChange={this.handleChange}/>
          <label for="dateRegistered">Rejestracja:</label>
          <input type="text" id="dateRegistered" name="dateRegistered" value={this.state.data} onChange={this.handleChange} />
          <label for="type">Rodzaj:</label>
          <input type="text" id="type" name="type" value={this.state.type} onChange={this.handleChange}/>
          <label for="national">Kraj</label>
          <input type="text" id="national" name="nat" value={this.state.nat} onChange={this.handleChange}/>
          <label for="username">Login</label>
          <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
          <label for="description">Opis:</label>
          <textarea type="text" id="description" name="dsc" value={this.state.dsc} onChange={this.handleChange}/>
     </div>
    }
}
 
export default FromDataClient;