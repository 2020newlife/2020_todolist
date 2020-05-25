const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");
    queryNameTest = document.querySelector(".query");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForName(){
    queryNameTest.classList.add(SHOWING_CN)
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    queryNameTest.classList.remove(SHOWING_CN)
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}! 오늘 할 일 확인하자!`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //유저없는 경우
        askForName();
    }
    else{
        //유저있는 경우
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}

init();