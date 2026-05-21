function changeEnvironment(timeOfDay) {

    if (timeOfDay == "day") {
        $("#environment").removeClass("night-mode");
        $("#environment").addClass("day-mode");

        $("#description").html("The sun comes out and the forest feels safe again.");
        $("#mood-text").html("The puppy feels happy and relaxed.");
        $("#character").html("🐶");
        $("#tree").html("🌲");
    }

    else if (timeOfDay == "night") {
        $("#environment").removeClass("day-mode");
        $("#environment").addClass("night-mode");

        $("#description").html("Night falls. The forest becomes darker and more mysterious.");
        $("#mood-text").html("The puppy feels nervous, but still wants to explore.");
        $("#character").html("🐕‍🦺");
        $("#tree").html("🌙");
    }

    else {
        $("#description").html("The environment does not understand that answer. Try typing day or night.");
        $("#mood-text").html("The puppy looks confused.");
        $("#character").html("❓");
    }
}

$("#change-button").click(function () {
    let userChoice = prompt("Type day or night:");
    changeEnvironment(userChoice);
});