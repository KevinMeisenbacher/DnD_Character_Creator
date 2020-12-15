/* Author: Kevin Meisenbacher */
// Base Backgrounds

/* Commented out code is for future updates

// Other proficiencies & languages
for (var i=1; i<11; i++) const miscProfs = document.getElementById('miscProf'[i]);

// Armour class, initiative, speed
const armourClass = document.getElementById('armourClass');
const initiative = document.getElementById('initiative');
const speed = document.getElementById('speed');

// HP counters
const maxHP = document.getElementById('maxHP');
const currentHP = document.getElementById('currentHP');
const tempHP = document.getElementById('tempHP');

// Hit dice
const hitDice = document.getElementById('hitDice');

// Saving throws
for (var i=1; i<4; i++) const successThrows = document.getElementById('succ'[i]);
for (var i=1; i<4; i++) const failThrows = document.getElementById('fail'[i]);
for (var i=1; i<4; i++) const deathSaves = document.getElementById('save'[i]);

// Attack rolls
for (var i=1; i<4; i++) const atkNames = document.getElementById('atkName'[i]);
for (var i=1; i<4; i++) const atkBonus = document.getElementById('atkBonus'[i]);
for (var i=1; i<4; i++) const atkValues = document.getElementById('atkDmg'[i]);

// Attacks & Spellcasting
for (var i=1; i<13; i++) const atkInputs = document.getElementById('atkInput'[i]);

// Equipment
for (var i=1; i<13; i++) const equipment = document.getElementById('item'[i]);

// Personality traits, ideals, bonds, flaws
// Leaving this up to whoever is smart enough to make an array with a text area input

//Equipment
for (var i=1; i<31; i++) const traits = document.getElementById('trait'[i]);*/

function createCharacter() {
	// Validation by Lakshika		
	var nameError = document.getElementById('nameError');
	var charName = document.getElementById('charName').value;
	if (charName == '') 
		document.getElementById('nameError').innerHTML = 'A character needs a name';
	else {
		document.getElementById('nameError').innerHTML = '';
		document.getElementById('name').innerHTML = charName;
	}

	var classError = document.getElementById('classError');
	var charClass = document.getElementById('charClass').value;
	if (charClass == '') 
		document.getElementById('classError').innerHTML = 'Everyone has a class';
	else {
		document.getElementById('classError').innerHTML = '';
		document.getElementById('class').innerHTML = charClass;
	}

	var bgError = document.getElementById('bgError');
	var charBG = document.getElementById('charBackground').value;
	if (charBG == '') 
		document.getElementById('bgError').innerHTML = 'Everyone comes from somewhere';
	else {
		document.getElementById('bgError').innerHTML = '';
		document.getElementById('bg').innerHTML = charBG;
	}

	var plNameError = document.getElementById('plNameError');
	var playerName = document.getElementById('playerName').value;
	if (playerName == '') 
		document.getElementById('plNameError').innerHTML = 'Everyone comes from somewhere';
	else {
		document.getElementById('plNameError').innerHTML = '';
		document.getElementById('plName').innerHTML = playerName;
	}
	
	var faction = document.getElementById('charFaction').value;
	document.getElementById('faction').innerHTML = faction;

	var raceError = document.getElementById('raceError');
	var race = document.getElementById('charRace').value;
	if (race == '') 
		document.getElementById('raceError').innerHTML = 'Everyone has some sort of form';
	else {
		document.getElementById('raceError').innerHTML = '';
		document.getElementById('race').innerHTML = race;
	}
	
	var alignError = document.getElementById('alignError');
	var alignment = document.getElementById('charAlign').value;
	if (alignment == '') 
		document.getElementById('bgError').innerHTML = 'Everyone comes from somewhere';
	else {
		document.getElementById('alignError').innerHTML = '';
		document.getElementById('alignment').innerHTML = alignment;
	}
	
	var level = document.getElementById('level').value;
	document.getElementById('lv').innerHTML = level;
	
	var experience = document.getElementById('experience').value;
	document.getElementById('xp').innerHTML = experience;
	
	var strength = document.getElementById('strInput').value;
	document.getElementById('str').innerHTML = strength;
	
	var dexterity = document.getElementById('dexInput').value;
	document.getElementById('dex').innerHTML = dexterity;
	
	var constitution = document.getElementById('consInput').value;
	document.getElementById('cons').innerHTML = constitution;
	
	var intelligence = document.getElementById('intelInput').value;
	document.getElementById('intel').innerHTML = intelligence;
	
	var wisdom = document.getElementById('wisInput').value;
	document.getElementById('wis').innerHTML = wisdom;
	
	var charisma = document.getElementById('chrInput').value;
	document.getElementById('chr').innerHTML = charisma;
	
	if (nameError.innerHTML == ''
		&&	classError.innerHTML == ''
		&&	bgError.innerHTML == ''
		&&	plNameError.innerHTML == ''
		&&	raceError.innerHTML == ''
		&&	alignError.innerHTML == '') {
		document.getElementById('form').style.display = 'none';
		document.getElementById('topFields').style.display = 'flex';
		document.getElementById('sheet').style.display = 'flex';
		document.getElementById('col1').style.display = 'flex';
		var characters = []; 
		for (var i=1; i<characters.length; i++) {
			characters[i] = {
				"name" : charName,
				"class" : charClass,
				"background" : charBG,
				"playerName" : playerName,
				"faction" : faction,
				"alignment" : alignment
			};
		}
		
		// Kevin's code from here
		var select = document.getElementById('selector');
		for (var i=1; i<characters.length; i++) {
			var character = characters[i];
			var newCharacter = document.createElement('newChar');
			newCharacter.textContent = newCharacter;
			newCharacter.value = newCharacter;
			newCharacter.appendChild(character);
		}
	}
}
// Method called at the press of "new character" button
function newCharacter() {
	document.getElementById('form').style.display = 'flex';
	document.getElementById('topFields').style.display = 'none';
	document.getElementById('sheet').style.display = 'none';
	document.getElementById('col1').style.display = 'none';
}