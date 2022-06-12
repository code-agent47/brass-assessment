import axios from '../axios';

export const isAmountFieldValid = (value: string) => {
    let errorMsg;
    if(value !== ""){
        errorMsg = false;
        if(isAmountValid(value)){
            errorMsg = false
        }
        else{
            errorMsg = "Enter a valid amount between the range of 100 to 10,000,000";
        }
    }
    else{
        errorMsg = "Field cannot be left blank";
    }
    return errorMsg;
}

function isAmountValid(value: string){
    let nameRegEX = /^[0-9]+$/;
    if (value.match(nameRegEX)){
        if(Number(value) >= 100 && Number(value) <= 10000000){
            return true
        }
    }
    return false;
}

export const isOTPFieldValid = (value: string) => {
    let errorMsg;
    if(value !== ""){
        errorMsg = false;
        if(isOTPValid(value)){
            errorMsg = false
        }
        else{
            errorMsg = "Enter a valid OTP range";
        }
    }
    else{
        errorMsg = "Field cannot be left blank";
    }
    return errorMsg;
}

function isOTPValid(value: string){
    let nameRegEX = /^[0-9]+$/;
    if (value.match(nameRegEX)){
        if(value.length === 6){
            return true
        }
    }
    return false;
}

export const isAccountNumberFieldValid = async (value: string, code: string) => {
    let errorMsg;
    if(value !== ""){
        errorMsg = false;
        let response = await isAccountNumberValid(value, code);
        if(response){
            errorMsg = false
        }
        else{
            errorMsg = "Enter a valid account number, make sure you've selected the correct bank";
        }
    }
    else{
        errorMsg = "Field cannot be left blank";
    }
    console.log(errorMsg)
    return errorMsg;
}

async function isAccountNumberValid(value: string, code: string){
    let nameRegEX = /^[0-9]+$/;
    if (value.match(nameRegEX)){
        if(value.length === 10){
            let responseStatus:boolean = false;
            try{
                const response = await axios.get(`/bank/resolve?account_number=${value}&bank_code=${code}`);
                if(response){
                   responseStatus = response.data.status;
                }
            }
            catch(error){
                responseStatus = false;
            }
            finally{
                return responseStatus;
            }
        }
    }
    return false;
}