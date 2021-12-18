
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
function mkBlocks(i) {

if(i===0){
return `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`
} else {
return `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`
}



}




function genarateSpecials(){
let itemCode = ""
let blocksCode = ""
for(i=0; i<specials.length; i++){
itemCode = itemCode + makeCarouselItem(specials[i], i)
blocksCode = blocksCode + mkBlocks(i)


}
carouselItems.innerHTML = itemCode
carouselBlocks.innerHTML = blocksCode

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