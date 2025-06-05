const name = process.argv[2];

if (!name) {
  console.log('Please use node callbackVersion.js (Input-Name)');
  process.exit(1);
}

const energyLevel = Math.floor(Math.random() * 100);

function mowYard(name) {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(`${name} mowed the yard`)
    }, 2000);
    })
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (energyLevel >= 30) {
        resolve(`${name} finished using the weed eater`)
    } else {
        reject(`${name} fell asleep after mowing the yard.`);
        return;
     }
}, 1500);
})
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (energyLevel >= 40) {
        resolve(`${name} finished trimming the hedges.`)
    } else {
        reject(`${name} fell asleep after weed eating the yard`);
        return;
    }
}, 1000);
})
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (energyLevel >= 50) {
        resolve(`${name} finished collecting wood.`)
    } else {
        reject(`${name} fell asleep after trimming the hedges`);
        return;
    }
}, 2500);
})
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (energyLevel >= 60) {
        resolve(`${name} finished watering the garden.`)
    } else {
        reject(`${name} fell asleep after collecting wood.`);
        return;
    }
}, 500);
})
}


async function doSummerChores() {

    try{
    const mowYardResult = await mowYard(name)
    console.log(mowYardResult);

    const weedEatResult = await weedEat(name)
    console.log(weedEatResult);

    const trimHedgesResult = await trimHedges(name)
    console.log(trimHedgesResult);

    const collectWoodResult = await collectWood(name)
    console.log(collectWoodResult);

    const waterGardenResult = await waterGarden(name)
    console.log(waterGardenResult);

    console.log(`${name} finished all their chores!`)
    }
    catch(error) {
        console.error(error);
    }
}

doSummerChores()