import { useState } from "react"
import { signUpApi } from "../ApiCalls/apiCalls"
import { Link, useNavigate } from "react-router-dom"

export default function SignUp(){
    const navigate = useNavigate()
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    function changeEmail(e){
        setEmail(e.target.value)
    }

    function changePassword(e){
        setPassword(e.target.value)
    }

    function changeName(e){
        setName(e.target.value)
    }

    async function handleSignUp(e){
        e.preventDefault()

        const response = await signUpApi(name, email, password)
        if(response.status === 201){
            sessionStorage.setItem("email", email)
            sessionStorage.setItem("token", response.token)
            navigate("/dashboard")
        }
        else{
            console.log("User already exists");
        }
    }


    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label htmlFor="name">Name: </label>
                <input id="name" value={name} type="text" onChange={changeName} />

                <label htmlFor="email">Email: </label>
                <input id="email" value={email} type="email" onChange={changeEmail} />

                <label htmlFor="password">Password: </label>
                <input id="password" value={password} type="password" onChange={changePassword} />

                <input type="submit" />
            </form>
            <p>Already have an account? <Link to="/">Login</Link></p>
        </>
    )
}