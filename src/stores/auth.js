import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


/* persist = miten voidaan säilyttää tieto siitä, että käyttäjä on kirjautunut sisään (esim. selaimen päivitys)*/
export const useAuthStore = create(persist((set)=>({

    auth: false,
    csrfToken: null,
    login: async (credentials) => {

        console.log(credentials)
        set({auth: true})
        

        /* Tässä suoritetaan myöhemmin fetch kysely backendille */
        
        /*const response = await fetch("https://localhost:8002/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        
            body: new URLSearchParams(credentials) 
        })*/


        
        /* Halutaan purkaa responsesta tuleva datqa json-muodossa: puretaan json-vastaus ja otetaan siitä objektista mikä sieltä tulee pelkästään tämä data csrf_token */ 
        
        //const { csrf_token } = await response.json()

        /* Tarkistetaan onko csrf_tokenia */
        
        /*if(csrf_token) {
            set({ csrfToken: csrf_token, auth: true })
        }*/

    },

    logout: async () => set(() => ({auth: false}))

}),{
    name: "auth-store",
    /* sessionStorage suositeltavampi tunnistamiseen liittyvissä datan säilytysmenetelmissä > on elossa vain niin kauan kun selain on päällä. Tyhjenee kun selain suljetaan.
    localStorage säilyttää datan vaikka selain suljetaan.  */
    storage: createJSONStorage(() => sessionStorage)
}))
