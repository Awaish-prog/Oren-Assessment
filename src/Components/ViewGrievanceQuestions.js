export default function ViewGrievanceQuestions({ grievanceQuestions }){
    return (
        <>
            <table>
                <tbody>
                    {
                        grievanceQuestions.map((grievanceQuestion, row) => {
                                return <tr key={row}>
                                    {
                                        grievanceQuestion.map((cell, col) => {
                                            return <td key={col}>{cell.value}</td>
                                        })
                                    }
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}