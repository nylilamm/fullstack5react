import { useRef } from "react";
import { useAuthStore } from "../stores/auth";


export default function Login(){

    const { login } = useAuthStore()


    /* miten päästään form-elementtiin käsiksi: */
    const formElement = useRef()

    const onLogin = async (event) => {

        event.preventDefault()

        const data = new FormData(formElement.current)

        await login(data)

    }


    return <>
    
        <form ref={formElement} onSubmit={onLogin}>

            <label>Sähköpostiosoite</label>
            <input type="email" name="username" />

            <label>Salasana</label>
            <input type="password" name="password" />

            <button type="submit">Kirjaudu sisään</button>


        </form>
    
    </>
 
}