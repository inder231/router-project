import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import {Navigate} from "react-router-dom"
export const PrivatedRoute  = ({children})=>{
    const {dispatch,state } = useContext(Appcontext);
    
    if(!state.isAuth){
        return <Navigate to="/login" />
    }
    return children;
}
