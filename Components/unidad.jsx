import { useState, useEffect } from "react";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { Espacio, Titulo, Button } from '../Components/UI/ui';

const Unidad = () => {
    const [ aires, setAires ] = useState([]);
    const [ airesOb, setAiresOb ] = useState({});
    const [ updateAir, setUpdateAir ] = useState();

    const db = getDatabase();
    
    const cantAires = ref(db, 'aire1/');

    useEffect(() => {
        onValue(cantAires, snapshot => {
            const airesSnap = snapshot.val();
            Object.values(airesSnap).map((aire) => {
                setAires(oldArray => [...oldArray, aire]);
            });
            setAiresOb(airesSnap);
        }); 
    }, []);

    useEffect(() => {
        (airesOb.switch == 1 ? setUpdateAir(true) : setUpdateAir(false))
    })

    const handleClick = (e) => {
        e.preventDefault();
        if(updateAir == false) {  
            update(ref(db, 'aire1/'), {
                switch: 1
            });
            setUpdateAir(true);
        } else {
            update(ref(db, 'aire1/'), {
                switch: 0
            });
            setUpdateAir(false);
        }
    }
    
    return (
        <> 
            <Espacio> 
                <Titulo>Aire {aires[0]}</Titulo>
                <Button bgColor={updateAir ? '#5cb85c' : '#d9534f'} type="button" onClick={handleClick}>
                    {updateAir ? "Encendido" : "Apagado"}
                </Button>
                <h2>{aires[2]}</h2>
            </Espacio>
        </>
        
    )
}

export default Unidad;