export default function ViewWorkerQuestions({ workerQuestions }){
    return (
        <>
            <table>
                <tbody>
                    {
                        workerQuestions.map((workerQuestion, row) => {
                            return <tr key={row}>
                                {
                                    workerQuestion.map((cell, col) => {
                                        return <td key={col}>
                                            {
                                                (row === 0 && (col === 2 || col === 3)) ?
                                                ` Male ${cell.value}` :
                                                (row === 0 && (col === 4 || col === 5)) ?
                                                `Female ${cell.value}` :
                                                `${cell.value}`
                                            }
                                            </td>
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