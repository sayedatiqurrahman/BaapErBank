// Deposit Function
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInp = document.getElementById('deposit-field')
    const yourDeposit = depositInp.value;
    const convDepo = parseFloat(yourDeposit);

// deposit balance
    const depositMony = document.getElementById('deposit-money')
    const prevDepo = depositMony.innerText;
    const convPrevDepo = parseFloat(prevDepo);


    // clear the deposit field
    depositInp.value = ''

    if (isNaN(convDepo)) {
        alert("❌Please Provide a valid Number!!❌")
        return;
    }

    const totalDepo = convPrevDepo + convDepo;
// set value in the html file
    depositMony.innerText = totalDepo;


    // add the value with balance;

    const balanceDep = document.getElementById('balance');
    const yourBalance = balanceDep.innerText;
    const convYourBalance = parseFloat(yourBalance);

    // sum the value with balance
    const sumBalance = convYourBalance + convDepo;
    balanceDep.innerText = sumBalance;



})

// Withdraw Code is Here


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const yourWithdraw = withdrawField.value;
    const convYourWithdraw = parseFloat(yourWithdraw);

    const prevwithdraw = document.getElementById('withdraw-money');
    const getPrevWitrhdraw = prevwithdraw.innerText;
    const convGetPrevWitrhdraw = parseFloat(getPrevWitrhdraw);

    //   balance
    const balanceDep = document.getElementById('balance');
    const yourBalance = balanceDep.innerText;
    const convYourBalance = parseFloat(yourBalance);


    withdrawField.value = '';

    // error for empty or without number input
    if (isNaN(convYourWithdraw)) {
        alert('⚠⚠Please Provide a valid Number⚠⚠')
        return;
    }

    // Error for withdraw number more than balance
    if (convYourBalance < convYourWithdraw) {
        alert('Tor Baper Bank e Ato taka nai foinni...')
        return;
    }

    const totalWithdraw = convYourWithdraw + convGetPrevWitrhdraw;
// Set value
    prevwithdraw.innerText = totalWithdraw;





    // substruction the value with balance
    const subBalance = convYourBalance - convYourWithdraw;
    balanceDep.innerText = subBalance;


})