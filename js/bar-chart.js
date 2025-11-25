// get the number from the text
let percent = document.querySelector("svg text").textContent;

// take away the % sign
percent = percent.replaceAll("%", "");

// make it a number
percent = parseInt(percent, 10);

// figure out how tall the bar should be
percent = percent / 100;
let maxHeight = 150;
let barHeight = percent * maxHeight;
let startY = 250;
let newY = startY - barHeight;

// get the css rules
const cssRulesList = document.styleSheets[0].cssRules;

// find the active rule
let svgActiveRule;
for (let i = 0; i < cssRulesList.length; i++) {
	if (cssRulesList[i].selectorText == ".bar-chart:active .bar") {
		svgActiveRule = cssRulesList[i];
	}
}

// change the height and y position
svgActiveRule.style.setProperty("height", barHeight + "px");
svgActiveRule.style.setProperty("y", newY + "px");

