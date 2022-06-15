const obj1=[{
    "elevatorInfo": {
        "Institution_Characteristics": {
            "Unitid": "139384",
            "Name": "Georgia Northwestern Technical College",
            "City": "Rome",
            "State": "GA",
            "Web_Address": "www.gntc.edu/",
            "Distance_Learning": "Offers undergraduate courses and/or programs"
        }
    }
}]

const obj2=[{
    "studentCharges": {
        "Cost": {
            "Published_Tuition_And_Required_Fees": "",
            "In-state": "$3,062",
            "Out-of-state": "$5,462",
            "Books_And_Supplies": "$1,500",
            "Off-campus_(not_With_Family)_Room_And_Board": "$5,528",
            "Off-campus_(not_With_Family)_Other_Expenses": "$5,191",
            "Off-campus_(with_Family)_Other_Expenses": "$2,431",
            "Total_Cost": "",
            "Off-campus_(not_With_Family),_In-state": "$15,281",
            "Off-campus_(not_With_Family),_Out_Of_State": "$17,681",
            "Off-campus_(with_Family),_In-state": "$6,993",
            "Off-campus_(with_Family),_Out-of-state": "$9,393"
        }
    }
}]
console.log(obj1.push(obj2))