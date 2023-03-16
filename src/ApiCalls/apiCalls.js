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
    let response = fetch(`${url}api/signUp`, {
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

async function sendEsgDetails(generalQuestions, locationQuestions, typeOfCustomers, workerQuestions, workerQuestionsDiffAbled, grievanceQuestions){
    let response = fetch(`${url}api/saveResponse`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            generalQuestions, locationQuestions, typeOfCustomers, workerQuestions, workerQuestionsDiffAbled, grievanceQuestions
        })
    })
    return await response.json()
}

async function getQuestions(cin){
    let response = await fetch(`${url}api/getQuestions/${cin}`)
    return await response.json()
}
export { loginApi, signUpApi, getQuestions, sendEsgDetails }