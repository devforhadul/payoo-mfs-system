
document.getElementById('addBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = parseInt(document.getElementById('addAmount').value);
    const addPin = parseInt(document.getElementById('addPin').value);
    const mainBalance = parseInt(document.getElementById('mainBalance').innerText);


    if (addPin === 1122) {
        let newBalance = mainBalance + addAmount;
        document.getElementById("mainBalance").innerText = newBalance;
        // trx
        const div = document.createElement('div');
        div.classList.add('p-5', 'bg-white', 'shadow-lg', 'rounded-lg', 'mx-5', 'my-4')
        div.innerHTML = `
            <h2 id="trxName" class="text-xl font-semibold">Add Money</h2>
            <div class="flex gap-3">
            <p id="trxAddB">Added: ${addAmount}</p>
            <p class="trxNewB">New Balance: ${newBalance}</p>
            </div>
            <p id="trxDate" class="text-[#29E1E7]">Transactions Date: ${new Date().toLocaleString()} </p>
        `
        document.getElementById("trxContainer").appendChild(div);

        /*         const div = document.createElement('div');
                    div.classList.add('bg-white', 'p-4', 'my-4', 'shadow', 'rounded-lg');
                    div.innerHTML = `
                        <h4 class="text-xl font-bold">Add Money</h4>
                        <p>Added: ${addMoney} Tk. New Balance: ${newBalance}</p>
                        <p class="text-emerald-400 text-sm">Transaction Date: ${new Date().toLocaleString()}</p>
                    `
        
                    document.getElementById('transaction-container').appendChild(div); */
    }
    else {
        alert("Enter right PIN Number")
    }




})