export default function ViewGeneralQuestions({ generalQuestions }){
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Questions</td>
                        <td>Answers</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        generalQuestions.map((generalQuestion, index) => {
                           return <tr key={index}>
                                    <td>{generalQuestion.column1}</td>
                                    {
                                        generalQuestion.column2.value ?
                                        <td>{generalQuestion.column2.value}</td>:
                                        <td>Answer not provided</td>
                                    } 
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}