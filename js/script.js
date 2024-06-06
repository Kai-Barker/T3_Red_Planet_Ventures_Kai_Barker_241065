
let form=document.forms["contact2"];
form.addEventListener("submit",formConfirmation);
function formConfirmation(event){
    event.preventDefault();
    let formData = {
        "name": this.name.value,
        "email": this.email.value,
        "subject":this.subject.value,
        "message":this.message.value
    }
    alert(formData.name+" thank you for your submission!");
}

let cart=[];
let ticketNumMars=1;
function marsTripAdd(){
    for (let index = 0; index < ticketNumMars; index++) {
        cart.push("Mars")
    }
}
let ticketNumNept=1;
function neptTripAdd(){
    for (let index = 0; index < ticketNumNept; index++) {
        cart.push("Neptune")
    }
}
let ticketNumJupi=1;
function jupiTripAdd(){
    for (let index = 0; index < ticketNumJupi; index++) {
        cart.push("Jupiter")
    }
}
let ticketNumSatu=1;
function satuTripAdd(){
    for (let index = 0; index < ticketNumSatu; index++) {
        cart.push("Saturn")
    }
}
let ticketNumUran=1;
function uranTripAdd(){
    for (let index = 0; index < ticketNumUran; index++) {
        cart.push("Uranus")
    }
}
let ticketNumMoon=1;
function moonTripAdd(){
    for (let index = 0; index < ticketNumMoon; index++) {
        cart.push("Moon")
    }
}
let marsPrice=25000;
let neptunePrice=45000;
let jupiterPrice=65000;
let saturnPrice=40000;
let uranusPrice=50000;
let moonPrice=15000;

function unPackCart(){
    let totalCost=0;
    for (let index = 0; index < cart.length; index++) {
        if(cart[index]=="Mars"){
            //Show the selected ticket
            totalCost+=marsPrice;
        }
        else if(cart[index]=="Neptune"){
            //Show the selected ticket
            totalCost+=neptunePrice;
        }
        else if(cart[index]=="Jupiter"){
            //Show the selected ticket
            totalCost+=jupiterPrice;
        }
        else if(cart[index]=="Saturn"){
            //Show the selected ticket
            totalCost+=saturnPrice;
        }
        else if(cart[index]=="Uranus"){
            //Show the selected ticket
            totalCost+=uranusPrice;
        }
        else if(cart[index]=="Moon"){
            //Show the selected ticket
            totalCost+=moonPrice;
        }
        else{
            //Output "Your Cart Is Empty"
        }
        
    }
}

function removeCartItem(item){
    const indexRemove=cart.indexOf(item);
    cart.splice(indexRemove, 1)
}