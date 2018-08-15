var select = function (words) {

    return words[Math.floor(Math.random() * words.length)];
};

var generateInsult = function () {
    var randomBodyParts = ["Face", "Nose", "Hair"];
    var randomAdjectives = ["Smelly", "Boring", "Stupid"];
    var randomWords = ["Fly", "Marmot", "Stick", "Monkey"];

    var randomBodyPart = select(randomBodyParts);
    var randomAdjective = select(randomAdjectives);
    var randomWord = select(randomWords);

    var randomString = "your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord;

    return randomString;
};

console.log(generateInsult());
console.log(generateInsult());
console.log(generateInsult());
console.log(generateInsult());
console.log(generateInsult());
console.log(generateInsult());
console.log(generateInsult());