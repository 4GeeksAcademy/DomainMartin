/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    let a = pronoun[i];

    for (let j = 0; j < adj.length; j++) {
      let b = adj[j];

      for (let k = 0; k < noun.length; k++) {
        let c = noun[k];
        console.log(a + b + c + ".com");
      }
    }
  }
};
