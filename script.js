const UserID = document.getElementById("UserID");
const KRAPin = document.getElementById("KRAPin");
const Passport = document.getElementById("Passport");
const AllotmentLetter = document.getElementById("AllotmentLetter");
const Others = document.getElementById("Others");
const nextBtn = document.getElementById("nextBtn");

const KRAButton = document.getElementById("KRAPinBtn").addEventListener("click", () => {
    nextBtn.disabled = false;
  });
const UserIDBtn = document.getElementById("upload_widget").addEventListener("click", () => {
    nextBtn.disabled = false;
  });
const PassportBtn = document.getElementById("PassportBtn").addEventListener("click", () => {
    nextBtn.disabled = false;
  });
const AllotmentLetterBtn = document.getElementById("AllotmentLetterBtn").addEventListener("click", () => {
    nextBtn.disabled = false;
  });
const OthersBtn = document.getElementById("OthersBtn").addEventListener("click", () => {
    nextBtn.disabled = false;
});
  
nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
});
let currentDiv = 1;

nextBtn.addEventListener("click", () => {
    switch (currentDiv) {
        case 1:
          UserID.classList.add("hidden");
          KRAPin.classList.remove("hidden");
          currentDiv = 2;
          break;
        case 2:
          KRAPin.classList.add("hidden");
          Passport.classList.remove("hidden");
          currentDiv = 3;
          break;
        case 3:
          Passport.classList.add("hidden");
          AllotmentLetter.classList.remove("hidden");
          currentDiv = 4;
          break;
        case 4:
          AllotmentLetter.classList.add("hidden");
          Others.classList.remove("hidden");
          currentDiv = 5;
          break;
        case 5:
          window.location.href = "welcome.html";
            return;
      }
});
