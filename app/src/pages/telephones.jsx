import { lazy, useState } from "react";
import { useEffect } from "react";
import { EffectT } from "../components/EffectT";
import "./telephones.css"

const Telephones = () => {
    const telephone = lazy(() => import("../components/EffectT"))

    const mobile = () => {
        const mobi = lazy(() => import("../components/EffectT"))
       
        const [newTelephone, setNewTelephone] = useState({telephone});

    const createPhone = (ev) => {
        ev.preventDefault();
        
        console.log(name, description, imageFileName);
        setNewTelephone({
        name: name,
        description: description,
        imageFileName:imageFileName
        })
        console.log(newTelephone)
    }
    }
    

    return(
        <>
        <div className="calatogo">
        <div className="listado">
            <EffectT />
        </div>
        <footer className='footer'><h2>hols</h2></footer>
        </div>
        </>
    )
}

export default Telephones;