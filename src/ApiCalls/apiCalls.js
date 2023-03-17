const url = "http://localhost:4002/"

async function loginApi(email, password){
    let response = await fetch(`${url}api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email, password
        })
    })
    return await response.json()
}

async function signUpApi(name, email, password){
    let response = await fetch(`${url}api/signUp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name, email, password
        })
    })
    return await response.json()
}

async function getReports(email){
    const token = sessionStorage.getItem("token")
    let response = await fetch(`${url}api/getReports/${email}`, {
        headers: {
            "token": token,
            "email": email
        }
    })
    return await response.json()
}

async function sendEsgDetails(generalQuestions, locationQuestions, typeOfCustomers, workerQuestions, workerQuestionsDiffAbled, grievanceQuestions, attachedFiles, email, submitted){
    const token = sessionStorage.getItem("token")
    let response = await fetch(`${url}api/saveResponse`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": token,
            "email": email
        },
        body: JSON.stringify({
            generalQuestions, locationQuestions, typeOfCustomers, workerQuestions, workerQuestionsDiffAbled, grievanceQuestions, attachedFiles, email, submitted
        })
    })
    return await response.json()
}

async function getQuestions(cin){
    const token = sessionStorage.getItem("token")
    const email = sessionStorage.getItem("email")
    let response = await fetch(`${url}api/getQuestions/${cin}`, {
        headers: {
            "token": token,
            "email": email
        }
    })
    return await response.json()
}

async function sendInvite(email, cin){
    const token = sessionStorage.getItem("token")
    let response = await fetch(`${url}api/inviteSomeone`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": token,
            "email": email
        },
        body: JSON.stringify({
            email, cin
        })
    })
    return await response.json()
}

async function deleteFile(fileName, cin){
    const token = sessionStorage.getItem("token")
    const email = sessionStorage.getItem("email")
    let response = await fetch(`${url}api/deleteFile`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "token": token,
            "email": email
        },
        body: JSON.stringify({
            fileName, cin
        })
    })
    return await response.json()
}
export { loginApi, signUpApi, getQuestions, sendEsgDetails, getReports, sendInvite, deleteFile }