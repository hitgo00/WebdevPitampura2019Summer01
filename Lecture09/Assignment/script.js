window.addEventListener("load",function(){

    const addB=this.document.getElementById("addB")
    addB.addEventListener("click",function(){
        const name=document.getElementById("name")
        const mobileNo=document.getElementById("mobile")
        const address=document.getElementById('address')
        const list=document.getElementById("cards")
        list.innerHTML+=`<div  class="card">
        <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_smart_guy-512.png" alt="Avatar" style="width:100%">\
        <div class="container">
          <h4><b>${name.value}</b></h4> 
          <p>${mobile.value}</p> 
          <p>${address.value}</p>
            <input type="button" value="Delete">
        </div>
    </div> `
    })
})