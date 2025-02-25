
document.getElementById('addBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = parseInt(document.getElementById('addAmount').value);
    const addPin = parseInt(document.getElementById('addPin').value);
    const mainBalance = parseInt(document.getElementById('mainBalance').innerText);
    ;
    if( addPin === 1122){
        let totalBalance = mainBalance + addAmount;
        document.getElementById("mainBalance").innerText = totalBalance;
    }
    else{
        alert("Enter right PIN Number")
    }


})