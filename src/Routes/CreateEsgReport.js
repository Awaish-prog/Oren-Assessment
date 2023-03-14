import { useEffect, useState } from "react"
import { getQuestions } from "../ApiCalls/apiCalls"
import GeneralQuestions from "../Components/GeneralQuestions"
import GrievanceQuestions from "../Components/GrievanceQuestions"
import LocationQuestions from "../Components/LocationQuestions"
import TypeOfCustomers from "../Components/TypeOfCustomers"
import WorkerQuestions from "../Components/WorkerQuestions"

export default function CreateEsgreport(){

    const [ generalQuestions, setGeneralQuestions ] = useState([])
    const [ locationQuestions, setLocationQuestions ] = useState([])
    const [ typeOfCustomers, setTypeOfCustomers ] = useState([])
    const [ workerQuestions, setWorkerQuestions ] = useState([])
    const [ grievanceQuestions, setGrievanceQuestions ] = useState([])
 
    async function getAllQuestions(){
        const questions = await getQuestions()
        setGeneralQuestions(questions.generalQuestions)
        setLocationQuestions(questions.locationQuestions)
        setTypeOfCustomers(questions.typeOfCustomers)
        setWorkerQuestions(questions.workerQuestions)
        setGrievanceQuestions(questions.grievanceQuestions)
    }

    function changeGeneralQuestionsAnswer(e, question){
        setGeneralQuestions((prev) => {
            const newGeneralQuestions = [...prev]
            for(let i = 0; i < newGeneralQuestions.length; i++){
                if(question === newGeneralQuestions[i].column1){
                    newGeneralQuestions[i].column2.value = e.target.value
                    return newGeneralQuestions
                }
            }
        })
    }

    function changelocationQuestionsAnswer(e, column, level){

        setLocationQuestions((prev) => {
            let newLocationQuestions = [...prev]
            if(level === 'National'){
                newLocationQuestions[1][column] = {
                    cellType: "number",
                    value: e.target.value
                }
                newLocationQuestions[1].column4 = {
                    cellType: "value",
                    value: Number(newLocationQuestions[1].column2.value) + Number(newLocationQuestions[1].column3.value) 
                }
            }
            else if(level === "International"){
                newLocationQuestions[2][column] = {
                    cellType: "number",
                    value: e.target.value
                } 
                newLocationQuestions[2].column4 = {
                    cellType: "value",
                    value: Number(newLocationQuestions[2].column2.value) + Number(newLocationQuestions[2].column3.value) 
                }
            }
            return newLocationQuestions
        })
        
    }

    function changeTypeOfCustomersAnswer(e, index){
        setTypeOfCustomers((prev) => {
            let newTypeOfCustomers = [...prev]
            newTypeOfCustomers[index][1] = e.target.value
            return newTypeOfCustomers
        })
    }

    function addCustomer(){
        setTypeOfCustomers((prev) => {
            return prev.length === 1 ? [...prev, [1, "", "cross"]] :[...prev, [prev[prev.length - 1][0] + 1, "", "cross"]]
        })
    }

    function removeCustomer(index){
        setTypeOfCustomers((prev) => {
            let newTypeOfCustomers = [...prev]
            newTypeOfCustomers.splice(index, 1)
            for(let i = index; i < newTypeOfCustomers.length; i++){
                newTypeOfCustomers[i][0]--;
            }
            return newTypeOfCustomers
        })
    }

    function changeWorkerQuestions(e, row, col){
        setWorkerQuestions((prev) => {
            let newWorkerQuestions = [...prev]
            newWorkerQuestions[row][col].value = e.target.value

            newWorkerQuestions[row][1].value = Number(newWorkerQuestions[row][2].value) + Number(newWorkerQuestions[row][4].value)

            newWorkerQuestions[row][3].value = (Number(newWorkerQuestions[row][2].value) / Number(newWorkerQuestions[row][1].value) * 100).toFixed(2)

            newWorkerQuestions[row][5].value = (Number(newWorkerQuestions[row][4].value) / Number(newWorkerQuestions[row][1].value) * 100).toFixed(2)

            return newWorkerQuestions
        })
    }
    useEffect(() => {
        getAllQuestions()
    }, [])
    return (
        <>
            <GeneralQuestions generalQuestions={generalQuestions} changeGeneralQuestionsAnswer={changeGeneralQuestionsAnswer} />

            <LocationQuestions locationQuestions={locationQuestions} changelocationQuestionsAnswer = {changelocationQuestionsAnswer} />

            <TypeOfCustomers typeOfCustomers={typeOfCustomers} changeTypeOfCustomersAnswer={changeTypeOfCustomersAnswer} addCustomer={addCustomer} removeCustomer={removeCustomer} />

            <WorkerQuestions workerQuestions={workerQuestions} changeWorkerQuestions={changeWorkerQuestions} />

            <GrievanceQuestions grievanceQuestions={grievanceQuestions} />
        </>
    )
}