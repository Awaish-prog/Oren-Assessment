export default function GeneralQuestions({ generalQuestions, changeGeneralQuestionsAnswer, saved }){
    console.log(generalQuestions);
    return (
        <>
        <h2>General Questions</h2>
        <table>
            {
                generalQuestions.map((generalQuestion, index) => {
                    return <tr key={index}>
                        <td>
                            {generalQuestion.column1}
                        </td>
                        <td>{
                            saved && generalQuestion.dbKey === "cin" ?
                            generalQuestion.column2.value :
                             <input type={generalQuestion.column2.cellType} value={generalQuestion.column2.value} onChange= {
                                (e) => {
                                    changeGeneralQuestionsAnswer(e, generalQuestion.column1)
                                }
                            } />
                            }
                        </td>
                    </tr>
                })
            }
        </table>
        </>
    )
}