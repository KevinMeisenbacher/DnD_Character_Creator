/* Author: Kevin Meisenbacher */

// Automatically roll a d6 to allocate points to each stat
var stat1 = parseInt(Math.random() * (18-3));
var stat2 = parseInt(Math.random() * (18-3));
var stat3 = parseInt(Math.random() * (18-3));
var stat4 = parseInt(Math.random() * (18-3));
var stat5 = parseInt(Math.random() * (18-3));
var stat6 = parseInt(Math.random() * (18-3));
const maxStats = stat1+stat2+stat3+stat4+stat5+stat6;
var stats = maxStats;

// Initialize ability scores
var strength = 3;	
var dexterity = 3;
var constitution = 3;
var intelligence = 3;
var wisdom = 3;
var charisma = 3;

// Initialize ability modifiers
var strBonus = 0;
var dexBonus = 0;
var conBonus = 0;
var intBonus = 0;
var wisBonus = 0;
var chaBonus = 0;

// Use ability modifiers to set skills
var acrobatics = dexBonus;
var animalHandling = wisBonus;
var arcana = intBonus;
var athletics = strBonus;
var deception = chaBonus;
var history = intBonus;
var insight = wisBonus;
var intimidation = chaBonus;
var investigation = intBonus;
var medicine = wisBonus;
var nature = intBonus;
var perception = wisBonus;
var performance = chaBonus;
var persuasion = chaBonus;
var religion = intBonus;
var sleightOfHand = dexBonus;
var stealth = dexBonus;
var survival = wisBonus;

// Setup XP value
var experience = 0;

// Set up an array for characters and a starting id for them
var characters = [];
var id = 1;

