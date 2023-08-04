let totalTime = 60;
let speedValue = 0;
let accuracyValue = 0;
let text = "rapid typing is an incredible skill that allows us to communicate and work efficiently in the digital age with practice we can type lengthy documents creative stories or important messages in no time It is fascinating how our fingers dance across the keyboard translating thoughts into words at a rapid pace the convenience of fast typing is undeniable whether it is for professional tasks or casual conversations in a world where information travels at the speed of light mastering quick and accurate typing is a valuable asset so keep honing your typing abilities it is a gateway to enhanced productivity and seamless communication"
let typedText = [];

document.getElementById("time-value").innerText = totalTime;
document.getElementById("speed-value").innerText = speedValue;
document.getElementById("accuracy-value").innerText = accuracyValue;
document.getElementById("given-text").textContent = text;


let everyChar = text.split("");
let correctCharTyped = 0;


window.addEventListener('keydown', function(event) {
  const key = event.key;
  console.log(key);
  typedText.push(key);
  console.log(document.getElementById("given-text").style.marginLeft)
  for (let i = 0; i < everyChar.length; ++i) {
    for (let j = 0; j < typedText.length; ++j) {
      if (everyChar[i] === key && everyChar[i] === typedText[j] && i === j) {
        ++correctCharTyped;
        console.log(`${everyChar[i]}: Correct ` + `${correctCharTyped}: correct char  ` + i + ' ' + j);
        everyChar[i] = "";
        
      } 
    }
  }
});

function timer() {
  let timeLeft;
  timeLeft = setInterval(() => {
    document.getElementById("time-value").innerText = totalTime;
    --totalTime;
    if (totalTime === -1) {
      clearInterval(timeLeft);
    }
  }, 1000);
}