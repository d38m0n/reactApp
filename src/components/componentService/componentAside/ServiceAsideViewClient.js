import React from 'react'

const ClientButtonsContainer = (props)=>(
<div className="buttonContainerClient">
   <div className="buttonWrapper">
        <button onClick={console.log(props.magazineID)}><i class="fas fa-warehouse"></i>Magazyn</button>
        <button onClick={console.log(props.serviceID)}><i class="fas fa-tools"></i>Serwisy</button>
        <button onClick={console.log(props.walletID)}><i class="fas fa-dice-d6"></i>Maszyny</button>
    </div>
</div>
)



const ClientFrom = (props) => (

    <from class="wrapperGrid">
        <div class="boxClient logoClient">
            <img src={props.clientData.picture.large} alt=""></img>
        </div>

        <div class="boxClient informationClient">
            <p>Informacje:</p>
            <label for="project">Projekt:</label>
            <input type="text" id="project" name="project" value={props.clientData.project}/>
            <label for="date">Rejestracja:</label>
            <input type="text" id="pdate" name="pdate" value={props.clientData.registered.date}/>
            <label for="type">Rodzaj:</label>
            <input type="text" id="type" name="type" value={props.clientData.type}/>
            <label for="national">Kraj</label>
            <input type="text" id="national" name="national" value={props.clientData.nat}/>
            <label for="login">Login</label>
            <input type="text" id="login" name="login" value={props.clientData.login.username}/>
            <label for="description">Opis:</label>
            <textarea type="text" id="description" name="description" value={props.clientData.description}/>
        </div>

        <div class="boxClient basicDataRepresentative">
            <p>Reprezentacja:</p>
            <label for="repName">Imię:</label>
            <input type="text" id="repName" name="repName" value={props.clientData.representative.first}/>
            <label for="repSurname">Nazwisko:</label>
            <input type="text" id="repSurname" name="repSurname" value={props.clientData.representative.surname}/>
            <label for="repTitle">Stanowisko:</label>
            <input type="text" id="repTitle" name="repTitle" value={props.clientData.representative.title}/>
            <label for="repEmail">Email:</label>

            <input type="text" id="repEmail" name="repEmail" value={props.clientData.representative.email}/>
            <label for="repPhone">Telefon:</label>
            <input type="text" id="repPhone" name="repPhone" value={props.clientData.representative.phone}/>   
        </div>  
        
        <div class="boxClient basicDataCompany">
            <p>Dane Firmy:</p>
            <label for="brand">Nazwa:</label>
            <input type="text" id="brand" name="brand" value={props.clientData.company.brand}/>
            <label for="companyID">NIP:</label>
            <input type="text" id="companyID" name="companyID" value={props.clientData.company.companyID}/>
            <label for="phoneCompany">Telefon:</label>
            <input type="text" id="phoneCompany" name="phoneCompany" value={props.clientData.company.phoneCompany}/>
            <label for="emailCompany">E-mail:</label>
            <input type="text" id="emailCompany" name="emailCompany" value={props.clientData.company.emailCompany}/>
            <label for="state">Województwo:</label>
            <input type="text" id="state" name="state" value={props.clientData.location.state}/>
            <label for="city">Miasto:</label>
            <input type="text" id="city" name="city" value={props.clientData.location.city}/>
            <label for="street">Ulica:</label>
            <input type="text" id="street" name="street" value={props.clientData.location.street}/>
            
        </div>
        <button className="submitClientEdit"><i class="far fa-save"></i> <p>Zapisz...</p> </button>
    </from>
)
const CurrentlyViewClient = (props) => {
    return (    
    <aside className="currentlyViewClient" >
        <ClientFrom clientData={props.currentyClient} />
        <ClientButtonsContainer
            magazineID={props.currentyClient.store.storeID}
            serviceID={props.currentyClient.service.serviceID} 
            walletID={props.currentyClient.wallet.walletID} />
        <a href="/#" onClick={props.exit} className="exitClient"><i class="far fa-window-close"></i></a>
    </aside> );
}
 
export default CurrentlyViewClient;