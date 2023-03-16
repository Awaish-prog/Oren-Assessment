export default function ViewTypeOfCustomers({ typeOfCustomers }){
    return (
        <>
            <table>
                <tbody>
                    {
                        typeOfCustomers.map((typeOfCustomer, index) => {
                            return <tr key={index}>
                                {
                                    typeOfCustomer.map((cell, index2) => {
                                        return index2 !== 2 && <td key={index2}>{cell}</td>
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