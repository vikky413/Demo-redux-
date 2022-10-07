export const CreditAmount = (amount) => {
    return  {
        type:"credit",
        payload:amount
    }
}

export const DabitAmount = (amount)=> {
return {
    type:"dabit",
    payload:amount
}
}