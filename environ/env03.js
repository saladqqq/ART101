let comfortCount = 0;

let environmentTitle = "Stray Dream World";

let environmentElements = ["purple clouds", "moon light", "sleeping cat", "sleeping dog", "glowing stars"];

let mainCreature = {
    name: "Dream Shelter Spirit",
    type: "gentle guardian",
    mood: "peaceful",
    isSafe: true,
    favoriteElement: environmentElements[1]
};

$("#show-title").click(function () {
    let message = "<p>This environment is called <strong>" + environmentTitle + "</strong>.</p>";
    $("#environment-output").html(message);
});

$("#show-elements").click(function () {
    let message = "<p>This world contains:</p>";
    message = message + "<p>" + environmentElements[0] + "</p>";
    message = message + "<p>" + environmentElements[1] + "</p>";
    message = message + "<p>" + environmentElements[2] + "</p>";
    message = message + "<p>" + environmentElements[3] + "</p>";
    message = message + "<p>" + environmentElements[4] + "</p>";

    $("#environment-output").html(message);
});

$("#show-creature").click(function () {
    let message = "<p>Name: " + mainCreature.name + "</p>";
    message = message + "<p>Type: " + mainCreature.type + "</p>";
    message = message + "<p>Mood: " + mainCreature.mood + "</p>";
    message = message + "<p>Favorite element: " + mainCreature.favoriteElement + "</p>";

    $("#environment-output").html(message);
});

$("#count-clicks").click(function () {
    comfortCount = comfortCount + 1;

    let message = "<p>You added comfort to this world " + comfortCount + " times.</p>";
    message = message + "<p>The stray animals feel a little safer.</p>";

    $("#environment-output").html(message);

    console.log(comfortCount);
});