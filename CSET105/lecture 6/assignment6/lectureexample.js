// ///////////JAVASCRIPT OBJECT EXAMPLES
// example 1
const song ={
    title:"Kiss of Life",
    artist:"Sade",
    yearRelease:"1992",
    displaySong: function(){
        console.log( this.title +" by " + this.artist + " released in " + this.yearRelease)
    }
};
song.displaySong();
// example 2
const car = {
    model:"Camry",
    make:"Toyota",
    year: "2006",
    carType: function(){
        console.log("The car is " + this.model + " by " + this.make +" from " + this.year);
    }
};
car.carType();

// ///////////JSON EXAMPLES
// example 1
let movie= '{"genre":"horror","name":"The Conjuring"}';

let object = JSON.parse(movie);

console.log(object);
// example 2
const profile=JSON.stringify({
    username:"user123",
    email:"user@exam.com",
    
});
console.log(profile);

// ///////////OOP EXAMPLES
// example 1
class animal{
    constructor(name){
        this.name=name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const cat = new animal("Whiskers");
cat.speak(); // Output: Whiskers makes a sound.
// example 2
class show {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }

    describe() {
        console.log('The series "' + this.title + '" is a ' + this.genre + ' show.');
    }
}

let theShow = new show('Stranger Things', 'Mysterious');
theShow.describe();
