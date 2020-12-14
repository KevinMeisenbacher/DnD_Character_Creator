/* Author: Kevin Meisenbacher */
// Base Backgrounds
var charName = document.getElementById('charName');
var charClass = document.getElementById('charClass');
var background = document.getElementById('charBackground');
var playerName = document.getElementById('playerName');
var faction = document.getElementById('faction');
var race = document.getElementById('race');
var alignment = document.getElementById('alignment');
var level = document.getElementById('level');
var xp = document.getElementById('xp');
var dciNum = document.getElementById('dciNum');

// Base Stats
var strength = document.getElementById('strength');
var dex = document.getElementById('dex');
var constitution = document.getElementById('constitution');
var intel = document.getElementById('intel');
var wisdom = document.getElementById('wisdom');
var charisma = document.getElementById('charisma');

// Bonuses
var inspiration = document.getElementById('inspiration');
var profBonus = document.getElementById('profBonus');

var strBonus = document.getElementById('strBonus');
var dexBonus = document.getElementById('dexBonus');
var varBonus = document.getElementById('varBonus');
var intelBonus = document.getElementById('intelBonus');
var wisdomBonus = document.getElementById('wisdomBonus');
var charBonus = document.getElementById('charBonus');

// Skills
var acrobatics = document.getElementById('acrobatics');
var animalHandling = document.getElementById('animalHandling');
var arcana = document.getElementById('arcana');
var athletics = document.getElementById('athletics');
var deception = document.getElementById('deception');
var history = document.getElementById('history');
var intimidation = document.getElementById('intimidation');
var insight = document.getElementById('insight');
var investigation = document.getElementById('investigation');
var medicine = document.getElementById('medicine');
var nature = document.getElementById('nature');
var perception = document.getElementById('perception');
var performance = document.getElementById('performance');
var persuasion = document.getElementById('persuasion');
var religion = document.getElementById('religion');
var sleightOfHand = document.getElementById('sleightOfHand');
var stealth = document.getElementById('stealth');
var survival = document.getElementById('survival');

var passiveWisdom = document.getElementById('passiveWisdom');

// Other proficiencies & languages
var miscProfs = document.getElementById('miscProf1');
for (var i=1; i<11; i++) miscProfs = document.getElementById('miscProf'+[i]);

// Armour class, initiative, speed
var armourClass = document.getElementById('armourClass');
var initiative = document.getElementById('initiative');
var speed = document.getElementById('speed');

// HP counters
var maxHP = document.getElementById('maxHP');
var currentHP = document.getElementById('currentHP');
var tempHP = document.getElementById('tempHP');

// Hit dice
var hitDice = document.getElementById('hitDice');

// Saving throws
var successThrows = document.getElementById('succ1');
var failThrows = document.getElementById('fail1');
var deathSaves = document.getElementById('save1');
for (var i=1; i<4; i++) successThrows = document.getElementById('succ'[i]);
for (var i=1; i<4; i++) failThrows = document.getElementById('fail'[i]);
for (var i=1; i<4; i++) deathSaves = document.getElementById('save'[i]);

// Attack rolls
var atkNames = document.getElementById('atkName1');
var atkBonus = document.getElementById('atkBonus1');
var atkValues = document.getElementById('atkDmg1');
for (var i=1; i<4; i++) atkNames = document.getElementById('atkName'[i]);
for (var i=1; i<4; i++) atkBonus = document.getElementById('atkBonus'[i]);
for (var i=1; i<4; i++) atkValues = document.getElementById('atkDmg'[i]);

// Attacks & Spellcasting
var atkInputs = document.getElementById('atkInput1');
for (var i=1; i<13; i++) atkInputs = document.getElementById('atkInput'[i]);

// Equipment
var equipment = document.getElementById('item1');
for (var i=1; i<13; i++) equipment = document.getElementById('item'[i]);

// Personality traits, ideals, bonds, flaws
// Leaving this up to whoever is smart enough to make an array with a text area input

//Equipment
var traits = document.getElementById('trait1');
for (var i=1; i<31; i++) traits = document.getElementById('trait'[i]);

// Autogenerate stats
/*if (race.selectedIndex == 'dragonborn') {
	strength += 2;
	charisma += 1;
}
else if (race.selectedIndex == 'dwarf') {
	constitution += 2;
}*/

function createCharacter() {
	var character = {
		charName, charClass, background, playerName, faction, 
		race, alignment, level, xp, dciNum,
		strength, dex, constitution, intel, wisdom, charisma,
		inspiration, profBonus,
		strBonus, dexBonus, varBonus, intelBonus, wisdomBonus, charBonus,
		acrobatics, animalHandling, arcana, athletics,
		deception, history, intimidation, insight, investigation,
		medicine, nature, perception, performance, persuasion,
		religion, sleightOfHand, stealth, survival,
		passiveWisdom, 
		armourClass, initiative, speed, maxHP, currentHP, tempHP, hitDice,
		successThrows, failThrows, deathSaves,
		atkNames, atkBonus, atkValues,
		atkInputs, equipment, traits
	};
	characterName.textContent = document.getElementById('characterName')
}

//var charName = document.getElementById('charName').value;
document.getElementById('name').textContent = "Hey "+ charName +" that is an awesome name you got there !!";
        
var charClass = document.getElementById('charClass').value;
document.getElementById('class').textContent = "Hey "+ charClass +" ";
         
var background = document.getElementById('charBackground').value;
document.getElementById('bg').textContent = "Hey "+ background +" ";

var playerName = document.getElementById('playerName').value;
document.getElementById('plName').textContent = "Hey "+ playerName +" ";

var level = document.getElementById('level').value;
document.getElementById('level').textContent = "Hey "+ level +" ";

var xp = document.getElementById('xp').value;
document.getElementById('xp').textContent = "Hey "+ xp +" ";

//const strength = document.getElementById('strength').value;
document.getElementById('strng').textContent = "Hey "+ strength +" ";

//const intelBonus = document.getElementById('intelBonus').value;
document.getElementById('intel').textContent = "Hey "+ intelBonus +" ";

//const wisdomBonus = document.getElementById('wisdomBonus').value;
document.getElementById('wis').textContent = "Hey "+ wisdomBonus +" ";

//const charBonus = document.getElementById('charBonus').value;
document.getElementById('charBonus').textContent = "Hey "+ charBonus +" ";
