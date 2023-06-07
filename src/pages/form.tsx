import './form.css'
import React, { useState, ChangeEvent, FormEvent } from 'react';


type props ={
    email:string;
    text:string

}


export default function Form({}:props) {
    const [email,setEmail]= useState('');
    const [text,setText] = useState('');


    const handleChangeInput = (event: FormEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };

    const handleChangeArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }



    return(

    <form action="">
        <div className="input-group">
            <label className="label">Email address</label>
             <input value={email} onChange={handleChangeInput} name="Email" id="Email" className="input" type="email" />
             <label className="label">Votre message</label>
             <textarea value={text} onChange={handleChangeArea} name="" id="" className='input'></textarea>
        </div>
    </form>
    // <div className="contact">
    //     <form action="">
    //         <label htmlFor="email">Your Email</label>
    //         <input type="text" id="name" />
    //         <label htmlFor=""></label>
    //     </form>
    // </div>
    



    )
}