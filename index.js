/* Author: Kevin Meisenbacher */
// Base Backgrounds
const charName = document.getElementById('charName');
const charClass = document.getElementById('charClass');
const background = document.getElementById('charBackground');
const playerName = document.getElementById('playerName');
const faction = document.getElementById('faction');
const race = document.getElementById('race');
const alignment = document.getElementById('alignment');
const level = document.getElementById('level');
const xp = document.getElementById('xp');
const dciNum = document.getElementById('dciNum');

// Base Stats
const strength = document.getElementById('strength');
const dex = document.getElementById('dex');
const constitution = document.getElementById('constitution');
const intel = document.getElementById('intel');
const wisdom = document.getElementById('wisdom');
const charisma = document.getElementById('charisma');

// Bonuses
const inspiration = document.getElementById('inspiration');
const profBonus = document.getElementById('profBonus');

const strBonus = document.getElementById('strBonus');
const dexBonus = document.getElementById('dexBonus');
const constBonus = document.getElementById('constBonus');
const intelBonus = document.getElementById('intelBonus');
const wisdomBonus = document.getElementById('wisdomBonus');
const charBonus = document.getElementById('charBonus');

// Skills
const acrobatics = document.getElementById('acrobatics');
const animalHandling = document.getElementById('animalHandling');
const arcana = document.getElementById('arcana');
const athletics = document.getElementById('athletics');
const deception = document.getElementById('deception');
const history = document.getElementById('history');
const intimidation = document.getElementById('intimidation');
const insight = document.getElementById('insight');
const investigation = document.getElementById('investigation');
const medicine = document.getElementById('medicine');
const nature = document.getElementById('nature');
const perception = document.getElementById('perception');
const performance = document.getElementById('performance');
const persuasion = document.getElementById('persuasion');
const religion = document.getElementById('religion');
const sleightOfHand = document.getElementById('sleightOfHand');
const stealth = document.getElementById('stealth');
const survival = document.getElementById('survival');

const passiveWisdom = document.getElementById('passiveWisdom');

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
for (var i=1; i<31; i++) const traits = document.getElementById('trait'[i]);

function createCharacter() {
	const character = new character {
		charName, charClass, background, playerName, faction, 
		race, alignment, level, xp, dciNum,
		strength, dex, constitution, intel, wisdom, charisma,
		inspiration, profBonus,
		strBonus, dexBonus, constBonus, intelBonus, wisdomBonus, charBonus,
		acrobatics, animalHandling, arcana, athletics,
		deception, history, intimidation, insight, investigation,
		medicine, nature, perception, performance, persuasion,
		religion, sleightOfHand, stealth, survival,
		passiveWisdom, misvProf,
		armourClass, initiative, speed, maxHP, currentHP, tempHP, hitDice,
		successThrows, failThrows, deathSaves,
		atkNames, atkBonus, atkValues,
		atkInputs, equipment, traits
	};
}