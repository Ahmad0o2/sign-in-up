let clickFlipOne = document.querySelector(".flipbtn");
let signUpCard = document.querySelectorAll(".card")[0];
let signInCard = document.querySelectorAll(".card")[1];
let clickFlipTwo = document.querySelector(".creataccount");
clickFlipOne.addEventListener("click", function () {
    document.title = "SIGN-IN";
    signUpCard.style.animation = "flipOut 0.5s forwards";
    setTimeout(() => {
        signUpCard.classList.add("hide");
        signInCard.style.transform = "translate(-50%, -50%) rotateY(90deg)";
        signInCard.classList.remove("hide");
        signInCard.style.animation = "flipIn 0.5s forwards";
    }, 500);
});
clickFlipTwo.addEventListener("click", function () {
    document.title = "SIGN-UP";
    signInCard.style.animation = "flipOut 0.5s forwards";
    setTimeout(() => {
        signInCard.classList.add("hide");
        signUpCard.style.transform = "translate(-50%, -50%) rotateY(90deg)";
        signUpCard.classList.remove("hide");
        signUpCard.style.animation = "flipIn 0.5s forwards";
    }, 500);
});
