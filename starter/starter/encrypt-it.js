/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  console.log("Window loaded!");
  

  /**
   * TODO: Write a function comment using JSDoc.
   */
  

  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
     

    //step 2
    //document.getElementById("encrypt-it").addEventListener("click", handleClick)

    //step 03
    document.getElementById("encrypt-it").addEventListener("click", handleClick);

  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleClick(){
    console.log("Button clicked!");
    
    var text = document.getElementById("input-text").value;
    console.log(text);
    console.log(shiftCipher(text));

    document.getElementById("result").innerText = shiftCipher(text);
  }

  /**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}

})();
