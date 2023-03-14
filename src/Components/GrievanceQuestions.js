export default function GrievanceQuestions({ grievanceQuestions }){
    return (
        <>
        <table>
            <tbody>
                {
                    grievanceQuestions.map((grievanceQuestion, index1) => {
                        return <tr key={index1}>
                            {
                                grievanceQuestion.map((grievanceQuestionCell, index2) => {
                                    return <td key={index2}>
                                        {
                                            grievanceQuestionCell.cellType === "label" &&
                                            grievanceQuestionCell.value
                                        }
                                        {
                                            grievanceQuestionCell.cellType === "select" &&
                                            <select>
                                                {
                                                    grievanceQuestionCell.options.map((option, index3) => {
                                                        return <option key={index3}>{option}</option>
                                                    })
                                                }
                                            </select>
                                        }
                                        {
                                            grievanceQuestionCell.cellType === "text" &&
                                            <input type="text" />
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