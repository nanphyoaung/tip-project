const inputFirst = document.querySelector("#inputfir");
const inputSecond = document.querySelector("#inputsec");
const tips = document.querySelectorAll(".tip");
const money = document.querySelector("#money");
const moneys = document.querySelector("#moneys");
const reset = document.querySelector("#reset");
const error = document.querySelector("#top");

let tipPercent;

const getTipPercent = (percent) => {
  tipPercent = percent;
};
function amoutTip() {
  const tipPerson = Number(inputFirst.value);
  const num = Number(inputSecond.value);
  if (tipPercent != "" && tipPerson !== "" && num != "") {
    let personamout = Math.ceil(parseFloat((tipPerson + tipPercent) / num));
    moneys.innerText = `$${personamout}`;
  } else {
    if (tipPerson == "" ) {
       document.getElementById("top").style.display="block"
    }
    if (num == "" ) {
        document.getElementById("bottom").style.display="block"
    }
   
  }
  percent();
}
function percent() {
  const tipPerson = Number(inputFirst.value);
  const num = Number(inputSecond.value);
  if (tipPercent != "" && tipPerson !== "" && num != "") {
    let percent = Math.ceil(parseFloat(tipPercent / num));
    money.innerHTML = `$${percent}`;
  }
}
reset.addEventListener("click", amoutTip);
