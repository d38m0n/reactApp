
import React, {Component} from 'react';
class ServiceFooterApp extends Component { 


render () {
   
    return (     
        
        <footer  className={this.props.toggleActive}>
    
        <a href="/#"> <i className="fas fa-user "></i>Profil Użytkownika</a>
      
        <a href="/#"> <i className="fas fa-warehouse "></i>Magazyny</a>
        
        <a href="/#"><i className="fas fa-chart-line "></i>Statystki Pracy</a>
      
        <a href="/#"><i className="far fa-address-card "></i>Wizytówka</a>
     
        <a href="/#"><i className="fas fa-info-circle "></i>Pomoc Systemowa</a>
        </footer>
        )
    }
}
export default ServiceFooterApp;