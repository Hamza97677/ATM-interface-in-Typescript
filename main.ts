import inquirer from "inquirer"

let AccountBalanace : number = 50000
let pin : number = 1234

console.log("***********WELCOM TO BANK AL HABIB LIMITED*************")
console.log("Please Enter ATM Card")

let user = await inquirer.prompt([{
name : "userpininput",
type : "number",
message : "Enter pin code :",

}])
if(user.userpininput === pin){
   console.log("successfull , what you want sir ")
   let choose = await inquirer.prompt([{
     message : "Select plase what you want?",
     type : "list",
     name : "choosetransaction",
     choices: ["Balance inquiry","Cash Withdraw","Amount Transfer","Cash Deposit","Account Information"],
   }])
if(choose.choosetransaction === "Balance inquiry"){
     console.log(AccountBalanace);
}else if(choose.choosetransaction === "Cash Withdraw"){
    let Withdraw = await inquirer.prompt([{
        message : "Enter amount to withdraw : ",
        type : "number",
        name : "withdrawamount"
    }])
    if(Withdraw.withdrawamount > AccountBalanace){
     console.log("insufficient Blanace")
    }else if(Withdraw.withdrawamount <= AccountBalanace){
        AccountBalanace = AccountBalanace - Withdraw.withdrawamount;
        console.log("Remaining Balanace in Your Account: ",AccountBalanace)
    }
    
}else if(choose.choosetransaction === "Amount Transfer"){
    let transferamount = await inquirer.prompt([{
        message :"please enter Account Number To Transfer Payment :",
        type: "number",
        name : "transferamountaccountnumber"
    },
    {
        message : "Please enter amount in PKR :",
        type: "number",
        name :"transferamountinPKR"
    },
    {
        message : "Select bank ",
        type : "list",
        name : "transferamountbank",
        choices : ["meezan bank","HBL bank","bank Al Habib","allied bank"],
    }
])
AccountBalanace = AccountBalanace - transferamount.transferamountinPKR;
console.log("Amount Transfer Successfully")
console.log("Remaining Amount In your Account",AccountBalanace);
}else if(choose.choosetransaction === "Cash Deposit"){
    let cashdepositamount = await inquirer.prompt([{
        message: "Enter Deposit Amount ",
        type: "number",
        name: "depositamountinPKR"
    }])
    AccountBalanace = AccountBalanace + cashdepositamount.depositamountinPKR
    console.log("Total Amount After deposit in your Account",AccountBalanace)
}else if(choose.choosetransaction === "Account Information"){
    console.log("ACCOUNT TITLE : HAMZA SHAFIQ")
    console.log("ACCOUNT NO : 123456789")
    console.log("IBM NO : HAM123456789")
}
   
}else{
    console.log("Soory Wrong Pin , Please try Again later")
}



