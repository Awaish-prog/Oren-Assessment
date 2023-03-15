
const  { processInputData } = require("../Utils/ProcessData.js") 
const EsgReport = require("../Schemas/EsgReport.js")


const generalQuestions = [
    {
        column1: "Corporate Identity Number (CIN) of the Listed Entity",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Name of the Listed Entity",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Year of Incorpaoration",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Registered office address",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Corporate office Address",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Email",
        column2: {
            cellType: "email",
            value: ""
        }
    },
    {
        column1: "Telephone",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Website",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Financial year for which reporting is being done",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Name of Stock Exchanges(s) where shares are listed",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Paid-up Capital",
        column2: {
            cellType: "number",
            value: 0
        }
    },
    {
        column1: "Name and contact details (telephone, email address) of the person who may be contacted in case of any queries on the BRSR report",
        column2: {
            cellType: "text",
            value: ""
        }
    },
    {
        column1: "Reporting boundary - Are the disclosures under this report made on",
        column2: {
            cellType: "text",
            value: ""
        }
    }
]

const locationQuestions = [
    {
        column1: {
            cellType: "label",
            value: "Location"
        },
        column2: {
            cellType: "label",
            value: "Number of plants"
        },
        column3: {
            cellType: "label",
            value: "Number of offices"
        },
        column4: {
            cellType: "label",
            value: "Total"
        }
    },
    {
        column1: {
            cellType: "label",
            value: "National"
        },
        column2: {
            cellType: "number",
            value: 0
        },
        column3: {
            cellType: "number",
            value: 0
        },
        column4: {
            cellType: "value",
            value: 0
        }
    },
    {
        column1: {
            cellType: "label",
            value: "International"
        },
        column2: {
            cellType: "number",
            value: 0
        },
        column3: {
            cellType: "number",
            value: 0
        },
        column4: {
            cellType: "value",
            value: 0
        } 
    }
]

const typeOfCustomers = [
    [
        "S. No",
        "Type of Customers",
        "Action"
    ],
    [
        1,
        "",
        "cross"
    ]
]

const workerQuestions = [
    [
        {
            cellType: "label",
            value: "Particulars"
        },
        {
            cellType: "label",
            value: "Total(A)"
        },
        {
            cellType: "label",
            value: "No.(B)"
        },
        {
            cellType: "label",
            value: "%(B/A)"
        },
        {
            cellType: "label",
            value: "No.(C)"
        },
        {
            cellType: "label",
            value: "%(C/A)"
        },
    ],
    [
        {
            cellType: "label",
            value: "Permanent Employess(D)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Other than Permanent Employees(E)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Total Employees(D + E)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Permanent Workers(F)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Other than Permanent Workers(G)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Total Workers(F + G)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ]
]

const workerQuestionsDiffAbled = [
    [
        {
            cellType: "label",
            value: "Particulars"
        },
        {
            cellType: "label",
            value: "Total(A)"
        },
        {
            cellType: "label",
            value: "No.(B)"
        },
        {
            cellType: "label",
            value: "%(B/A)"
        },
        {
            cellType: "label",
            value: "No.(C)"
        },
        {
            cellType: "label",
            value: "%(C/A)"
        },
    ],
    [
        {
            cellType: "label",
            value: "Permanent Employess(D)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Other than Permanent Employees(E)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Total Employees(D + E)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Permanent Workers(F)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Other than Permanent Workers(G)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "number",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ],
    [
        {
            cellType: "label",
            value: "Total Workers(F + G)"
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
        {
            cellType: "value",
            value: 0
        },
    ]
]

const grievanceQuestions = [
    [
        {
            cellType: "label",
            value: ""
        },
        {
            cellType: "label",
            value: "Yes/No"
        },
        {
            cellType: "label",
            value: "Details"
        },
    ],
    [
        {
            cellType: "label",
            value: "Permanents Workers"
        },
        {
            cellType: "select",
            options: [
                "N/A",
                "Yes",
                "No"
            ],
            value: "N/A"
        },
        {
            cellType: "text",
            value: ""
        },
    ],
    [
        {
            cellType: "label",
            value: "Other than Permanents Workers"
        },
        {
            cellType: "select",
            options: [
                "N/A",
                "Yes",
                "No"
            ],
            value: "N/A"
        },
        {
            cellType: "text",
            value: ""
        },
    ],
    [
        {
            cellType: "label",
            value: "Permanent Employees"
        },
        {
            cellType: "select",
            options: [
                "N/A",
                "Yes",
                "No"
            ],
            value: "N/A"
        },
        {
            cellType: "text",
            value: ""
        },
    ],
    [
        {
            cellType: "label",
            value: "Other than Permanent Employees"
        },
        {
            cellType: "select",
            options: [
                "N/A",
                "Yes",
                "No"
            ],
            value: "N/A"
        },
        {
            cellType: "text",
            value: ""
        },
    ],
]

async function getQuestions(req, res){
    res.json({status: 200, generalQuestions, locationQuestions, typeOfCustomers, workerQuestions, workerQuestionsDiffAbled, grievanceQuestions})
}

async function saveResponse(req, res){
    const esgReportData = processInputData(req.body)
    if(await EsgReport.findOne({cin: esgReportData.cin})){
        await EsgReport.updateOne({cin: esgReportData.cin}, esgReportData)
    }
    else{
        await EsgReport.create(esgReportData)
    }
}

module.exports = { getQuestions, saveResponse }