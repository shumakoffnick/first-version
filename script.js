const sliderLine = document.querySelector(".slider__line");
const sliderBtnLeft = document.querySelector(".slider__btn__left");
const sliderBtnRight = document.querySelector(".slider__btn__right");
const dotFirst = document.querySelector(".dot__first");
const dotSecond = document.querySelector(".dot__second");
const dotThird = document.querySelector(".dot__third");
const sliderRostov = document.querySelector(".slider__rostov");
const sliderSochi = document.querySelector(".slider__sochi");
const sliderPatriotic = document.querySelector(".slider__patriotic");
const inpName = document.querySelector(".input__name__value");
const inpNumber = document.querySelector(".input__number__value");
const formButton = document.querySelector(".form__button");
const inpCheck = document.querySelector(".inp__check__value");
const done = document.querySelector(".question__done");
const doneAct = document.querySelector(".question__done__active");
const questionName = document.querySelector(".question__theInput__name");
const questionPhone = document.querySelector(".question__theInput__phone");
const questionEmail = document.querySelector(".question__theInput__email");
const questionButton = document.querySelector(".question__button");
const formInpCheck = document.querySelector(".form__inp__check");
const formInpCheckAct = document.querySelector(".form__inp__check__active");
const finCheckAct = document.querySelector(".fin__check__active");
const finCheckPas = document.querySelector(".fin__check__passive");
const finButton = document.querySelector(".fin__button");
const finalName = document.querySelector(".final__Name");
const finalTel = document.querySelector(".final__Tel");
const finalQuest = document.querySelector(".final__question")
let finCheckSum = 0
let sliderStart = 0;
let doneStart = 0;
sliderBtnLeft.addEventListener("click", nextImgLeft);
function nextImgLeft() {
    sliderStart = sliderStart - 679;
    if(sliderStart < 0){
        sliderStart = 1358
    }
    sliderLine.style.left = -sliderStart + "px"
}
sliderBtnRight.addEventListener("click", nextImgRight);
function nextImgRight() {
    sliderStart = sliderStart + 679;
    if(sliderStart > 1358){
        sliderStart = 0
    } 
    sliderLine.style.left = -sliderStart + "px"
}
function timerSlide() {
    setInterval(nextImgRight, 4000)
}
timerSlide()
dotFirst.addEventListener("click", dotFirstImg)
function dotFirstImg() {
    if(sliderStart > 0 || sliderStart < 0){
        sliderStart = 0
    }
    sliderLine.style.left = -sliderStart + "px"
}
dotSecond.addEventListener("click", dotSecondImg)
function dotSecondImg() {
    sliderStart = sliderStart + 679
    if(sliderStart > 679 || sliderStart < 679){
        sliderStart = 679
    }
    sliderLine.style.left = -sliderStart + "px"
}
dotThird.addEventListener("click", dotThirdImg)
function dotThirdImg() {
    sliderStart = sliderStart + 1358;
    if(sliderStart > 1358 || sliderStart < 1358){
        sliderStart = 1358
    }
    sliderLine.style.left = -sliderStart + "px"
}
sliderPatriotic.addEventListener("click", sliderPatrioticImg);
function sliderPatrioticImg() {
    sliderStart = sliderStart + 1358;
    if(sliderStart > 1358 || sliderStart < 1358){
        sliderStart = 1358
    }
    sliderLine.style.left = -sliderStart + "px"
}
sliderSochi.addEventListener("click", sliderSochiImg);
function sliderSochiImg() {
    sliderStart = sliderStart + 679
    if(sliderStart > 679 || sliderStart < 679){
        sliderStart = 679
    }
    sliderLine.style.left = -sliderStart + "px"
}
sliderRostov.addEventListener("click", sliderRostovImg);
function sliderRostovImg() {
    if(sliderStart > 0 || sliderStart < 0){
        sliderStart = 0
    }
    sliderLine.style.left = -sliderStart + "px"
}
let formButtonValue = {
    name:"",
    number:""
}
let valName = "";
let valNumb = "";
let inpCheckSum = 0;

formInpCheck.addEventListener("click", formInpCheckOn)
function formInpCheckOn() {
    inpCheckSum = inpCheckSum += 1;
    if(inpCheckSum % 2 == 1){
        formInpCheckAct.style.display = "block"
    }
}
formInpCheckAct.addEventListener("click", formInpCheckOff)
function formInpCheckOff() {
    inpCheckSum = inpCheckSum += 1;
    if(inpCheckSum % 2 == 0){
        formInpCheckAct.style.display = "none"
    }
}

