export default function GrievanceQuestions({ grievanceQuestions, changeGrievanceQuestions }){
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
                                            <select onChange={(e) => changeGrievanceQuestions(e, index1, index2)} value={grievanceQuestionCell.value}>
                                                {
                                                    grievanceQuestionCell.options.map((option, index3) => {
                                                        return <option value={option} key={index3}>{option}</option>
                                                    })
                                                }
                                            </select>
                                        }
                                        {
                                            grievanceQuestionCell.cellType === "text" &&
                                            <input onChange={(e) => changeGrievanceQuestions(e, index1, index2)} type="text" value={grievanceQuestionCell.value} />
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