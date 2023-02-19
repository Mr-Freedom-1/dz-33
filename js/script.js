/*-------------Завдання №1-------------*/
// function showAdminName(data) {
//     const result = [];
//     fetch(data)
//     .then(response => response.json())
//     .then((json) => {
//         for (let key in json) {
//         if(json[key].isAdmin === true)
//         console.log(key)
//         }
//     })
// }

// showAdminName('./json/data.json');

/*-------------Завдання №2-------------*/
// let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
// let bob = {firstName: 'Bob'};
// let mike = {lastName: 'Smith'};
// let michael = {};

// let getFullName = function (user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// getFullName = new Proxy(getFullName,{
//     apply(target, thisArg, args) {
//         if(args[0].firstName === undefined && args[0].lastName === undefined){
//                 return 'No name'
//             }
//         else if(args[0].lastName === undefined){
//             return args[0].firstName
//         }
//         else if(args[0].firstName === undefined){
//             return args[0].lastName
//         } 
//         else if(!target(...args).includes('undefined')){
//             return target(...args).toUpperCase();
//         }
//     }
// });

// console.log(getFullName(nikola));
// console.log(getFullName(bob));
// console.log(getFullName(mike));
// console.log(getFullName(michael));

/*-------------Завдання №3-------------*/
// let user = [
//     {name: 'Nikola', age:18, id:1},
//     {name: 'Bob', age:25, id:2},
//     {name: 'Mike', age:32, id:3},
// ];

// localStorage.setItem(user[0].name, JSON.stringify(user[0]));
// localStorage.setItem(user[1].name, JSON.stringify(user[1]));
// localStorage.setItem(user[2].name, JSON.stringify(user[2]));

// function sayHelloToUser(id){
//     for(let i=0; i< localStorage.length; i++) {
//         if(user[i].id == id){
//             console.log(`Hello: ${user[i].name}`);
//         }
//     }
// }

// sayHelloToUser(3);

/*-------------Завдання №4-------------*/ 
const input = document.querySelector('input[type="text"]');

if (localStorage.getItem('savedText')) {
    input.value = localStorage.getItem('savedText');
}

input.addEventListener('input', function() {
    localStorage.setItem('savedText', input.value);
});