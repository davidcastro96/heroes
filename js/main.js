var ourRequest = new XMLHttpRequest();
ourRequest.open(
  "GET",
  "https://raw.githubusercontent.com/davidcastro96/heroes/main/heroes.json"
);
ourRequest.onload = function () {
  var ourDate = JSON.parse(ourRequest.responseText);
  console.log(ourDate.heroes[2]);
};
ourRequest.send();

/* este es el main que creaste */
var votepositive = 30;
var votenegative = 18;

function voteLike() {
  votepositive += 1;
  result = "Tu voto <br/>ha sido registrado";
  document.getElementById("result").innerHTML = votepositive;
  document.getElementById("res").innerHTML = result;
}

function voteDislike() {
  votenegative += 1;
  document.getElementById("result").innerHTML = votenegative;
}
