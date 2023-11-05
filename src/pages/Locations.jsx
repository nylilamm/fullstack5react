import { useLoaderData, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuthStore } from "../stores/auth"


export async function loader(){

    const response = await fetch("https://fs2withdb.azurewebsites.net/location")
    const locations = await response.json()

    return { locations }

}

export default function Locations(){

    const {locations} = useLoaderData() 

    /* testataan toimiiko sisään- ja uloskirjaus */
    const {auth} = useAuthStore()


    const navigate = useNavigate()


    /* map-functio: käy arraysta jokaisen itemin läpi sillä functiolla, joka sille annetaan parametriksi */
    /* ja palauttaa sitten tähän locationsElements -muuttujaan uuden arrayn niiden paluuarvojen perusteella, mitä tästä map-functiosta palautuu. */

    const locationElements = locations.map((location)=>{

        return <p onClick={()=> navigate("/locations/" + location.id)} key={location.id}> { location.name }, { location.address } </p>

    })


    return <>

        {/* testataan toimiiko sisään- ja uloskirjaus */}
        {auth.toString()}

        <Link to="/location/create"> Luo uusi toimipiste </Link>
        {locationElements}
    
    </>

}


