$(document).ready(function() {

    let randomNumber;
    let diamond;
    let ruby;
    let emerald;
    let amber;

    let wins = 0
    let losses = 0

    let counter = 0;

    $('#randomNumber').text(randomNumber);
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#counter').text(counter);



    function reset() {
        // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;

        diamond = Math.floor(Math.random() * (12 - 1)) + 1;
        ruby = Math.floor(Math.random() * (12 - 1)) + 1;
        emerald = Math.floor(Math.random() * (12 - 1)) + 1;
        amber = Math.floor(Math.random() * (12 - 1)) + 1;
        counter = 0;

        // shower initial values on html
        $('#randomNumber').text(randomNumber);
        $('#wins').text(wins);
        $('#losses').text(losses);
        $('#counter').text(counter);
        return;

    }
    



    // button functions adding to counter "total score"
    $('#diamond').on('click', function() {
        counter += diamond;
        $('#counter').text(counter);
        winOrLose();
        return
    });

    $('#ruby').on('click', function() {
        counter += ruby;
        $('#counter').text(counter);
        winOrLose();
        return
    });

    $('#emerald').on('click', function() {
        counter += emerald;
        $('#counter').text(counter);
        winOrLose();
        return
    });

    $('#amber').on('click', function() {
        counter += amber;
        $('#counter').text(counter);
        winOrLose();
        return
    });

    // couldn't extract counter outside of these click functions so winOrLose was added into each.


    function winOrLose() {
        if (counter > randomNumber) {
            losses++;
            reset();

        } else if (counter == randomNumber) {
            wins++;
            reset();
        }
    }



reset();
winOrLose();


});