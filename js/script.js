
let form=document.forms["contact2"];
let ticketNumMars=1;
let ticketNumNept=2;
let ticketNumJupi=3;
let ticketNumSatu=4;
let ticketNumUran=5;
let ticketNumMoon=6;
let cart=[];
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

function unPackCart(){
    let totalCost=0;
    cart=[];
    marsTripAdd();
    neptTripAdd();
    jupiTripAdd();
    satuTripAdd();
    uranTripAdd();
    moonTripAdd();
    let marsBodyHTML=document.getElementById("marsBody").outerHTML;
    alert(marsBodyHTML);
    let neptBodyHTML=document.getElementById("neptBody").outerHTML;
    let jupiBodyHTML=document.getElementById("jupiBody").outerHTML;
    let satuBodyHTML=document.getElementById("satuBody").outerHTML;
    let uranBodyHTML=document.getElementById("uranBody").outerHTML;
    let moonBodyHTML=document.getElementById("moonBody").outerHTML;
    let modalBody=document.getElementById("modalBody").outerHTML;
    modalBody=modalBody.innerHTML="";
    alert(modalBody);
    
    
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
    if (ticketNumMars>0) {
        modalBody.innerHTML+=marsBodyHTML;
        let ticketToMars=document.getElementById("ticketToMars");
        ticketToMars.innerHTML="Total tickets to mars: "+ticketNumMars;
        let ticketTotalMars=document.getElementById("ticketTotalMars");
        ticketTotalMars.innerHTML="Total for this trip: R"+ticketNumMars*marsPrice;
        marsBodyHTML=document.getElementById("marsBody").outerHTML;
        modalBody.innerHTML=marsBodyHTML;
    }
    if (ticketNumNept>0) {
        modalBody.innerHTML+=neptBodyHTML;
        let ticketToNept=document.getElementById("ticketToNept");
        ticketToNept.innerHTML="Total tickets to neptune: "+ticketNumNept;
        let ticketTotalNept=document.getElementById("ticketTotalNept");
        ticketTotalNept.innerHTML="Total for this trip: R"+ticketNumNept*neptunePrice;
        neptBodyHTML=document.getElementById("neptBody").outerHTML;
        modalBody.innerHTML=neptBodyHTML;
    }
    if (ticketNumJupi>0) {
        modalBody.innerHTML+=jupiBodyHTML;
        let ticketToJupi=document.getElementById("ticketToJupi");
        ticketToJupi.innerHTML="Total tickets to Jupiter: "+ticketNumJupi;
        let ticketTotalJupi=document.getElementById("ticketTotalJupi");
        ticketTotalJupi.innerHTML="Total for this trip: R"+ticketNumJupi*jupiterPrice;
        jupiBodyHTML=document.getElementById("jupiBody").outerHTML;
        modalBody.innerHTML=jupiBodyHTML;
    }
    if (ticketNumSatu>0) {
        modalBody.innerHTML+=satuBodyHTML;
        let ticketToSatu=document.getElementById("ticketToSatu");
        ticketToSatu.innerHTML="Total tickets to Saturn: "+ticketNumSatu;
        let ticketTotalSatu=document.getElementById("ticketTotalSatu");
        ticketTotalSatu.innerHTML="Total for this trip: R"+ticketNumSatu*saturnPrice;
        satuBodyHTML=document.getElementById("satuBody").outerHTML;
        modalBody.innerHTML=satuBodyHTML;
    }
    if (ticketNumUran>0) {
        modalBody.innerHTML+=uranBodyHTML;
        let ticketToUran=document.getElementById("ticketToUran");
        ticketToUran.innerHTML="Total tickets to Uranus: "+ticketNumUran;
        let ticketTotalUran=document.getElementById("ticketTotalUran");
        ticketTotalUran.innerHTML="Total for this trip: R"+ticketNumUran*uranusPrice;
        uranodyHTML=document.getElementById("uranBody").outerHTML;
        modalBody.innerHTML=uranBodyHTML;
    }
    if (ticketNumMoon>0) {
        modalBody.innerHTML+=moonBodyHTML;
        let ticketToMoon=document.getElementById("ticketToMoon");
        ticketToMoon.innerHTML="Total tickets to Moon: "+ticketNumMoon;
        let ticketTotalMoon=document.getElementById("ticketTotalMoon");
        ticketTotalMoon.innerHTML="Total for this trip: R"+ticketNumMoon*moonPrice;
        moonBodyHTML=document.getElementById("moonBody").outerHTML;
        modalBody.innerHTML=moonBodyHTML;
    }

    let totalPriceHTML=document.getElementById("allTicketTotal");
    totalPriceHTML.innerHTML="Total: R"+totalCost+".00";
}

function removeCartItem(item){
    const indexRemove=cart.indexOf(item);
    cart.splice(indexRemove, 1)
}


