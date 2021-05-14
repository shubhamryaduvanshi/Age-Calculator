function calculateAge(){
   var dateOfBirth=document.getElementById('pickdob').value;
   var userDate=Date.parse(dateOfBirth);
  //  console.log(userDate);
    var currentDate=Date.now();
   // console.log(currentDate)

    var milliSecond=currentDate-userDate;
    var min=1000*60;
    var hrs=min*60;
    var day=hrs*24;
    var year=day*365;
    
    var age=Math.round(milliSecond / year)
    var month=age*12;
    var days=age*365;
    var hour=Math.round(milliSecond/hrs);
    var sec=Math.round(milliSecond/1000);

    // display output 

    document.querySelector('#showResult').innerHTML=(`Years : <b>${age} </b><br>
    Month : <b>${month}</b> <br>
    Days : <b>${days}</b> <br>
    Hours : <b>${hour}</b> <br>
    Seconds: <b>${sec} </b><br><br>
    <b>Age is :</b> ${age} yrs, ${month}month, ${days} dys, ${hour} hrs
    `);
  
   
  
}