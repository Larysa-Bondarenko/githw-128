   
   function task3(){
       const flashDriveSize = parseFloat(prompt('Enter size of your flash drive in gigabytes.'));
       const numberOfFiles = Math.floor(flashDriveSize * 1024 / 820);
       alert(`Your flash drive may hold ${numberOfFiles} file(s) of 820 Mb.`);
   }
   
   function task4(){
       const amountMoney = parseFloat(prompt('Enter amount of moneyin UAH want to spend'));
       const price_1_chocolate = parseFloat(prompt('Enter price of one chocolate in UAH'));
       const numberOfChocolates = Math.trunc(amountMoney / price_1_chocolate);
       const restOfMoney = amountMoney - numberOfChocolates * price_1_chocolate;
              
       alert(`You can buy ${numberOfChocolates} chocolate(s)),
        your change is ${restOfMoney.toFixed(2)} UAH. `);
   }
   
   function task5(){
       const _3digitNumber = parseInt(prompt('Enter a three-digit number'), 10);
       const hundreds = parseInt((_3digitNumber / 100), 10);
       const tens = parseInt(((_3digitNumber / 10) % 10), 10);
       const units = parseInt((_3digitNumber % 10), 10);
       const reverseNum = units * 100 + tens * 10 + hundreds;
       alert(`The reverse number is ${reverseNum}.`);
   }
   
   function task6(){
       const deposit = parseFloat(prompt('Enter the ammount of money you want to deposit in UAH.'));
       const interestRate = 5;  //or  0.05?
       const numberMonths = 2;  
       const _2monthInterest = deposit / 100 * interestRate / 12 * numberMonths;
       alert(` The amount of interest counted after 2 months is  ${_2monthInterest.toFixed(2)} UAH.`);
   }
   
   