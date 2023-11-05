import { Link, Outlet } from "react-router-dom";
import { useAuthStore } from "./stores/auth";

export default function Root(){


    const {auth, login, logout} = useAuthStore()


    return <div className="container">
    
        <div>

            <Link className="button" to={"/environments"}> Ympäristöt </Link>
            <Link className="button" to={"/locations"}> Toimipisteet </Link>
            


            { auth ?
           <button onClick={logout}> Kirjaudu ulos </button>
           :
            <button onClick={login}> Kirjaudu sisään </button> }


        </div>

       
        <Outlet>

        </Outlet>

    </div>
}