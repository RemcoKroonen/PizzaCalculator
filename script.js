
//console.log(pizzas[]);
var gekozenpizzaprijs = [];
var gekozentoppingprijs = [];
var gekozenslice = 1;
var gekozengrootteprijs = 1;


var allepizzas = [
				{name:'margherita', price:'5.00', image:'images/PizzaMargherita.jpg'},
				{name:'marino', price:'6.50', image:'images/marinos.jpg'},
				{name:'napoletana', price:'8.99', image:'images/napoletana.jpg'},
				{name:'quattro formaggi', price:'9.95', image:'images/Quattro.jpg'},
				{name:'alle melanzane', price:'7.00', image:'images/Alle.jpg'},
				{name:'prosciutto', price:'8.00', image:'images/Prosciutto.jpg'},
				{name:'calzone', price:'9.50', image:'images/Calzone.jpg'},
				{name:'caponne', price:'5.50', image:'images/alcapone.png'},
				{name:'parma', price:'6.00', image:'images/Parma.jpg'},
				{name:'pepperoni', price:'7.95', image:'images/pepperoni-pizza.jpg'}

	 ];

var alletoppings = [
				{name:'Extra kaas', price:'0.50'},
				{name:'Spek', price:'0.99'},
				{name:'Ham', price:'0.99'},
				{name:'Ui', price:'0.65'},
				{name:'Paprika', price:'0.75'},
				{name:'Champignons', price:'0.85'},
				{name:'Salami', price:'0.99'},
				{name:'Tonijn', price:'1.20'},
				{name:'Olijf', price:'0.90'},
				{name:'Ansjovis', price:'1.45'}];

var allegroottes = [{name: 'normal', factor: '1'},{name: 'medium', factor: '1.2'},{name: 'large', factor: '1.4'},{name: 'kingsize', factor: '2'}];

var alleslices = [
				{name: 'één stuk', stukken: 1/12},
				{name: 'twee stukken', stukken:2/12},
				{name: 'drie stukken', stukken:3/12},
				{name: 'vier stukken', stukken:4/12},
				{name: 'vijf stukken', stukken: 5/12},
				{name: 'zes stukken', stukken:6/12},
				{name: 'zeven stukken', stukken: 7/12},
				{name: 'acht stukken', stukken: 8/12},
				{name: 'negen stukken', stukken: 9/12},
				{name: 'tien stukken', stukken:10/12},
				{name: 'elf stukken', stukken: 11/12},
				{name: 'twaalf stukken', stukken: 12/12}];


function toonpizzas() {
	var pizzatekst = 'dit zijn de pizzas <br>';
	for (var i = 0; i < allepizzas.length; i++) {
		pizzatekst = pizzatekst + "<div class = 'pizzategel'> <p id='"+allepizzas[i].price+"' onclick='prijspizza(this.id)' >" + allepizzas[i].name + "</p> <img width= '152' height = '114' src='" + allepizzas[i].image + "'> <p>" + allepizzas[i].price + "</p> </div>";

	}
	document.getElementById("pizzas").innerHTML = pizzatekst;


}

function toontoppings() {
	var toppingtekst = 'dit zijn de toppings <br> <ul>';
	for (var i = 0; i < alletoppings.length; i++) {
		toppingtekst = toppingtekst +  "<li id= '"+alletoppings[i].price+"' onclick='prijstoppings(this.id)' >" + alletoppings[i].name + "(" + alletoppings[i].price + ")</li>"

	}
	toppingtekst = toppingtekst + "</ul>"
	document.getElementById("toppings").innerHTML = toppingtekst;


}

function toongroottes() {
	var groottetekst = 'dit zijn de groottes <br> <ul>';
	for (var i = 0; i < allegroottes.length; i++) {
		groottetekst = groottetekst +  "<li id= '"+allegroottes[i].factor+"' onclick='prijsgrootte(this.id)' >" + allegroottes[i].name + "(" + allegroottes[i].factor + ")</li>"

	}
	groottetekst = groottetekst + "</ul>"
	document.getElementById("grootte").innerHTML = groottetekst;


}
function toonslices() {
	var slicestekst = 'dit zijn de slices <br> <ul>';
	for (var i = 0; i < alleslices.length; i++) {
		slicestekst = slicestekst + "<li id= '"+ alleslices[i].stukken+ "' onclick='prijslice(this.id)' >" + alleslices[i].name + "</li>"

	}
	slicestekst = slicestekst + "</ul>"
	document.getElementById("slices").innerHTML = slicestekst;


}

function prijspizza(clicked_id){
	gekozenpizzaprijs = clicked_id;
	toonprijs();
}

function prijstoppings(clicked_id){
	gekozentoppingprijs = clicked_id;
	toonprijs();
}

function prijsgrootte(clicked_id){
	gekozengrootteprijs = clicked_id;
	toonprijs();
}

function prijslice(clicked_id){
	gekozenslice = clicked_id;
	toonprijs();
}

function toonprijs(){
	var opgeteld = ((Number(gekozenpizzaprijs) + Number(gekozentoppingprijs)) * Number(gekozengrootteprijs)) * Number(gekozenslice);

	document.getElementById("totaalprijs").innerHTML = "<h1> €" + opgeteld.toFixed(2) + "</h1>";

}
//function toongroottes(){




//}

//dingen die je aanklikt rechts + het bereken van totaal

//var pizza1s naar var array alle pizza's zelfde voor toppings en grootte

//id te onthouden van de laatste gekozen pizza, topping en grootte. 

//prijzen opzoeken in de array.