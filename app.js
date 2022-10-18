const datas = async ()=>{
    var linked = await fetch('https://api.twelvedata.com/cryptocurrencies')
   
    
    var currencies = await linked.json()
   
    var cryptoGroup1 = currencies.data.slice(0,20)
   
    var posts =" "
   
    
    
    cryptoGroup1.forEach(element => {
       console.log(element)
       posts += `<div><H2>Currency Symbol : ${element.symbol}</H2>
       <p>Currency quote : ${element.currency_quote}</p>
       <p>Available exchanges : ${element.available_exchanges}</p>
       <input type ="button" value ="Invest" />
        </div>`
    });
   
    document.getElementById("elements").innerHTML = posts
    
   }
   
   datas()