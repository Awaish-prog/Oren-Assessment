import { useState } from "react"

export default function Dashboard(){

    const [ reports, setReports ] = useState([])
    return (
        <>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>Create ESG Report</li>
                    <li>View created reports</li>
                </ul>
            </nav>

            
        </>
    )
}