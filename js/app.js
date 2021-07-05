'use strict';

let username = prompt('whats your name');
alert('hello '+ username +' lets play my guessing game');

let drink = prompt('Do I like to drink coffee');
drink=drink.toLowerCase();
//console.log(drink);
switch (drink) {
    case 'yes':
    case 'y':
        alert('thats wrong');
        break;


        case 'no':
            case 'n':
                alert('thats rghit');
                break;

    default:
        break;


}

let smoke = prompt('Do you think I smoke');
smoke=smoke.toLowerCase();
//console.log(smoke);
switch (smoke) {
    case 'yes':
    case 'y':
        alert('thats rghit');
        break;


        case 'no':
            case 'n':
                alert('thats wrong');
                break;

    default:
        break;

        
}

let cat= prompt('Do you think I own a cat?');
cat=cat.toLowerCase();
//console.log(cat);
switch (cat) {
    case 'yes':
    case 'y':
        alert('thats wrong');
        break;


        case 'no':
            case 'n':
                alert('thats rghit');
                break;

    default:
        break;

        
}

let city= prompt('Do you think I live in Irbid??');
city=city.toLowerCase();
//console.log(city);
switch (city) {
    case 'yes':
    case 'y':
        alert('thats wrong');
        break;


        case 'no':
            case 'n':
                alert('thats rghit');
                break;

    default:
        break;

        
}

let age= prompt('Do you think I am 30 years old?');
age=age.toLowerCase();
switch (city) {
    case 'yes':
    case 'y':
        alert('thats wrong');
        break;


        case 'no':
            case 'n':
                alert('thats rghit');
                break;

    default:
        break;

        
}
alert('thank you for your time '+ username );