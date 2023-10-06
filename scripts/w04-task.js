/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Benjamin Velazquez",
    photo: "images/benjamin-velazquez.jpg",
    favoriteFoods: ['lasagna', 'pizza', 'tacos', 'french fries', 'burguers'],
    hobbies: ['play guitar', 'piano', 'martial arts', 'gym', 'walk'],
    placesLived: []
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "La Paz, BCS",
        length: "19 Years"
    },
    {
        place: "Puebla, PUE",
        length: "18 months"
    },
    {
        place: "Teotitlan, OAX",
        length: "4 months"
    },
    {
        place: "Tijuana, BC",
        length: "9 months"
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo
document.querySelector("#photo").alt = myProfile.name

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li')
    li.textContent = food
    document.querySelector('#favorite-foods').appendChild(li)
})

/* Hobbies List */
myProfile.hobbies.forEach(hobbie =>{
    let li = document.createElement('li')
    li.textContent = hobbie
    document.querySelector('#hobbies').appendChild(li)
})

/* Places Lived DataList */
let dlElement = document.getElementById("places-lived");
myProfile.placesLived.forEach(function (place){
    let dtElement = document.createElement("dt")
    dtElement.textContent = place.place
    
    let ddElement = document.createElement("dd");
    ddElement.textContent = place.length;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);

})

