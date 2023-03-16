import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getQuestions } from "../ApiCalls/apiCalls"
import ViewGeneralQuestions from "../Components/ViewGeneralQuestions"
import ViewGrievanceQuestions from "../Components/ViewGrievanceQuestions"
import ViewLocationQuestions from "../Components/ViewLocationQuestions"
import ViewTypeOfCustomers from "../Components/ViewTypeOfCustomers"
import ViewWorkerQuestions from "../Components/ViewWorkerQuestions"

export default function ReportDetails(){
    const location = useLocation()
    const [ generalQuestions, setGeneralQuestions ] = useState([])
    const [ locationQuestions, setLocationQuestions ] = useState([])
    const [ typeOfCustomers, setTypeOfCustomers ] = useState([])
    const [ workerQuestions, setWorkerQuestions ] = useState([])
    const [ grievanceQuestions, setGrievanceQuestions ] = useState([])
    const [ workerQuestionsDiffAbled, setWorkerQuestionsDiffAbled ] = useState([])
    const [ displayDiffAbled, setDisplayDiffAbled ] = useState(false)
    const [ attachedFiles, setAttachedFiles ] = useState([])

    async function getAllQuestions(){
        const id = location.state.id
        const questions = await getQuestions(id)
        setGeneralQuestions(questions.generalQuestions)
        setLocationQuestions(questions.locationQuestions)
        setTypeOfCustomers(questions.typeOfCustomers)
        setWorkerQuestions(questions.workerQuestions)
        setGrievanceQuestions(questions.grievanceQuestions)
        setWorkerQuestionsDiffAbled(questions.workerQuestionsDiffAbled)
        setAttachedFiles(questions.attachedFiles)
        console.log(questions.attachedFiles);
    }

    useEffect(() => {
        getAllQuestions()
    }, [])
    return (
        <>
            <ViewGeneralQuestions generalQuestions={generalQuestions} />
            <ViewLocationQuestions locationQuestions={locationQuestions} />
            <ViewTypeOfCustomers typeOfCustomers={typeOfCustomers} />
            <ViewWorkerQuestions workerQuestions = {workerQuestions} />
            <ViewWorkerQuestions workerQuestions = {workerQuestionsDiffAbled} />
            <ViewGrievanceQuestions grievanceQuestions={grievanceQuestions} />
        </>
    )
}