#!/usr/bin/env node
'use strict';

console.log('The boring RPG')

const boxen = require('boxen')

console.log(boxen('unicorn', {padding: 1}))

console.log(boxen(`
12345678901234567890123
ππΆππππ½π€Έππ΅π€Ή
`, {padding: 0}))


console.log(boxen(`12345678901234567890123
π  CHARACTERISTICS π
πΆπ½  level.........1
π  health........1
π  mana..........0
ππ½  strength......1
π€Έπ½  agility.......1
ππ½  vitality......1
π΅π½  wisdom........1
π€ΉπΌββοΈ  luck..........1`))
