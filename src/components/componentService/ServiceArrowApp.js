import React, {Component} from 'react';
import FooterApp from './ServiceFooterApp';

class ServiceArrowApp extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    toggleClass(){
        console.log("ok");
        this.setState({
           active: !this.state.active,
        });
     }

    render() {
        return (  
        <> 
            <FooterApp toggleActive={this.state.active ? 'on': ''}/>  
            <div className={this.state.active ? 'arrows on': 'arrows' }>
                <i onClick={this.toggleClass.bind(this)} 
                     className="fas fa-arrow-alt-circle-up"></i>
            </div>
         </> 
        )
    }
   
}
 

export default ServiceArrowApp;