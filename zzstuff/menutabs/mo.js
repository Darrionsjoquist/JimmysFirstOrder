let foodQ = document.getElementById(`Food`)
let drinksQ = document.getElementById(`Drinks`)
let treatsQ = document.getElementById(`Treats`)

let MenuList = document.getElementById(`MenuList`)

function GenFoodEntry(e){
return `
<div>
      <div>
         <h3>${e.EntryName}</h3>
         <h3>${e.EntryPrice}</h3>
      </div>
      <div>
         <p>${e.EntryDiscription}</p>
      </div>

   </div>
`


}


function GenFoodMenu(e){
   FilteredMenu = Menu.filter(function(x){
     return x.EntryType === e.currentTarget.id
   })

   let MenuString = ""
   for(let Entry of FilteredMenu){
      MenuString = MenuString + GenFoodEntry(Entry)
   }
   
   MenuList.innerHTML = MenuString

}

foodQ.addEventListener(`click`, GenFoodMenu)

drinksQ.addEventListener(`click`, GenFoodMenu)

treatsQ.addEventListener(`click`, GenFoodMenu)