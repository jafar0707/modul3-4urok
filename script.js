let myFunction = async () => {
    console.log('подожди тупой.......');





    let res = await fetch("https://randomuser.me/api/")

    let data = await res.json()

    let users = data.result[0]

    let div = document.querySelector("div");
    div.innerHTML = ''
    
     div.innerHTML +=`
    <div>
    <img src=${users.picture.large} alt=""/>
    <h1>${users.email}</h1>
    <b>${user.geneder}</b>
    
    <div>
     
     `
     
     


















}