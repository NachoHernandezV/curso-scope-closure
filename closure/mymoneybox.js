function moneybox()
{
    let savemoney=0;
    function countcoins(coins){
        savemoney += coins;
        console.log(`MoneyBox: $${savemoney}`);
    }
    return countcoins;
}

const Bank = moneybox();
Bank(10);
Bank(5);
Bank(12);

const moneyBoxJohn = moneybox();
moneyBoxJohn(5);
moneyBoxJohn(7);
moneyBoxJohn(8); 
