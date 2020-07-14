function wakeDog(name, breed){
    return `Wake ${name} the ${breed}`
}

function leashDog(name, breed){
    return `Leash ${name} the ${breed}`
}

function walkToPark(name, breed){
    return `Walk to the park with ${name} the ${breed}`
}

function throwFrisbee(name, breed){
    return `Throw the frisbee for ${name} the ${breed}`
}

function walkHome(name, breed){
    return `Walk home with ${name} the ${breed}`
}

function unleashDog(name, breed){
    return `Unleash ${name} the ${breed}`
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
function exerciseDog(name, breed){
    let routine = [wakeDog(name, breed), leashDog(name, breed), walkToPark(name, breed), throwFrisbee(name, breed), walkHome(name, breed), unleashDog(name, breed)]
    let arr = []
    for(let x = 0; x < routine.length; x++){
        arr.push(routine[x])
    }
    return arr
}