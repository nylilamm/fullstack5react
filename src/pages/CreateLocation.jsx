import { Form, redirect } from "react-router-dom";


export async function action({ request }){

    const formData = await request.formData()

    /* Entries: sille annetaan array, jonka sisällä on arraytä. Sisällä olevassa arrayssa ensimmäinen index eli index0 tulee avaimeksi ja index1 tulee arvoksi (esim.
        name: Rovaniemi => name = avain, Rovaniemi = arvo ) == ["name", "Rovaniemi"] */ 
    const payload = Object.fromEntries(formData)


    /* Fetch tekee oletuksena GET-tyyppisen http-requestin, kun sille ei ole määritetty muita asetuksia =>*/
    const response = await fetch("https://fs2withdb.azurewebsites.net/location", {
        /* mutta me halutaan POST-tyyppinen http-request ::>  */ 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        /* muutetaan tällä hetkellä javascript-objektina oleva payload vielä JSON.stringiksi: */
        body: JSON.stringify(payload)

    })

    const location = await response.json()

    console.log(location)

    
    /* Kun luonti onnistuu, täytyy ohjata käyttäjä johonkin URLiin: */
    return redirect("/locations")


}



export default function CreateLocation(){


    return <>
    
        <Form method="post">

            <label htmlFor="">Toimipaikan nimi</label>
            <input type="text" name="name"/>

            <label htmlFor="">Osoite</label>
            <input type="text" name="address"/>

            <label htmlFor="">Postinumero</label>
            <input type="text" name="zipcode"/>

            <button type="submit"> Tallenna </button>

        </Form>
    
    </>

}