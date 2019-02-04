// ==UserScript==
// @name		 Remove Moodle Answers
// @author		 Alexander Jeuk
// @description	 Deletes correct and incorrect answers from moodle test reviews
// @license      GPL-3.0; http://www.gnu.org/licenses/gpl-3.0.txt
// @include		 /^https?://moodle2.tu-ilmenau.de/mod/quiz/review.php*
// @grant        none
// @namespace    https://github.com/Alex3434/RemoveMoodleAnswers
// @version      0.1
// @grant        none
// @updateURL	 https://github.com/Alex3434/RemoveMoodleAnswers/raw/master/dist/RemoveMoodleAnswes.js
// ==/UserScript==


(function() {
    let correctElements = document.getElementsByClassName('icon fa fa-check text-success fa-fw');
    for (let icon of correctElements) {
        icon.style.display = "none";
    }
    let incorrectElements = document.getElementsByClassName('icon fa fa-remove text-danger fa-fw');
    for (let icon of incorrectElements) {
		icon.style.display = "none";
    }
    let correctnessIcons = document.getElementsByClassName("specificfeedback");
    for (let element of correctnessIcons) {
        element.style.display = "none";
    }
    let radioButtons = document.querySelectorAll("input[type=radio]");
    for (let radio of radioButtons) {
        radio.removeAttribute("checked");
    }
    let checkButtons = document.querySelectorAll("input[type=checkbox]");
    for (let check of checkButtons) {
        check.removeAttribute("checked");
    }
})();