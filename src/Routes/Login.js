import { useState } from "react"
import { loginApi } from "../ApiCalls/apiCalls"
import { useNavigate } from "react-router-dom"


export default function Login(){
    const navigate = useNavigate()
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    function changeEmail(e){
        setEmail(e.target.value)
    }

    function changePassword(e){
        setPassword(e.target.value)
    }

    async function handleLogin(e){
        e.preventDefault()

        const response = await loginApi(email, password)
        response.status === 200 ? navigate("dashboard") : response.status === 404 ? console.log("does not exist") : console.log("wrong password");
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
        </>
    )
}