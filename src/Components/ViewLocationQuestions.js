export default function ViewLocationQuestions({ locationQuestions }){
    return (
        <>
            <table>
                <tbody>
                    {
                        locationQuestions.map((locationQuestion, index) => {
                            return <tr key={index}>
                                <td>{locationQuestion.column1.value}</td>
                                <td>{locationQuestion.column2.value}</td>
                                <td>{locationQuestion.column3.value}</td>
                                <td>{locationQuestion.column4.value}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}