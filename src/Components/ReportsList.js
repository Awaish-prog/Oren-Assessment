import { useNavigate } from "react-router-dom"

export default function ReportsList({ reports }){

    const navigate = useNavigate()

    function editReport(id, access){
        navigate("/createEsgReport", { state: { id, access }})
    }

    return (
        <>
            {
                reports.map((report, index) => {
                   return  <p key={index} onClick={() => {editReport(report.cin, report.access)}}>{report.cin}</p>
                })
            }
        </>
    )
}