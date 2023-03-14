export default function TypeOfCustomers({ typeOfCustomers, changeTypeOfCustomersAnswer, addCustomer, removeCustomer }){
    
    return (
        <>
            <h2>Types of Customers</h2>
            <table>
                <tbody>
                    {typeOfCustomers.length !== 0 && <tr>
                        <td>{typeOfCustomers[0][0]}</td>
                        <td>{typeOfCustomers[0][1]}</td>
                        <td>{typeOfCustomers[0][2]}</td>
                    </tr>}
                    {
                        typeOfCustomers.map((typeOfCustomer, index) => {
                            return index !== 0 && <tr key={index}>
                                <td>{typeOfCustomer[0]}</td>
                                <td><input type="text" value={typeOfCustomer[1]} onChange={
                                    (e) => {
                                        changeTypeOfCustomersAnswer(e, index)
                                    }
                                } /></td>
                                <td onClick={() => {
                                    removeCustomer(index)
                                }}>{typeOfCustomer[2]}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <button onClick={addCustomer}>Add</button>
        </>
    )
}