function initialize() {
	// Make the form appear at the start
	document.getElementById('form').style.display = 'flex';
	
	// Prepopulate abililty fields with initial values
	document.getElementById('strInput').value = 3;
	document.getElementById('dexInput').value = 3;
	document.getElementById('conInput').value = 3;
	document.getElementById('intInput').value = 3;
	document.getElementById('wisInput').value = 3;
	document.getElementById('chaInput').value = 3;
	document.getElementById('statsLeft').innerHTML = maxStats;
	if (document.getElementById('charRace').value == 'dragonborn') {
		strength = 5;
		charisma = 5;
		document.getElementById('strInput').value = strength;
		document.getElementById('chaInput').value = charisma;
	}
	else if (document.getElementById('charRace').value == 'dwarf') {
		constitution = 5;
		document.getElementById('conInput').value = constitution;
	}
	else if (document.getElementById('charRace').value == 'elf') {
		dexterity = 5;
		document.getElementById('dexInput').value = dexterity;
	}
	else if (document.getElementById('charRace').value == 'gnome') {
		intelligence = 5;
		document.getElementById('intInput').value = intelligence;
	}
	else if (document.getElementById('charRace').value == 'halfElf') {
		charisma = 5;
		stats += 2;
		document.getElementById('chaInput').value = charisma;
		document.getElementById('statsLeft').innerHTML = stats;
	}
	else if (document.getElementById('charRace').value == 'halfling') {
		dexterity = 5;
		document.getElementById('dexInput').value = dexterity;
	}
	else if (document.getElementById('charRace').value == 'halfOrc') {
		strength = 5;
		constitution = 4;
		document.getElementById('strInput').value = strength;
		document.getElementById('conInput').value = constitution;
	}
	else if (document.getElementById('charRace').value == 'human') {
		strength = 4;
		dexterity = 4;
		constitution = 4;
		intelligence = 4;
		wisdom = 4;
		charisma = 4;
		document.getElementById('strInput').value = strength;
		document.getElementById('dexInput').value = dexterity;
		document.getElementById('conInput').value = constitution;
		document.getElementById('intInput').value = intelligence;
		document.getElementById('wisInput').value = wisdom;
		document.getElementById('chaInput').value = charisma;
	}
	else if (document.getElementById('charRace').value == 'orc') {
		strength = 5;
		constitution = 4;
		document.getElementById('strInput').value = strength;
		document.getElementById('conInput').value = constitution;
	}
	else if (document.getElementById('charRace').value == 'tiefling') {
		charisma = 5;
		intelligence = 4;
		document.getElementById('chaInput').value = charisma;
		document.getElementById('intInput').value = intelligence;
	}
}
function strInc() {
	if (document.getElementById('strInput').value < 20
			&& document.getElementById('statsLeft').innerHTML > 0) {
		strength++;
		document.getElementById('strInput').value = strength;
		document.getElementById('statsLeft').innerHTML--;
	}
} function strInc5() {
	if (document.getElementById('strInput').value <= 15
			&& document.getElementById('statsLeft').innerHTML > 0) {
		strength += 5;
		stats -= 5;
		document.getElementById('strInput').value = strength;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function strDec() {
	if (document.getElementById('strInput').value > 0
			&& document.getElementById('statsLeft').innerHTML < maxStats) {
		strength--;
		document.getElementById('strInput').value = strength;
		document.getElementById('statsLeft').innerHTML++;
	}
}
function strDec5() {
	if (document.getElementById('strInput').value >= 5
			&& document.getElementById('statsLeft').innerHTML <= maxStats-5) {
		strength -= 5;
		stats += 5;
		document.getElementById('strInput').value = strength;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function dexInc() {
	if (document.getElementById('dexInput').value < 20
			&& document.getElementById('statsLeft').innerHTML > 0) {
		dexterity++;
		stats--;
		document.getElementById('dexInput').value = dexterity;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function dexInc5() {
	if (document.getElementById('dexInput').value <= 15
			&& document.getElementById('statsLeft').innerHTML > 0) {
		dexterity += 5;
		stats -= 5;
		document.getElementById('dexInput').value = dexterity;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function dexDec() {
	if (document.getElementById('dexInput').value > 0
			&& document.getElementById('statsLeft').innerHTML < maxStats) {
		document.getElementById('dexInput').value--;
		dexterity--;
		document.getElementById('statsLeft').innerHTML++;
	}
}
function dexDec5() {
	if (document.getElementById('dexInput').value >= 5
			&& document.getElementById('statsLeft').innerHTML <= maxStats-5) {
		dexterity -= 5;
		stats += 5;
		document.getElementById('dexInput').value = dexterity;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function conInc() {
	if (document.getElementById('conInput').value < 20
			&& document.getElementById('statsLeft').innerHTML > 0) {
		document.getElementById('conInput').value++;
		constitution++;
		document.getElementById('statsLeft').innerHTML--;
	}
}
function conInc5() {
	if (document.getElementById('conInput').value <= 15
			&& document.getElementById('statsLeft').innerHTML >= 5) {
		constitution += 5;
		stats -= 5;
		document.getElementById('conInput').value = constitution;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function conDec() {
	if (document.getElementById('conInput').value > 0
			&& document.getElementById('statsLeft').innerHTML < maxStats-5) {
		document.getElementById('conInput').value--;
		constitution--;
		document.getElementById('statsLeft').innerHTML++;
	}
}
function conDec5() {
	if (document.getElementById('conInput').value >= 5
			&& document.getElementById('statsLeft').innerHTML <= maxStats-5) {
		constitution -= 5;
		stats += 5;
		document.getElementById('conInput').value = constitution;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function intInc() {
	if (document.getElementById('intInput').value < 20
			&& document.getElementById('statsLeft').innerHTML > 0) {
		document.getElementById('intInput').value++;
		intelligence++;
		document.getElementById('statsLeft').innerHTML--;
	}
}
function intInc5() {
	if (document.getElementById('intInput').value <= 15
			&& document.getElementById('statsLeft').innerHTML >= 5) {
		intelligence += 5;
		stats -= 5;
		document.getElementById('intInput').value = intelligence;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function intDec() {
	if (document.getElementById('intInput').value > 0
			&& document.getElementById('statsLeft').innerHTML < maxStats) {
		document.getElementById('intInput').value--;
		intelligence--;
		document.getElementById('statsLeft').innerHTML++;
	}
}
function intDec5() {
	if (document.getElementById('intInput').value >= 5
			&& document.getElementById('statsLeft').innerHTML <= maxStats-5) {
		intelligence -= 5;
		stats += 5;
		document.getElementById('intInput').value = intelligence;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function wisInc() {
	if (document.getElementById('wisInput').value < 20
			&& document.getElementById('statsLeft').innerHTML > 0) {
		document.getElementById('wisInput').value++;
		wisdom++;
		document.getElementById('statsLeft').innerHTML--;
	}
}
function wisInc5() {
	if (document.getElementById('wisInput').value <= 15
			&& document.getElementById('statsLeft').innerHTML >= 5) {
		wisdom += 5;
		stats -= 5;
		document.getElementById('wisInput').value = wisdom;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function wisDec() {
	if (document.getElementById('wisInput').value > 0
			&& document.getElementById('statsLeft').innerHTML < maxStats) {
		document.getElementById('wisInput').value--;
		wisdom--;
		document.getElementById('statsLeft').innerHTML++;
	}
}
function wisDec5() {
	if (document.getElementById('wisInput').value >= 5
			&& document.getElementById('statsLeft').innerHTML < maxStats-5) {
		wisdom -= 5;
		stats += 5;
		document.getElementById('wisInput').value = wisdom;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function chaInc() {
	if (document.getElementById('chaInput').value < 20
			&& document.getElementById('statsLeft').innerHTML > 0) {
		document.getElementById('chaInput').value++;
		charisma++;
		document.getElementById('statsLeft').innerHTML--;
	}
}
function chaInc5() {
	if (document.getElementById('chaInput').value <= 15
			&& document.getElementById('statsLeft').innerHTML >= 5) {
		charisma += 5;
		stats -= 5;
		document.getElementById('chaInput').value = charisma;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}
function chaDec() {
	if (document.getElementById('chaInput').value > 0
			&& document.getElementById('statsLeft').innerHTML < maxStats) {
		document.getElementById('chaInput').value--;
		charisma--;
		document.getElementById('statsLeft').innerHTML++;
	}
}
function chaDec5() {
	if (document.getElementById('chaInput').value >= 5
			&& document.getElementById('statsLeft').innerHTML < maxStats-5) {
		charisma -= 5;
		stats += 5;
		document.getElementById('chaInput').value = charisma;
		document.getElementById('statsLeft').innerHTML = stats;
	}
}

// Autogenerate fields for a default character
function defaultCharacter() {
	// Set basic information
	document.getElementById('charName').value = 'Cornholio';
	document.getElementById('charClass').value = 'Warrior';
	document.getElementById('charBackground').value = 'Titikaka';
	document.getElementById('playerName').value = 'Beavis';
	document.getElementById('charFaction').value = 'Asskickers';
	document.getElementById('charRace').value = 'Human';
	document.getElementById('charAlign').value = 'Chaotic Neutral';
	
	// Approximately minmax for physical stats
	initialize();
	strInc5();
	dexInc5();
	conInc5();
	strInc();
	dexInc();
	conInc();
}
function createCharacter() {
	// Validation by Lakshika Bhanushali, updated by Kevin Meisenbacher		
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

	// Kevin's code from here
	document.getElementById('level').value = 1;
	document.getElementById('experience').value = 0;
	
	// Calculate proficiency bonuses
	if (document.getElementById('level').value >= 1
			|| document.getElementById('level').value <= 4)
				proficiencyBonus = 2;
	if (document.getElementById('level').value >= 5
			|| document.getElementById('level').value <= 8)
				proficiencyBonus = 3;
	if (document.getElementById('level').value >= 9
			|| document.getElementById('level').value <= 12)
				proficiencyBonus = 4;
	if (document.getElementById('level').value >= 13
			|| document.getElementById('level').value <= 16)
				proficiencyBonus = 5;
	if (document.getElementById('level').value >= 17
			|| document.getElementById('level').value <= 20)
				proficiencyBonus = 6;

	// Set base ability scores
	document.getElementById('strBox').value = document.getElementById('strInput').value;
	document.getElementById('dexBox').value = document.getElementById('dexInput').value;
	document.getElementById('conBox').value = document.getElementById('conInput').value;
	document.getElementById('intBox').value = document.getElementById('intInput').value;
	document.getElementById('wisBox').value = document.getElementById('wisInput').value;
	document.getElementById('chaBox').value = document.getElementById('chaInput').value;
	
	// Set ability modifiers
	document.getElementById('strBonus').value = parseInt((strength-10)/2);
	document.getElementById('dexBonus').value = parseInt((dexterity-10)/2);
	document.getElementById('conBonus').value = parseInt((constitution-10)/2);
	document.getElementById('intBonus').value = parseInt((intelligence-10)/2);
	document.getElementById('wisBonus').value = parseInt((wisdom-10)/2);
	document.getElementById('chaBonus').value = parseInt((charisma-10)/2);
	
	// Create variables for modifiers to make them easier to program
	strBonus = document.getElementById('strBonus').value;
	dexBonus = document.getElementById('dexBonus').value;
	conBonus = document.getElementById('conBonus').value;
	intBonus = document.getElementById('intBonus').value;
	wisBonus = document.getElementById('wisBonus').value;
	chaBonus = document.getElementById('chaBonus').value;

	// Set appropriate bonuses
	document.getElementById('acrobatics').value = dexBonus;
	document.getElementById('animalHandling').value = wisBonus;
	document.getElementById('arcana').value = intBonus;
	document.getElementById('athletics').value = strBonus;
	document.getElementById('deception').value = chaBonus;
	document.getElementById('history').value = intBonus;
	document.getElementById('insight').value = wisBonus;
	document.getElementById('intimidation').value = chaBonus;
	document.getElementById('investigation').value = intBonus;
	document.getElementById('medicine').value = wisBonus;
	document.getElementById('nature').value = intBonus;
	document.getElementById('perception').value = wisBonus;
	document.getElementById('performance').value = chaBonus;
	document.getElementById('persuasion').value = chaBonus;
	document.getElementById('religion').value = intBonus;
	document.getElementById('sleightOfHand').value = dexBonus;
	document.getElementById('stealth').value = dexBonus;
	document.getElementById('survival').value = wisBonus;
	
	if (nameError.innerHTML == ''
		&&	classError.innerHTML == ''
		&&	bgError.innerHTML == ''
		&&	plNameError.innerHTML == ''
		&&	raceError.innerHTML == ''
		&&	alignError.innerHTML == '') 
	{
		document.getElementById('topFields').style.display = 'flex';
		document.getElementById('sheet').style.display = 'flex';
		document.getElementById('col1').style.display = 'flex';
		document.getElementById('form').style.display = 'none';
		characters.push({
			"id" : id,
			"name" : charName,
			"class" : charClass,
			"background" : charBG,
			"playerName" : playerName,
			"faction" : faction,
			"alignment" : alignment
		}); 
		
		// Initialize the dropdown
		var select = document.getElementById('selector');
		select.options.length = 0;
		
		// For each new character, give them a new id,
		// add them to the dropdown and update the dropdown
		for (var i=0; i<characters.length; i++) {
			id++;
			var character = document.createElement('option');
			character.setAttribute('value', 'newCharacter');
			var characterName = document.createTextNode(characters[i].name);
			character.appendChild(characterName);
			select.appendChild(character);
			if (characters.length > 1) document.getElementById('selector').selectedIndex++;
			console.log('Characters: ' + characters[i]);
		}
		console.log(characters.length);
	}
}

// Calculate skill bonuses based on selected skills
function skillBonuses() {
	var skills = [];
	skills = document.getElementsByName('skillBox');
	var selectedSkills = 0;
	for (var i=0; i<skills.length; i++) {
		if (skills[i].checked) {
			selectedSkills++;
			console.log(selectedSkills);
		}
	}
	if (selectedSkills >= 6) {
		if (document.querySelector('selectedSkills').checked) {
			document.querySelector('selectedSkills').checked = false;
		}
	}
}

// Add XP when "add" is clicked and level up past certain thresholds
function addXP() {
	experience += parseInt(document.getElementById('xpInput').value);
	document.getElementById('experience').value = experience;
	console.log(experience);
	levelUp();
}
function levelUp() {
	// Set appropriate level for XP values
	if (experience >= 300) 
		document.getElementById('level').value = 2;
	if (experience >= 900) 
		document.getElementById('level').value = 3;
	if (experience >= 2700) 
		document.getElementById('level').value = 4;
	if (experience >= 6500) 
		document.getElementById('level').value = 5;
	if (experience >= 14000) 
		document.getElementById('level').value = 6;
	if (experience >= 23000) 
		document.getElementById('level').value = 7;
	if (experience >= 34000) 
		document.getElementById('level').value = 8;
	if (experience >= 48000) 
		document.getElementById('level').value = 9;
	if (experience >= 64000) 
		document.getElementById('level').value = 10;
	if (experience >= 85000) 
		document.getElementById('level').value = 11;
	if (experience >= 100000) 
		document.getElementById('level').value = 12;
	if (experience >= 120000) 
		document.getElementById('level').value = 13;
	if (experience >= 140000) 
		document.getElementById('level').value = 14;
	if (experience >= 165000) 
		document.getElementById('level').value = 15;
	if (experience >= 195000) 
		document.getElementById('level').value = 16;
	if (experience >= 225000) 
		document.getElementById('level').value = 17;
	if (experience >= 265000) 
		document.getElementById('level').value = 18;
	if (experience >= 305000) 
		document.getElementById('level').value = 19;
	if (experience >= 355000) 
		document.getElementById('level').value = 20;
	console.log(document.getElementById('level').value);
}

// Method called at the press of "new character" button
function newCharacter() {
	document.getElementById('form').style.display = 'flex';
	document.getElementById('topFields').style.display = 'none';
	document.getElementById('sheet').style.display = 'none';
	document.getElementById('col1').style.display = 'none';
}