
let randomNumber;
let diamond;
let ruby;
let emerald;
let amber;

let wins = 0
let losses = 0





$(document).ready(function() {

    $('#diamond').on('click', function() {
        counter += diamond;
        console.log(counter)
        return
    });

    $('#ruby').on('click', function() {
        counter += ruby;
        console.log(counter)
        return
    });

    $('#emerald').on('click', function() {
        counter += emerald;
        console.log(counter)
        return
    });

    $('#amber').on('click', function() {
        counter += amber;
        console.log(counter)
        return
    });



    function reset() {
        // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        diamond = Math.floor(Math.random() * (12 - 1)) + 1;
        ruby = Math.floor(Math.random() * (12 - 1)) + 1;
        emerald = Math.floor(Math.random() * (12 - 1)) + 1;
        amber = Math.floor(Math.random() * (12 - 1)) + 1;
        
        counter = 0;

        // shower values on html
        $('#randomNumber').text(randomNumber);
        $('#wins').text(wins);
        $('#losses').text(losses);
        $('#counter').text(counter);






    }
    
    // button functions adding to counter


    





reset();

});