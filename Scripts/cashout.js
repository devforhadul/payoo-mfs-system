
document.getElementById("outBtn").addEventListener('click', function(event){
    event.preventDefault();
    const outAmount = document.getElementById("outAmount").value;
    const outPin = document.getElementById("outPin").value;
    const mainBalance = document.getElementById("mainBalance").innerText;
    console.log("working");

    if(parseInt(outPin) === 1122){
        const decriseBalance = mainBalance - outAmount;
        document.getElementById("mainBalance").innerText = decriseBalance;
    }
    else{
        alert("Enter right PIN")
    }

})