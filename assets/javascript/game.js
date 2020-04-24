
let randomNumber;
let diamond;
let ruby;
let emerald;
let amber;

let wins = 0
let losses = 0





$(document).ready(function() {


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

    }
    
    // button functions adding to counter

    $('#diamond').on('click', function() {
        counter += diamond;
        $('#counter').text(counter);
        return
    });

    $('#ruby').on('click', function() {
        counter += ruby;
        $('#counter').text(counter);
        return
    });

    $('#emerald').on('click', function() {
        counter += emerald;
        $('#counter').text(counter);
        return
    });

    $('#amber').on('click', function() {
        counter += amber;
        $('#counter').text(counter);
        return
    });

    





reset();
console.log(counter)

});