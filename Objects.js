var coffee = {
    name: 'espresso',
    strength: 'verystrong',
    flavour: 'noFlavour',
    milk: 'yes',
    sugar: 'plenty'
}
console.log(coffee.strength);


var movie = {
    title: 'Irishman',
    genre: 'Thriller',
    releaseDate: '2019',
    actors: {

        lead: 'RobertDeNiro',
        supporting: 'ALPacino'
    }
}

console.log(movie.actors.supporting);





function Program(des, lang, repo, status) {


    this.desription = des;
    this.language = lang;
    this.git = repo;
    this.status = status;

    this.isImplementedWithJS = function () {
        if (this.language == "javascript") {
            return true;
        } else {
            return false;
        }
    };

    this.printRepo = function () {
        if (this.git == '...') {


            return true;

        } else {
            return false;
        }

    }
}
var p = new Program('mobile app', 'javascript', '...', true);
console.log(p.printRepo());



function Recipe(name, type, comp, ingr, time, inst) {

    this.name = name;
    this.type = type;
    this.complexity = comp;
    this.ingredients = ingr;
    this.preparingTime = time;
    this.preparingInstruction = inst;

    // this.listOfIngredients = function () {
    //     if (this.ingredients == 'carrots water salt') {
    //         return this.ingredients;
    // }

    // }
    this.time = function () {
        if (this.preparingTime <= '15') {
            return 'Preparation time less then 15 minutes';

        } else {
            return 'Preparation time more then 15 minutes';
        }
    }
}


var r = new Recipe('soup', 'serbian', '3', ['carrots', 'onion'], '15', 'lowTemperature');
console.log(r.preparingInstruction);
