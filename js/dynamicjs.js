"use strict";

var userInput = document.getElementById("user-input"),
    tagButton = document.getElementById("insert-tag-button"),
    elementButton = document.getElementById("insert-tag-element"),
    displayDiv = document.getElementById("output");

    tagButton.addEventListener("click", function() {
        var newDiv = '<div class="background">' + userInput.value + ' from tag</div>';

        displayDiv.innerHTML += newDiv;
    });

    elementButton.addEventListener("click", function(){
        var newDiv = document.createElement("div");

        newDiv.innerText = userInput.value + " from element";
        newDiv.classList.add("background2");

        displayDiv.appendChild(newDiv);
    });

    alert("working");