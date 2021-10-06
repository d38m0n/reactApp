import React from 'react'
const Client = props => {
    return ( 
        <tr key={props.clientData.id.value}>
                        <td>{props.clientData.customer.username}</td>
                        <td>{props.clientData.customer.project}</td>  
                        <td>{props.clientData.customer.date}</td>
                        <td>{props.clientData.customer.type}</td>
                        <td> 
                            <a href="/#"onClick={props.lock} ><i className="fas fa-lock" ></i></a>
                            <a href="/#"onClick={props.show} ><i className="far fa-eye"></i></a>
                            <a href="/#"onClick={props.delete}><i className="far fa-trash-alt"></i></a>
                        </td>
    </tr>
     );
}
 
export default Client;