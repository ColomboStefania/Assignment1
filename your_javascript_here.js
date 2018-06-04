
// Variables

var hero = {
  name : "batman",
  heroic : true,
  inventory : ["Knife", "Water", "Food", "Tape", "Bomb", "Explosive"],
  health : 15,
  weapon : {
    type : "FlameThrower",
    damage : 1 + 4
  }
};

var rest = function (creature) {
  creature.health = 10
  return creature
};

function pickUpItem (creature, item) {
  creature.inventory.push (item.type)
  return creature
 }

 function dealDamage (attacker, defender) {
   defender.health = defender.health -  attacker.weapon.damage
   return defender
 }

 //equipWeapon is working on the terminal using hero object -- what is wrong??
 //I should add condition where index should not be > creature array lenght
 //I should create a way to replace the object substituted back on the array
//
 function equipWeapon (creature, index) {
   creature.weapon.type = creature.inventory[index]
  creature.inventory.splice(index,1)
   return creature
 };


 // -- what is wrong??

function doBattle(heroicCreature,creature) {
  if (heroicCreature.heroic !== true) {return null} else{
  var i = 0
  var j = 0
  while (creature.health > 0 && heroicCreature.health > 0)
    if (i<=j)
    {
      dealDamage (heroicCreature,creature);
      i++;
    }
    else {
      dealDamage (creature,heroicCreature);
      j++;
    }
    if (heroicCreature.health > 0) {
      return heroicCreature.health}
      else {
        window.alert("YOUR HERO IS DEAD")}
      }
  }

  // UI

var getBed = document.getElementById ("callrest")
  getBed.addEventListener('click', function() {
    rest(hero);
      console.log(rest(hero));
  });



var getGun = document.getElementById ("callpickUpItem")
  getGun.addEventListener('click', function() {
    var poison = {
    type: "supergun",
    damage: 3 + 4 }

    pickUpItem (hero, poison)
      console.log(pickUpItem (hero, poison));
  });

var getDoBattle = document.getElementById ("callenemy")
  getDoBattle.addEventListener('click', function() {
    var joker = {
    health : 7,
    weapon : {
      type : "flamethrower",
      damage : 0 + 7
    } };
    doBattle(hero, joker)
      console.log(doBattle(hero, joker));
  });

var getEquipWeapon = document.getElementById ("callweapon")
  getEquipWeapon .addEventListener('click', function() {
    var askIndex = function () {
      window.prompt("Which gun do you want to select? Type the index number!")
    }
    let indexFromUser= parseInt(askIndex());
    equipWeapon(hero, indexFromUser)
      console.log(equipWeapon(hero, indexFromUser));
  });



function displayStats(creature) {
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode(" Name : "+creature.name + " Health: "+ creature.health + " Weapon Damage: " + creature.weapon.type + " Weapon type: " + creature.weapon.type);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  var someExistingElement = document.getElementById("showscore")
  someExistingElement.appendChild(newDiv);
}

function displayInventory(creature) {
    var y = []
    for (var i = 0; i < creature.inventory.length; i++)  {
      y[i] = creature.inventory[i]
    }
  var newDiv1 = document.createElement("div1");
  // and give it some content
  var newContent1 = document.createTextNode(y);
  // add the text node to the newly created div
  newDiv1.appendChild(newContent1);

  var someExistingElement1 = document.getElementById("showscore1")
  someExistingElement1.appendChild(newDiv1);
}

var button = document.getElementById ("button1")
  button.addEventListener('click',  form);

  function form() {
  window.prompt ("Change the name of your hero!")
  }


displayStats(hero);
displayInventory(hero);
