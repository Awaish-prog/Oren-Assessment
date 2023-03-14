import { useEffect, useState } from "react"
import { getQuestions } from "../ApiCalls/apiCalls"
import GeneralQuestions from "../Components/GeneralQuestions"
import LocationQuestions from "../Components/LocationQuestions"
import TypeOfCustomers from "../Components/TypeOfCustomers"

export default function CreateEsgreport(){

    const [ generalQuestions, setGeneralQuestions ] = useState([])
    const [ locationQuestions, setLocationQuestions ] = useState([])
    const [ typeOfCustomers, setTypeOfCustomers ] = useState([])
 
    async function getAllQuestions(){
        const questions = await getQuestions()
        setGeneralQuestions(questions.generalQuestions)
        setLocationQuestions(questions.locationQuestions)
        setTypeOfCustomers(questions.typeOfCustomers)
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
            }
            else if(level === "International"){
                newLocationQuestions[2][column] = {
                    cellType: "number",
                    value: e.target.value
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
    useEffect(() => {
        getAllQuestions()
    }, [])
    return (
        <>
            <GeneralQuestions generalQuestions={generalQuestions} changeGeneralQuestionsAnswer={changeGeneralQuestionsAnswer} />
            <LocationQuestions locationQuestions={locationQuestions} changelocationQuestionsAnswer = {changelocationQuestionsAnswer} />
            <TypeOfCustomers typeOfCustomers={typeOfCustomers} changeTypeOfCustomersAnswer={changeTypeOfCustomersAnswer} addCustomer={addCustomer} removeCustomer={removeCustomer} />
        </>
    )
}