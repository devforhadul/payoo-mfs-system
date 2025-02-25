document.getElementById("cashOut").style.display = 'none';
document.getElementById("trxBox").style.display = 'none';
document.getElementById("addMoneyBtn").addEventListener('click', function(){

    document.getElementById("addMoney").style.display = 'block';
    document.getElementById("cashOut").style.display = 'none';
    document.getElementById("trxBox").style.display = 'none';

})

document.getElementById("cashOutBtn").addEventListener('click', function(){
    document.getElementById("cashOut").style.display = 'block';
    document.getElementById("addMoney").style.display = 'none';
    document.getElementById("trxBox").style.display = 'none';
    
})

document.getElementById("trxBtn").addEventListener('click', function(){
    document.getElementById("cashOut").style.display = 'none';
    document.getElementById("addMoney").style.display = 'none';
    document.getElementById("trxBox").style.display = 'block';
})




document.getElementById("logOutBtn").addEventListener('click', function(){
    window.location.href = './index.html'
})

