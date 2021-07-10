// 'use strict';
// let score=0;
// parseInt(score);
// let username = prompt('whats your name');
// while (!username) {
//     username=prompt('please type your name');

// }
// alert('hello '+ username +' lets play my guessing game');


// let drink = prompt('Do I like to drink coffee');
// drink=drink.toLowerCase();
// //console.log(drink);
// switch (drink) {
//     case 'yes':
//     case 'y':
//         alert('thats wrong');
//         break;


//         case 'no':
//             case 'n':
//                 alert('thats rghit');
//                 score++;
//                 break;

//     default:

//     while (!drink) {
//         drink=prompt('please answer with yes/y or no/n');

//     }
//         break;


// }

// let smoke = prompt('Do you think I smoke');
// smoke=smoke.toLowerCase();
// //console.log(smoke);
// switch (smoke) {
//     case 'yes':
//     case 'y':
//         alert('thats rghit');
//         score++;
//         break;


//         case 'no':
//             case 'n':
//                 alert('thats wrong');
//                 break;

//     default:
//         while (!smoke) {
//             smoke=prompt('please answer with yes/y or no/n');

//         }
//         break;


// }

// let cat= prompt('Do you think I own a cat?');
// cat=cat.toLowerCase();
// //console.log(cat);
// switch (cat) {
//     case 'yes':
//     case 'y':
//         alert('thats wrong');
//         break;


//         case 'no':
//             case 'n':
//                 alert('thats rghit');
//                 score++;
//                 break;

//     default:
//         while (!cat) {
//             cat=prompt('please answer with yes/y or no/n');

//         }
//         break;


// }

// let city= prompt('Do you think I live in Irbid??');
// city=city.toLowerCase();
// //console.log(city);
// switch (city) {
//     case 'yes':
//     case 'y':
//         alert('thats wrong');
//         break;


//         case 'no':
//             case 'n':
//                 alert('thats rghit');
//                 score++;
//                 break;

//     default:
//         while (!city) {
//             city=prompt('please answer with yes/y or no/n');

//         }
//         break;


// }

// let age= prompt('Do you think I am 30 years old?');
// age=age.toLowerCase();
// switch (age) {
//     case 'yes':
//     case 'y':
//         alert('thats wrong');
//         break;


//         case 'no':
//             case 'n':
//                 alert('thats rghit');
//                 score++;
//                 break;

//     default:
//         while (!age) {
//             age=prompt('please answer with yes/y or no/n');

//         }
//         break;


// }
// let number = prompt('guess a number betwen 1 and 10')
// let counter=0;
// for (let i = 0; i< 3; i++) {
//     counter++;
// if (number==8){
//     alert('thats rghit');
//     score++;
//     break;

// }

// else if(number<8){
//     alert('its too low');
//     number= prompt('guess a number betwen 1 and 10')


// }
// else {
//     alert('its too high');
//     number= prompt('guess a number betwen 1 and 10')


// }

// }
// console.log(counter);
// if (counter>3){
//     alert('the corect number is 8');

// }

// let counter1=0;
// let juice = ['orange', 'appale', 'Beet', 'Prune', 'Tomato', 'Pomegranate', 'Grapefruit'];
// // console.log(juice);

// let input = prompt('what do you think my favorite juice ')


// for (let i = 0; i <= 5; i++) {
    
    // console.log(juice[i]);
//     for (let j = 0; j < juice.length; j++) {
        

//         if (input == 'orange' || input == 'apple' || input == 'Beet'|| input=='Prune' ||input=='Tomato' || input=='Pomegranate' || input=='Grapefruit') {
//             alert('thats rghit');
//             score++;
//             break;
//         }
        
//         else if (input!='orange'|| input!='apple' || input!='Beet'|| input!='Prune'|| input!='Tomato'|| input!='Pomegranate'|| input!='Grapefruit'){
//             input = prompt('try again')
//             break;
//         }
//         else  { console.log('hello')
//     }
//         // console.log(juice.length);
//     }
   

//     if ((input=='orange'||input=='apple'|| input=='bannana' || input == 'Beet' || input=='Prune' || input=='Tomato' ||input=='Pomegranate' ||input=='Grapefruit')==true) {
                    
//         break;
//     }
     
    
// }
// alert('the corect answer is orange, apple, beet, prune, tomato,Pomegranate,Grapefruit ');
// alert('thank you for your time ' + username +` do you have a score ${score}/7`);


let juice = ['orange', 'appale', 'Beet', 'Prune', 'Tomato', 'Pomegranate', 'Grapefruit'];
// console.log(juice);

let input = prompt('what do you think my favorite juice ')


for (let i = 0; i <= 5; i++) {
for (let j = 0; j < juice.length; j++) {
        

    if (input == juice.values) {
        alert('thats rghit');
        score++;
        break;
    }
    
    else if (input!=juice.values){
        input = prompt('try again')
        break;
    }
    else  { console.log('hello')
}
    // console.log(juice.length);
}


if ((input=='orange'||input=='apple'|| input=='bannana' || input == 'Beet' || input=='Prune' || input=='Tomato' ||input=='Pomegranate' ||input=='Grapefruit')==true) {
                
    break;
}
 

}
alert('the corect answer is orange, apple, beet, prune, tomato,Pomegranate,Grapefruit ');
alert('thank you for your time ' + username +` do you have a score ${score}/7`);

// if (juice=='orange'||juice=='apple'){
//     alert('thats rghit');
//     score++;
//     break;
// }

// else{
//     juice=prompt('try again')
// }
// }

