import { useState, useEffect } from "react";
import { getData } from "../../services/services";
import { v4 as uuidv4 } from "uuid";
import Popup from 'reactjs-popup';
import { Provider } from "react";
import './EffectT.css'
export const EffectT = () => {
    const [filter] = useState('')
    const [listTelephones, setListTelephones] = useState([]); 


    useEffect(()=>{
        (async () => {
            const data = await getData(filter)
            setListTelephones(data)
        })()
    },[filter])
    console.log(listTelephones)

 

 return(
    <>
    <div className="Telephones">
        <ul className="listTelephones">
            {listTelephones
            .map((telephone) => (
                
                <li key={uuidv4()} className="lista">
                
                <Popup trigger={<img src={telephone.imageFileName} className="imgPhone" />}>
                <div className="popup">
                <h1>{telephone.name}</h1>
                <h1>{telephone.manufacturer}</h1>
                <h1>{telephone.description}</h1>
                <h1>{telephone.color}</h1>
                <h1>{telephone.price}</h1>
                <h1>{telephone.screen}</h1>
                <h1>{telephone.processor}</h1>
                <h1>{telephone.ram}</h1>
                </div>
                </Popup>
                </li>
                
            )
            
            )}
        </ul>
        </div>
    </>
 );

};