formButton.addEventListener("click", formValue);
function formValue() {
    
    valName = inpName.value;
    valNumb = inpNumber.value;
     console.log(formInpCheck, formInpCheckAct, inpName, inpNumber)
     if(valName = String(valName)){
         formButtonValue.name = valName
     }else{alert("Введите имя")}
     if(valNumb = Number(valNumb)){
         formButtonValue.number = valNumb
     }else{alert('Введите правильный номер')}
     if(inpCheckSum % 2 == 0){
         formButtonValue.name = ""
         formButtonValue.number = ""
         console.log(formButtonValue)
         alert("You agree to the processing of personal data?")
     }else{
        formButtonValue.name = valName
        formButtonValue.number = valNumb
        console.log(formButtonValue)
        inpName.value = ""
        inpNumber.value = ""
        }
        
}
done.addEventListener("click", doneActive)
function doneActive() {
    doneStart = doneStart += 1;
    console.log(doneStart);
    if(doneStart % 2 == 1){
    doneAct.style.display = "block"
}
}
doneAct.addEventListener("click", doneNone)
function doneNone() {
    doneStart = doneStart += 1;
    console.log(doneStart);
    if(doneStart % 2 == 0){
        doneAct.style.display = "none"
    }
}
let questionData = {
    name: "",
    phone: "",
    email: ""
}
questionButton.addEventListener("click", butDat);
function butDat() {
    let a = questionName.value;
    let b = questionPhone.value;
    let c = questionEmail.value;
    if(a = String(a)){
        questionData.name = a
    }else{alert("Введите имя")}
    if(b = Number(b)){
        questionData.phone = b
    }else{alert("Вы неправильно ввели номер")}
    if(c = String(c)){
        questionData.email = c
    }else{alert("Введите Email")}
    if(doneStart % 2 == 1){
        questionData.name = a
        questionData.phone = b
        questionData.email = c
        questionName.value = ""
        questionPhone.value = ""
        questionEmail.value = ""
        
    }else{
        questionData.name = ""
        questionData.phone = ""
        questionData.email = ""
        
        alert("I agree to the processing of personal data?")}
    console.log(questionData)
}
finCheckAct.addEventListener("click", finCheckSelect)
function finCheckSelect() {
    finCheckSum = finCheckSum += 1;
    if(finCheckSum % 2 == 1){
        finCheckPas.style.display = "block"
    }
}
finCheckPas.addEventListener("click", finCheckSelectPas)
function finCheckSelectPas() {
    finCheckSum = finCheckSum += 1;
    if(finCheckSum % 2 == 0){
        finCheckPas.style.display = "none"
    }
}
let finCheckData = {
    name: "",
    phone: "",
    question: ""
}
finButton.addEventListener("click", finDataPush)
function finDataPush() {
    let nameValue = finalName.value;
    let telValue = finalTel.value;
    let questValue = finalQuest.value;
    if(nameValue = String(nameValue)){
        finCheckData.name = nameValue
    } else{alert("Введите имя")}
    if(telValue = Number(telValue)){
        finCheckData.phone = telValue
    }else{alert("Неправильно введен номер")}
    if(questValue = String(questValue)){
        finCheckData.question = questValue
    }else{alert("Введите вопрос")}
    if(finCheckSum % 2 == 1){
        finCheckData.name = nameValue
        finCheckData.phone = telValue
        finCheckData.question = questValue
        finalName.value = ""
        finalTel.value = ""
        finalQuest.value = ""
    }else{
        finCheckData.name = ""
        finCheckData.phone = ""
        finCheckData.question = ""
        
    }
    console.log(finCheckData)
}

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click", onMenuLickClick);
    });
    function onMenuLickClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault()
        }
    }
}
const menuLinksBot = document.querySelectorAll(".menu__link[data-gotobot]");
if(menuLinksBot.length > 0){
    menuLinksBot.forEach(menLin =>{
        menLin.addEventListener("click", menLinBotFun)
    });
    function menLinBotFun(e) {
        const menLin = e.target;
        if(menLin.dataset.gotobot && document.querySelector(menLin.dataset.gotobot)){
            const gotobotBlock = document.querySelector(menLin.dataset.gotobot);
            const gotobotBlockValue = gotobotBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".footer").offsetHeight;
            window.scrollTo({
                top: gotobotBlockValue,
                behavior: "smooth"
            });
            e.preventDefault()
        }
    }
}