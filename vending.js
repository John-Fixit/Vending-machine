        var spc = 150;
    var spb = 180;
    var spf = 200;
    var sph = 500;
    function coke(){
        var price = Number(howMany1.value * spc)
        Coke.value="you are about to purchase coke at rate of ₦" + price
    }
    function purchase(){
        var price = Number(howMany1.value * spc)
        if (debit.value<price){
            debit.style.color='red'
            debit.value='No enough amount to complete the purchase'
        }
        else if(debit.value>=price){
            debit.value = Number(debit.value) - price
        }
    }
    function apple(){
        var money = Number(howMany2.value * spb)
        BigiApple.value="you are about to purchase Bigi Apple at rate of ₦" + money
    }
    function purchase2(){
        var money = Number(howMany2.value * spb)
        if (debit.value<money){
            debit.style.color='red'
            debit.value='No enough amount to complete the purchase'
        }
        else if(debit.value>=money){
            debit.value = Number(debit.value) - money
        }
    }
    function chapman(){
        var card = Number(howMany3.value * spb)
        BigiChapman.value="you are about to purchase coke at rate of ₦" + card
    }
    function purchase3(){
        var card= Number(howMany3.value * spb)
        if (debit.value<card){
            debit.style.color='red'
            debit.value='No enough amount to complete the purchase'
        }
        else if(debit.value>=card){
            debit.value = Number(debit.value) - card
        }
    }
    function less(){
        var cof = Number(howMany4.value * spf)
        FearLess.value="you are about to purchase Fearless at ₦" + cof
    }
    function purchase4(){
        var cof = Number(howMany4.value * spf)
        if (debit.value<cof){
            debit.style.color='red'
            debit.value='No enough amount to complete the purchase'
        }
        else if(debit.value>=cof){
            debit.value = Number(debit.value) - cof
        }
    }
    function horl(){
        var coins = Number(howMany4.value *  sph)
        Horlandia.value="you are about to purchase Horlandia at rate of ₦" + coins
    }
    function purchase5(){
        var coins = Number(howMany5.value *  sph)
        if (debit.value<coins){
            debit.style.color='red'
            debit.value='No enough amount to complete the purchase'
        }
        else if(debit.value>=coins){
            debit.value = Number(debit.value) - coins
        }
    }


    function totalPurchase(){
        var price = Number(howMany1.value * spc);
        var money = Number(howMany2.value * spb);
        var card = Number(howMany3.value * spb);
        var cof = Number(howMany4.value * spf);
        var coins = Number(howMany4.value *  sph)
        totalPay.value = price + money + card + cof + coins
    }
    function deduct(){
        var price = Number(howMany1.value * spc);
        var money = Number(howMany2.value * spb);
        var card = Number(howMany3.value * spb);
        var cof = Number(howMany4.value * spf);
        var coins = Number(howMany4.value *  sph)
        totalPay.value = price + money + card + cof + coins
        if(debit.value>=totalPay.value){
            debit.value=Number(debit.value) - Number(totalPay.value)
        }
        else{
            debit.value='No enough amount to complete the purchase'
        }

    }