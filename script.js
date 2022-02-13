function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const depositAmountText = parseFloat(depositAmount);

    depositInput.value = "";
    return depositAmountText;
}

document.getElementById('deposit-btn').addEventListener('click', function (){
    // 1. input Deposit 
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = depositInput.value;
    // const depositAmountText = parseFloat(depositAmount);
    const depositAmountText = getInputValue();
    
    // 2. View website area 
    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositAmount = totalDeposit.innerText;
    const totalDepositAmountText = parseFloat(totalDepositAmount);

    // 3. View Main Balence area 
    const totalBalence = document.getElementById('total-balance');
    const totalBalenceAmount = totalBalence.innerText;
    const totalBalenceAmountText = parseFloat(totalBalenceAmount);

    // Depost 
    totalDeposit.innerText = totalDepositAmountText + depositAmountText;

    // Balence 
    totalBalence.innerText = depositAmountText + totalBalenceAmountText;


    // console.log(depositAmountText);

    
});

document.getElementById('withdrow-btn').addEventListener('click', function (){
    // input Withdrow 
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmount = withdrowInput.value;
    const withdrowAmountText = parseFloat(withdrowAmount);
    
    // View Website Area 
    const totalWithdrow = document.getElementById('total-withdrow');
    const totalWithdrowAmount = totalWithdrow.innerText;
    const totalWithdrowAmountText = parseFloat(totalWithdrowAmount);

    // 3. View Main Balence area 
    const totalBalence = document.getElementById('total-balance');
    const totalBalenceAmount = totalBalence.innerText;
    const totalBalenceAmountText = parseFloat(totalBalenceAmount);

    // Depost 
    totalWithdrow.innerText = withdrowAmountText + totalWithdrowAmountText;

    // Balence 
    totalBalence.innerText = totalBalenceAmountText - withdrowAmountText;

    withdrowInput.value = '';

});