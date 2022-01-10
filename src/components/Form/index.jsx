import {useState, useReducer} from 'react';
import styles from './style.module.scss';

const initialForm = {
    name: "",
    email:"",
}

const formReducer= (state, action) => {
    switch (action.type) {
        case "Proviamo questo form":
        return {
            ...state, [action.field]: action.payload,
        };
    
        default:
    return state;
    } 
}
const Form = () => {
    const [formState, dispatch] = useReducer(formReducer, initialForm);

    const handleTextChange = (e) => {
        dispatch({
            type:"Proviamo questo form",
            field: e.target.name,
            payload:e.target.value})
    }

    return (
        <div className={styles.container}>

        
        <form className={styles.form}>
        <section>
        <h1>Login Form</h1>
        </section>

           <label>
                Username:
                <input className={styles.input}
                type="text" 
                name="user" 
                placeholder='mario'
                value={formState.name} 
                onChange={(e)=>handleTextChange(e)}/>
            </label>

            <label>
                Email:
                <input className={styles.input}
                type="text" 
                name="email" 
                placeholder='mario@live.it'
                value={formState.email} 
                onChange={(e)=>handleTextChange(e)}/>
            </label>
       
        </form>
        </div>
    )
}

// const Form = () => {
//     const [user, setUser] =useState ("");
//     return (
//         <form>
//             <label>
//                 Inserisci il tuo nome:
//                 <input type="text" name="user" value={user} onChange={(e)=>setUser(e.target.value)}/>
//             </label>
//         </form>
//     )
// }

export {Form}

