
document.getElementById("outBtn").addEventListener('click', function(event){
    event.preventDefault();
    const outAmount = document.getElementById("outAmount").value;
    const outPin = document.getElementById("outPin").value;
    const mainBalance = document.getElementById("mainBalance").innerText;
    console.log("working");

    if(parseInt(outPin) === 1122){
        const newBalance = mainBalance - outAmount;
        document.getElementById("mainBalance").innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('p-5', 'bg-white', 'shadow-lg', 'rounded-lg', 'mx-5', 'my-4');
        div.innerHTML = `
            <h2 id="trxName" class="text-xl font-semibold">Cash Out</h2>
            <div class="flex gap-3">
            <p id="trxAddB">Cashout: ${outAmount}</p>
            <p class="trxNewB">New Balance: ${newBalance}</p>
            </div>
            <p id="trxDate" class="text-[#29E1E7]">Transactions Date: ${new Date().toLocaleString()} </p>
        `
        document.getElementById("trxContainer").appendChild(div);

    }
    else{
        alert("Enter right PIN")
    }

})