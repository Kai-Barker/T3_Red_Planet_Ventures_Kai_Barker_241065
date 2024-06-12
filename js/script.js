
let form=document.forms["contact2"];
let ticketNumMars=0;
let ticketNumNept=0;
let ticketNumJupi=0;
let ticketNumSatu=0;
let ticketNumUran=0;
let ticketNumMoon=0;
let cart=[];
let mars=``;
let nept=``;
let jupi=``;
let uran=``;
let satu=``;
let moon=``;

const marsPrice=25000;
const neptunePrice=45000;
const jupiterPrice=65000;
const saturnPrice=40000;
const uranusPrice=50000;
const moonPrice=15000;
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

function marsTickSub(){
    let marsTickNum=document.getElementById("marsTick");
    if (ticketNumMars>0) {
        ticketNumMars-=1;
        marsTickNum.innerHTML=ticketNumMars;

    }
    else{
        //Set boolean to false
    }
}
function marsTickAdd(){
    let marsTickNum=document.getElementById("marsTick");
        ticketNumMars+=1;
        marsTickNum.innerHTML=ticketNumMars;
}
function marsTripAdd(){
    for (let index = 0; index < ticketNumMars; index++) {
        cart.push("Mars")
    }
}

function neptTickSub(){
    let neptTickNum=document.getElementById("neptTick");
    console.log("works");
    if (ticketNumNept>0) {
        ticketNumNept-=1;
        neptTickNum.innerHTML=ticketNumNept;
    }
}
function neptTickAdd(){
    let neptTickNum=document.getElementById("neptTick");
        ticketNumNept+=1;
        neptTickNum.innerHTML=ticketNumNept;
}
function neptTripAdd(){
    for (let i = 0; i < ticketNumNept; i++) {
        cart.push("Neptune")
    }
}
function jupiTickSub(){
    let jupiTickNum=document.getElementById("jupiTick");
    if (ticketNumJupi>0) {
        ticketNumJupi-=1;
        jupiTickNum.innerHTML=ticketNumJupi;
    }
}
function jupiTickAdd(){
    let jupiTickNum=document.getElementById("jupiTick");
        ticketNumJupi+=1;
        jupiTickNum.innerHTML=ticketNumJupi;
}
function jupiTripAdd(){
    for (let i = 0; i < ticketNumJupi; i++) {
        cart.push("Jupiter")
    }
}
function satuTickSub(){
    let satuTickNum=document.getElementById("satuTick");
    if (ticketNumSatu>0) {
        ticketNumSatu-=1;
        satuTickNum.innerHTML=ticketNumSatu;
    }
}
function satuTickAdd(){
    let satuTickNum=document.getElementById("satuTick");
        ticketNumSatu+=1;
        satuTickNum.innerHTML=ticketNumSatu;
}
function satuTripAdd(){
    for (let i = 0; i < ticketNumSatu; i++) {
        cart.push("Saturn")
    }
}
function uranTickSub(){
    let uranTickNum=document.getElementById("uranTick");
    if (ticketNumUran>0) {
        ticketNumUran-=1;
        uranTickNum.innerHTML=ticketNumUran;
    }
}
function uranTickAdd(){
    let uranTickNum=document.getElementById("uranTick");
        ticketNumUran+=1;
        uranTickNum.innerHTML=ticketNumUran;
}
function uranTripAdd(){
    for (let index = 0; index < ticketNumUran; index++) {
        cart.push("Uranus")
    }
}
function moonTickSub(){
    let moonTickNum=document.getElementById("moonTick");
    if (ticketNumMoon>0) {
        ticketNumMoon-=1;
        moonTickNum.innerHTML=ticketNumMoon;
    }
}
function moonTickAdd(){
    let moonTickNum=document.getElementById("moonTick");
        ticketNumMoon+=1;
        moonTickNum.innerHTML=ticketNumMoon;
}
function moonTripAdd(){
    for (let index = 0; index < ticketNumMoon; index++) {
        cart.push("Moon")
    }
}
function definePlanets(){
    let modalBody=document.getElementById("modalBody");
    modalBody.innerHTML=null;
    if (ticketNumMars>0) {
        mars=`<div class="container-lg my-4" id="marsBody">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-3">
                                        <img class="img-fluid" id="marsImg" src="../RedPlanetVenturesAssetsAndDesign/Assets/Images/flighhtMars.png">
                                    </div>
                                    <div class="col-1"></div>
                                    <div class="col-5">
                                        <div>
                                            <p class=" fs-1 fw-bolder" style="color: #5815B2;">The Classic Mars Experience</p>
                                        </div>
                                        <div class="row justify-content-center align-items-center">
                                            <p id="ticketToMars">Total tickets to mars: ${ticketNumMars} </p>
                                            <p class="ticketTotal" id="ticketTotalMars">Total for this trip: R${ticketNumMars*marsPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        modalBody.innerHTML+=mars;
    }
    if (ticketNumNept>0) {
    let nept=`<div class="container-lg my-4" id="neptBody">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-3">
                                        <img class="img-fluid" id="neptImg" src="../RedPlanetVenturesAssetsAndDesign/Assets/Images/flightNeptune.png">
                                    </div>
                                    <div class="col-1"></div>
                                    <div class="col-5">
                                        <div>
                                            <p class=" fs-1 fw-bolder" style="color: #5815B2;">Neptune’s Cosmic Dive</p>
                                        </div>
                                        <div class="row justify-content-center align-items-center">
                                            <p id="ticketToNept">Total tickets to Neptune: ${ticketNumNept} </p>
                                            <p class="ticketTotal" id="ticketTotalNept">Total for this trip: R${ticketNumNept*neptunePrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                            modalBody.innerHTML+=nept;
    }
    if (ticketNumJupi>0) {
    let jupi=`<div class="container-lg my-4" id="jupiBody">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-3">
                                        <img class="img-fluid" id="jupiImg" src="../RedPlanetVenturesAssetsAndDesign/Assets/Images/flightJupiter.png">
                                    </div>
                                    <div class="col-1"></div>
                                    <div class="col-5">
                                        <div>
                                            <p class=" fs-1 fw-bolder" style="color: #5815B2;">The Giant’s Journey</p>
                                        </div>
                                        <div class="row justify-content-center align-items-center">
                                            <p id="ticketToJupi">Total tickets to Jupiter: ${ticketNumJupi} </p>
                                            <p class="ticketTotal" id="ticketTotalJupi">Total for this trip: R${ticketNumJupi*jupiterPrice} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                            modalBody.innerHTML+=jupi;
    }
    if (ticketNumSatu>0) {
    let satu=`<div class="container-lg my-4" id="satuBody">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-3" id="satuImg">
                                        <img class="img-fluid" src="../RedPlanetVenturesAssetsAndDesign/Assets/Images/flightSaturn.png">
                                    </div>
                                    <div class="col-1"></div>
                                    <div class="col-5">
                                        <div>
                                            <p class=" fs-1 fw-bolder" style="color: #5815B2;">Ring Around a Saturn</p>
                                        </div>
                                        <div class="row justify-content-center align-items-center">
                                            <p id="ticketToSatu">Total tickets to Saturn: ${ticketNumSatu} </p>
                                            <p class="ticketTotal" id="ticketTotalSatu">Total for this trip: R${ticketNumSatu*saturnPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                            modalBody.innerHTML+=satu;
    }
    if (ticketNumUran>0) {
    let uran=`<div class="container-lg my-4" id="uranBody">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-3">
                                        <img class="img-fluid" id="uranImg" src="../RedPlanetVenturesAssetsAndDesign/Assets/Images/flightUranus.png">
                                    </div>
                                    <div class="col-1"></div>
                                    <div class="col-5">
                                        <div>
                                            <p class=" fs-1 fw-bolder" style="color: #5815B2;">Uranus Uncharted</p>
                                        </div>
                                        <div class="row justify-content-center align-items-center">
                                            <p id="ticketToUran">Total tickets to Uranus: ${ticketNumUran} </p>
                                            <p class="ticketTotal" id="ticketTotalUran">Total for this trip: R${ticketNumUran*uranusPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                            modalBody.innerHTML+=uran;
    }
    if (ticketNumMoon>0) {
    let moon=`<div class="container-lg my-4" id="moonBody">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-3">
                                        <img class="img-fluid" id="moonImg" src="../RedPlanetVenturesAssetsAndDesign/Assets/Images/flightMoon.png">
                                    </div>
                                    <div class="col-1"></div>
                                    <div class="col-5">
                                        <div>
                                            <p class=" fs-1 fw-bolder" style="color: #5815B2;">Moonlight Meander</p>
                                        </div>
                                        <div class="row justify-content-center align-items-center">
                                            <p id="ticketToMoon">Total tickets to Moon: ${ticketNumMoon} </p>
                                            <p class="ticketTotal" id="ticketTotalMoon">Total for this trip: R${ticketNumMoon*moonPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                            modalBody.innerHTML+=moon;
    }
}

function unPackCart(){
    let totalCost=0;
    cart=[];
    marsTripAdd();
    neptTripAdd();
    jupiTripAdd();
    satuTripAdd();
    uranTripAdd();
    moonTripAdd();



    
    
    for (let index = 0; index < cart.length; index++) {
        if(cart[index]=="Mars"){
            //Show the selected ticket
            //Change the text of each individual text on the mars section
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
        console.log(index);
    }
    if(totalCost>0){
        definePlanets();
    }
    else{
        let modalBody=document.getElementById("modalBody");
        modalBody.innerHTML=`<p>Your cart is empty</p>`;
    }
    
    let totalPriceHTML=document.getElementById("allTicketTotal");
    totalPriceHTML.innerHTML="Total: R"+totalCost+".00";
}

function removeCartItem(item){
    const indexRemove=cart.indexOf(item);
    cart.splice(indexRemove, 1)
}
function search_flights() {
    console.log(document.getElementById("list"))
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('flights');
  
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "list-item";
      }
    }
}
function showSearch() {
    if(document.getElementById("list").classList.contains("show")){
        document.getElementById("list").classList.remove("show");
    }
    else{
        document.getElementById("list").classList.add("show");
    }

  }


