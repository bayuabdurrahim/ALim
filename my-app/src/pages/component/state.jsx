//Import React dan useState dari modul 'react'
import react, {useState} from 'react';

//Komponen State
const State = () =>{
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>Klik Count {count} times</p>
            <button onClick={() => setCount(count +1)}>
                Click me
            </button>
        </div>
    );
};
export default State;