import { useEffect, useState } from "react"
import { getQuestions } from "../ApiCalls/apiCalls"
import GeneralQuestions from "../Components/GeneralQuestions"

export default function CreateEsgreport(){

    const [ generalQuestions, setGeneralQuestions ] = useState([])
    const [ locationQuestions, setLocationQuestions ] = useState([])
 
    async function getAllQuestions(){
        const questions = await getQuestions()
        setGeneralQuestions(questions.generalQuestions)
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

    useEffect(() => {
        getAllQuestions()
    }, [])
    return (
        <>
            <GeneralQuestions generalQuestions={generalQuestions} changeGeneralQuestionsAnswer={changeGeneralQuestionsAnswer} />
        </>
    )
}