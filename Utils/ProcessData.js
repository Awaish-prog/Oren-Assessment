function processInputData(data){
    const generalQuestionsKeys = ["cin", "listedEntityName", "yearOfIncorporation", "registeredOfficeAddress", "corporateOfficeAddress", "email", "telephone", "website", "financialYear", "nameOfStockExchange", "paidUpCapital", "queryContact", "reportBoundary"]

    const workerQuestionsKeys = ["permanentEmployees", "otherThanPermanentEmployees", "permanentWorkers", "otherThanPermanentWorkers"]

    const grievanceKeys = ["grievancesPermanentWorkers", "grievancesOtherThanPermanentWorkers", "grievancesPermanentEmployees", "grievancesOtherThanPermanentEmployees"]



    let workerIndex = 0

    const esgReportData = { }
    for(let i = 0; i < generalQuestionsKeys.length; i++){
        if(generalQuestionsKeys[i] === "paidUpCapital"){
            esgReportData[generalQuestionsKeys[i]] = Number(data.generalQuestions[i].column2.value)
        }
        else{
            esgReportData[generalQuestionsKeys[i]] = data.generalQuestions[i].column2.value
        }
    }
    esgReportData["nationalLocation"] = {
        plants: Number(data.locationQuestions[1].column2.value),
        offices: Number(data.locationQuestions[1].column3.value)
    }
    esgReportData["internationalLocation"] = {
        plants: Number(data.locationQuestions[2].column2.value),
        offices: Number(data.locationQuestions[2].column3.value)
    }
    esgReportData["typeOfCustomers"] = []
    for(let i = 1; i < data.typeOfCustomers.length; i++){
        esgReportData["typeOfCustomers"].push(data.typeOfCustomers[i][1])
    }

    for(let i = 1; i < data.workerQuestions.length; i++){
        if(data.workerQuestions[i][2].cellType === "number"){
            esgReportData[workerQuestionsKeys[workerIndex]] = {
                male: Number(data.workerQuestions[i][2].value),
                female: Number(data.workerQuestions[i][4].value)
            }
            workerIndex++
        }
    }

    workerIndex = 0

    for(let i = 1; i < data.workerQuestionsDiffAbled.length; i++){
        if(data.workerQuestionsDiffAbled[i][2].cellType === "number"){
            esgReportData["diffAbled" + workerQuestionsKeys[workerIndex]] = {
                male: Number(data.workerQuestionsDiffAbled[i][2].value),
                female: Number(data.workerQuestionsDiffAbled[i][4].value)
            }
            workerIndex++
        }
    }    
    
    for(let i = 1; i < data.grievanceQuestions.length; i++){
        esgReportData[grievanceKeys[i - 1]] = {
            yesno: data.grievanceQuestions[i][1].value,
            details: data.grievanceQuestions[i][2].value
        }
    }

    esgReportData.attachedFiles = []

    return esgReportData
}

module.exports = { processInputData }