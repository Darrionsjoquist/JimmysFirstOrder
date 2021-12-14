
let carouselItems = document.getElementById("carouselItems")
let carouselBlocks = document.getElementById("carouselBlocks")



function makeCarouselItem (specialObject, index){
   return `
   <div class="carousel-item ${index===0?"active":""}">
      <img src="${specialObject.specialImg}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
         <h5>${specialObject.specialName}</h5>
         <p>${specialObject.specialDisc}</p>
      </div>
   </div>
   `

}





function genarateSpecials(){
let itemCode = ""
let blockCode = ""
let blockNum = 0
for(i=0; i<specials.length; i++){
itemCode = itemCode + makeCarouselItem(specials[i], i)
}
carouselItems.innerHTML = itemCode


}




genarateSpecials()


























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