
const mongoose = require('mongoose')

const EsgReport = new mongoose.Schema(
    {
        cin : { type: String, required: true },
        listedEntityName: { type: String },
        yearOfIncorporation: { type: String },
        registeredOfficeAddress: { type: String },
        corporateOfficeAddress: { type: String },
        email: { type: String },
        telephone: { type: String },
        website: { type: String },
        financialYear: { type: String },
        nameOfStockExchange: { type: String },
        paidUpCapital: { type: Number },
        queryContact: { type: String },
        reportBoundary: { type: String },
        nationalLocation: {
            type: {
                plants: Number,
                offices: Number,
            }
        },
        internationalLocation: {
            type: {
                plants: Number,
                offices: Number,
            }
        },
        typeOfCustomers: [ { type: String } ],
        permanentEmployess: {
            type: {
                male: Number,
                female: Number
            }
        },
        otherThanPermanentEmployess: {
            type: {
                male: Number,
                female: Number
            }
        },
        permanentWorkers: {
            type: {
                male: Number,
                female: Number
            }
        },
        otherThanPermanentWorkers: {
            type: {
                male: Number,
                female: Number
            }
        },
        diffAbledpermanentEmployess: {
            type: {
                male: Number,
                female: Number
            }
        },
        diffAbledotherThanPermanentEmployess: {
            type: {
                male: Number,
                female: Number
            }
        },
        diffAbledpermanentWorkers: {
            type: {
                male: Number,
                female: Number
            }
        },
        diffAbledotherThanPermanentWorkers: {
            type: {
                male: Number,
                female: Number
            }
        },
        grievancesPermanentWorkers: {
            type: {
                yesno: String,
                details: String
            }
        },
        grievancesOtherThanPermanentWorkers: {
            type: {
                yesno: String,
                details: String
            }
        },
        grievancesPermanentEmployess: {
            type: {
                yesno: String,
                details: String
            }
        },
        grievancesOtherThanPermanentEmployess: {
            type: {
                yesno: String,
                details: String
            }
        },
        attachedFiles: [ { type: String } ]
    }
)

const esgReport = mongoose.model("esgReport", EsgReport)
module.exports = esgReport