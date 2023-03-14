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

const locations = [
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

async function getQuestions(req, res){
    res.json({status: 200, generalQuestions, locations})
}

module.exports = { getQuestions }