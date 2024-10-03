const animals = [
    {
        name: "Mandu",
        type: "cat",
    },
    {
        name: "Mia",
        type: "cat",
    }, 
    {
        name: "Mona", 
        type: "dog", 
    }, 
    {
        name: "Freddie", 
        type: "dog", 
    },
];

function all (animal) {
    return true;
}

function none (animal) {
    return false;
}

// console.log("all", animals.filter(all));
// console.log("none", animals.filter(none));

function isCat (animal) {
    if (animal.type === "cat") {
        return true;
    } else {
        return false;
    }
}

// console.log(animals.filter(isCat)); vi kan også skrive (for at gemme det, ellers forsvinder det):

const onlyCats = animals.filter(isCat);
console.log("onlyCats", onlyCats);


function isDog (animal) {
    if (animal.type === "dog") {
        return true;
    } else {
        return false;
    }
}

const onlyDogs = animals.filter(isDog);
console.log("onlyDogs", onlyDogs);