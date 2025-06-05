const name = process.argv[2];

if (!name) {
  console.log('Please use node callbackVersion.js (Input-Name)');
  process.exit(1);
}

const energyLevel = Math.floor(Math.random() * 100);

doSummerChores(name);

function mowYard(name, callback) {
    setTimeout(() => {
    console.log(`${name} mowed the yard`)
    callback();
}, 2000);
}

function weedEat(name, callback) {
    setTimeout(() => {
    if (energyLevel >= 20) {
        console.log(`${name} finished using the weed eater`)
    } else {
        console.log(`${name} fell asleep after mowing the yard.`);
        return;
    }
    callback();
}, 1500);
}

function trimHedges(name, callback) {
    setTimeout(() => {
    if (energyLevel >= 25) {
        console.log(`${name} finished trimming the hedges.`)
    } else {
        console.log(`${name} fell asleep after weed eating the yard`);
        return;
    }
    callback();
}, 1000);
}

function collectWood(name, callback) {
    setTimeout(() => {
    if (energyLevel >= 30) {
        console.log(`${name} finished collecting wood.`)
    } else {
        console.log(`${name} fell asleep after trimming the hedges`);
        return;
    }
    callback();
}, 2500);
}

function waterGarden(name, callback) {
    setTimeout(() => {
    if (energyLevel >= 35) {
        console.log(`${name} finished watering the garden.`)
    } else {
        console.log(`${name} fell asleep after collecting wood.`);
        return;
    }
    callback();
}, 500);
}

function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    })
                })
            })
        });
    })
}