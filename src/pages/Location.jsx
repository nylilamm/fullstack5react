import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


/* Haetaan yksittäisen sijainnin data */
export default function Location(){


    const {locationId} = useLoaderData()

    const[location, setLocation] = useState()


    /* useEffect ottaa ensimmäisenä parametrina function ja toisena parametrina arrayn */
    useEffect(()=>{

        console.log("Tämä näkyy kun komponentti renderöidään")

        
        const controller = new AbortController()


        fetch("https://fs2withdb.azurewebsites.net/location/ " + locationId,{
            signal: controller.signal
        }).then((response)=>{

            return response.json()
        }).then((data)=>{
            setLocation(data)

        }).catch((error)=>{

            console.log(error)

        })


        return ()=>{

            controller.abort()
            
            console.log("Tämä näkyy kun komponentti poistuu dokumenttipuusta")
        }

    }, [])

    return <>
    
        
        { location && <div>

            <h3>{location.name}</h3>
            <h4>{location.address}</h4>

        </div> }
    
    </>


}