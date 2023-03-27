import {useEffect, useState} from "react";
function CreateAccount () {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

     const handleSubmit = async () => {
        const response = await fetch("/api/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
        const data = await response.json();
        console.log(data);
     }

     return (
         <div>
                <h1>Create Account</h1>,
             <label htmlFor="email">Email
                 <form onSubmit={handleSubmit}>
                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                 </form>
                 <form onSubmit={handleSubmit}>
                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                 </form>
                 <button type="submit" >Create Account</button>
             </label>
         </div>
     )
}

export default CreateAccount;