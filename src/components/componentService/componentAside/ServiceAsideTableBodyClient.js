import React from 'react'
const Client = props => {
    return ( 
        <tr key={props.clientData.id.value}>
                        <td>{props.clientData.representative.first}</td>
                        <td>{props.clientData.project}</td>  
                        <td>{props.clientData.registered.date}</td>
                        <td>{props.clientData.type}</td>
                        <td> 
                            <a href="/#"onClick={props.lock} ><i className="fas fa-lock" ></i></a>
                            <a href="/#"onClick={props.show} ><i className="far fa-eye"></i></a>
                            <a href="/#"onClick={props.delete}><i className="far fa-trash-alt"></i></a>
                        </td>
    </tr>
     );
}
 
export default Client;