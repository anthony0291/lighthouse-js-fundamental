let sound = "";

let cry = function(num) {
    for(let x = 0; x < num; x++) {
        sound = sound + "hoo";
    }
    sound = "boo" + sound + "!"
    return sound;
}

console.log(cry(3));


let sound = "";

let cry = function(num) {
    for(let x = 0; x < num; x++) {
        sound = sound + "boo";
    }
    sound = sound + "!";
    return sound;
}

console.log(cry(3));