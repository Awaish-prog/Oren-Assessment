import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getReports } from "../ApiCalls/apiCalls"
import ReportsList from "../Components/ReportsList"
import "../CSS/Dashboard.css"

export default function Dashboard(){
    const navigate = useNavigate()
    const [ pendingReports, setPendingReports ] = useState([])
    const [ submittedReports, setSubmittedReports ] = useState([])
    const [ showPendingReports, setShowPendingReports ] = useState(true)

    function showPending(){
        setShowPendingReports(true)
    }

    function showSubmitted(){
        setShowPendingReports(false)
    }

    async function getAllReports(){
        const email = sessionStorage.getItem("email")
        const response = await getReports(email)
        setPendingReports(response.pendingReports)
        setSubmittedReports(response.submittedReports)
    }


    function gotoCreateReport(){
        navigate("/createEsgReport", { state: {id: "default", access: true}})
    }

    useEffect(() => {
        sessionStorage.removeItem("id")
        getAllReports()
    }, [])

    return (
        <section>
            <div className="navbar">
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li onClick={gotoCreateReport}>Create ESG Report</li>
                    <li onClick={showPending}>Pending reports</li>
                    <li onClick={showSubmitted}>Submitted reports</li>
                </ul>
            </nav>
            </div>
            {
                showPendingReports ?
                <ReportsList reports = {pendingReports} submitted={false} /> :
                <ReportsList reports = {submittedReports} submitted={true} />
            }

            
        </section>
    )
}