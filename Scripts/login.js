document.getElementById("loginBtn").addEventListener("click", function(event){
    event.preventDefault();
    const userNumber = document.getElementById("userNumber").value;
    const userPin = document.getElementById("userPin").value;
    
    
    if( userNumber.length === 11){
        if( parseInt(userPin) === 1122){
            window.location.href = "./dash.html"
        }
        else{
            console.log("Invalid PIN");
        }
    }
    else{
        console.log("Invalid Number");
    }
})