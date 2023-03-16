import { useNavigate } from "react-router-dom"

export default function ReportsList({ reports }){

    const navigate = useNavigate()

    function editReport(id){
        navigate("/createEsgReport", { state: { id }})
    }

    return (
        <>
            {
                reports.map((report, index) => {
                   return  <p key={index} onClick={() => {editReport(report)}}>{report}</p>
                })
            }
        </>
    )
}