const request=require('request')
// const db=require('mongodb')
const fs=require('fs')
const { response } = require('express')


const dbRaw=fs.readFileSync('./db/db.json')
const dbJSON=JSON.parse(dbRaw)

const dataRaw=fs.readFileSync('./db/data.json')
const dataJSON=JSON.parse(dataRaw)


let newData = []
dbJSON.forEach(element=>{
    const dbID=element.unitId.toString()
    // console.log(dbID)
    dataJSON.forEach(data=>{
        const dataID=data.elevatorInfo.Institution_Characteristics.Unitid
        if(dbID===dataID){
            let mergedData = {
                "financialAid" : element.financialAid,
                "retentionAndGraduation": element.retentionAndGraduation,
                "unitId": element.unitId,
                "elevatorInfo": data.elevatorInfo,
                "studentCharges": data.studentCharges
            }
            newData.push(mergedData);
        }
    })
})
console.log(newData)