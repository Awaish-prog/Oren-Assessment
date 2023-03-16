import { useState } from "react"
import { loginApi } from "../ApiCalls/apiCalls"
import { Link, useNavigate } from "react-router-dom"


export default function Login(){
    const navigate = useNavigate()
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [message, setMessage] = useState("")

    function changeEmail(e){
        setEmail(e.target.value)
    }

    function changePassword(e){
        setPassword(e.target.value)
    }

    async function handleLogin(e){
        e.preventDefault()

        const response = await loginApi(email, password)
        if(response.status === 200){
            sessionStorage.setItem("email", email)
            sessionStorage.setItem("token", response.token)
            navigate("/dashboard")
        }
        else if(response.status === 404){
            setMessage("does not exist") 
        }
        else{
            setMessage("wrong password");
        }
    }


    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email: </label>
                <input id="email" value={email} type="email" onChange={changeEmail} />

                <label htmlFor="password">Password: </label>
                <input id="password" value={password} type="password" onChange={changePassword} />

                <input type="submit" />
            </form>
            <p>{message}</p>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </>
    )
}