const axios = require('axios');
const FormData = require('form-data');
 
const form = new FormData();
form.append('category', '7');
form.append('game', '2');
form.append('count', '50');
form.append('_csrf', 'yTY073mRTs9QobxvKOXgKlH-4ThxYnw03oBDbKLSzB64U26jDtogljLViV53stNlDqGTUEJUI27rzw8O0bmlTw==');

const words = `
    wreath
    beehive
    cricket
    maid
    draw
    round
    tuba
    window
    wrist
    faucet
    coin
    clam
    three-toed sloth
    batteries
    cake
    rolly polly
    bald eagle
    mushroom
    carpet
    tape
    stapler
    cheerleader
    roof
    crumb
    locket
    toe
    hammer
    tricycle
    fax
    wall
    globe
    crib
    enter
    angel
    salt
    hoof
    zebra
    cobra
    hero
    fox
    wooly mammoth
    shark
    pan
    dad
    marker
    coconut
    frame
    thermometer
    bucket
    nut
    hand soap
    migrate
    judge
    barber
    cargo
    drip
    flavor
    sandbox
    pawn
    rib
    snarl
    snag
    diagonal
    competition
    macaroni
    geologist
    Jedi
    suit
    log-in
    bleach
    lunar rover
    houseboat
    caviar
    rut
    cough
    lunch tray
    synchronized swimming
    captain
    torch
    ginger
    time machine
    comfy
    lullaby
    owner
    dorsal
    omnivore
    cubicle
    landscape
    propose
    blueprint
    wag
    truck stop
    learn
    tiptoe
    cot
    sleep
    zipper
    traffic jam
    tank
    cell phone charger
`;


const wordslist = words.split('\n').map((word) => word.trim()).filter(word => !!word).join(',');
console.log(wordslist);
