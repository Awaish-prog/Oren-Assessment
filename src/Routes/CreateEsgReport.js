import { useEffect, useState } from "react"
import { getQuestions } from "../ApiCalls/apiCalls"
import GeneralQuestions from "../Components/GeneralQuestions"
import LocationQuestions from "../Components/LocationQuestions"

export default function CreateEsgreport(){

    const [ generalQuestions, setGeneralQuestions ] = useState([])
    const [ locationQuestions, setLocationQuestions ] = useState([])
 
    async function getAllQuestions(){
        const questions = await getQuestions()
        setGeneralQuestions(questions.generalQuestions)
        setLocationQuestions(questions.locationQuestions)
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

    useEffect(() => {
        getAllQuestions()
    }, [])
    return (
        <>
            <GeneralQuestions generalQuestions={generalQuestions} changeGeneralQuestionsAnswer={changeGeneralQuestionsAnswer} />
            <LocationQuestions locationQuestions={locationQuestions} changelocationQuestionsAnswer = {changelocationQuestionsAnswer} />
        </>
    )
}