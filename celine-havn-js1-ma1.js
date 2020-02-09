//question 1
function meow() {
    console.log("Meow!");
}

var cat = {complain: meow};

//question 2
var heading = document.querySelector("h3");

//question 3
heading.style.fontsize = "2em";

//question 4
heading.classList.add("subheading");

//question 5
var paragraphs = document.querySelectorAll("p");

//question 6
var results = document.querySelector(".results");
results.innerHTML = "<p>New paragraph</p>";

//question 7
const cats = [
    {
        name: "bob",
        age: 10
    },
    {
        name: "Harold"
    },
    {
        name: "blurt",
        age: 21
    }
];

function catArray(array) {

    for (var i = 0; i < array.length; i++){
        console.log(array[i].name);
    }
}

//question 8
function wrapCats(array) {
    var wrappedHTML = "";

    for (var i = 0; i < array.length; i++){
        wrappedHTML += "<h5>" + array[i].name + "</h5> \n";
    }
    return wrappedHTML;
}

//question 9
results.innerHTML = wrapCats(cats);


//question 10
function wrapNameAndAge(array) {
    var wrappedHTML = "";

    for (var i = 0; i < array.length; i++){

        wrappedHTML += "<div> \n";

        wrappedHTML += "<h5>" + array[i].name + "</h5> \n";

        if (array[i].hasOwnProperty("age")){
            wrappedHTML += "<p>" + array[i].age + "</p> \n";
        }
        else {
            wrappedHTML += "<p> age unknown </p> \n";
        }

        wrappedHTML += "</div> \n";

    }
    return wrappedHTML;
}
