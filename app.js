//upgrades
let clickUpgrades={
pickaxe:{
  item:"pickaxe",
  price:20,
  quantity:0,
  multiplier:1
},
dynamite:{
  item:"dynamite",
  price:300,
  quantity:0,
  multiplier:15
}
};
let automaticUpgrades={
  dwarves:{
    item:"dwarves",
    price:600,
    quantity:0,
    multiplier:20
  },
  mineCarts:{
    item:"minecart",
    price:400,
    quantity:0,
    multiplier:10
  }
}
//upgrade functions
function buy(thing){
  switch(thing){
    case "pickaxe":
      thing = clickUpgrades.pickaxe;
      break;
    case "dwarves":
      thing =  automaticUpgrades.dwarves;
      break;
    case "minecart":
      thing = automaticUpgrades.mineCarts;
      break;
    case "dynamite":
      thing = clickUpgrades.dynamite;
      break;
  }

  if(thing.price<=rubies){
    thing.quantity++;
    rubies-=thing.price;
    thing.price+=(thing.price*0.1)
  }

}

let rubies=0;
let clicks=0;
//button functions
function mine(){
  rubies++;
  rubies+=(clickUpgrades.dynamite.multiplier*clickUpgrades.dynamite.quantity)+(clickUpgrades.pickaxe.multiplier*clickUpgrades.pickaxe.quantity);
}
setInterval(autoMine,5000);
function autoMine(){
  let autoRuby = 0;
  autoRuby+=(automaticUpgrades.dwarves.multiplier*automaticUpgrades.dwarves.quantity)+(automaticUpgrades.mineCarts.multiplier*automaticUpgrades.mineCarts.quantity)
  rubies+=autoRuby;
  update();
}



function clickCount(){
  clicks++
  update();
}
function update(){

  document.getElementById("ruby-count").innerHTML = Math.trunc(rubies).toString();

  document.getElementById("click-count").innerHTML=clicks.toString();

  document.getElementById("pickaxe-count").innerHTML=clickUpgrades.pickaxe.quantity.toString();

  document.getElementById("dynamite-count").innerHTML=clickUpgrades.dynamite.quantity.toString();

  document.getElementById("minecart-count").innerHTML=automaticUpgrades.mineCarts.quantity.toString();

  document.getElementById("dwarf-count").innerHTML=automaticUpgrades.dwarves.quantity.toString();

  document.getElementById("pickaxe-cost").innerHTML=Math.trunc(clickUpgrades.pickaxe.price).toString();

  document.getElementById("dynamite-cost").innerHTML=Math.trunc(clickUpgrades.dynamite.price).toString();

  document.getElementById("minecart-cost").innerHTML=Math.trunc(automaticUpgrades.mineCarts.price).toString();
  
  document.getElementById("dwarf-cost").innerHTML=Math.trunc(automaticUpgrades.dwarves.price).toString();
  if(rubies>=1000000&&rubies<1000900){
    alert("Congrats! You reached 1 million rubies! You can stop now and reload the page, or keep going until you break this thing");

  }
}