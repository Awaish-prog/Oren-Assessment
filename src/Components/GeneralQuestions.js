import "../CSS/GeneralQuestions.css"

export default function GeneralQuestions({ generalQuestions, changeGeneralQuestionsAnswer, saved }){
    console.log(generalQuestions);
    return (
        <section className="generalQuestions">
        <h2>General Questions</h2>
        <table className="generalTable">
            {
                generalQuestions.map((generalQuestion, index) => {
                    return <tr key={index}>
                        <td className="generalQuestion">
                            {generalQuestion.column1}
                        </td>
                        <td>{
                            saved && generalQuestion.dbKey === "cin" ?
                            <span className="generalAnswer">generalQuestion.column2.value</span> :
                             <input className="generalAnswer" type={generalQuestion.column2.cellType} value={generalQuestion.column2.value} onChange= {
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
        </section>
    )
}