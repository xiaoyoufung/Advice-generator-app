const advId = document.getElementById("advice-id");
const advQuote = document.getElementById("advice-quote");
const resetBtn = document.getElementById("dice");

resetBtn.addEventListener("click", e => {
    window.location.reload();
})

// connect to API
async function getAdvice() {
  let response = await fetch('https://api.adviceslip.com/advice');
  //console.log(response);
  let data = await response.json();
  return data;
}

getAdvice().then(data => {
  const adviceQuote = data.slip.advice;
  const adviceId = data.slip.id;

  advQuote.textContent = adviceQuote;
  //advQuote.textContent = "It is easy to sit up and take notice, what's difficult is getting up and take action.";
  advId.textContent = adviceId;
}
);