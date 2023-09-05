const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
	container.classList.toggle("change");
});

function displayMsg() {
	let name = document.getElementById("name").value.toLowerCase();
	let para = document.getElementById("para");
	para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
	if (name === "sheetal") {
		para.innerHTML =
			"My lifes 1st teacher, guide, support, mentor and everything.\nThank you for being their mummy, I can't imagine my life without you.\n A lot to learn from you, such a multitasking, super speedo and sweet person you are.\nLove you momsiee!!!&#x2764;";
	} else if (name === "vijay") {
		para.innerHTML =
			"My lifes 1st teacher, guide, support, mentor and everything.\nThank you for being their daddy, I can't imagine my life without you.\n A lot to learn from you, such a strong and sensible approach you have.\nMy political head, I love you a lot!!!&#x2764;";
	} else if (name === "yogeeta") {
		para.innerHTML =
			"I hope you are doing well ma'am.\nThank you for always being there by our side.\nWe took a lot of learnings from you.\nThe fun moments, the learnings have become memories to be cherished lifelong.";
	} else if (name === "chitra") {
		para.innerHTML =
			"I hope you are doing well ma'am.\nThank you for always being there by our side.\nYou are & will always be my idol.\nI haven't seen such a multitasking and dedicated person.\nMay God shower his blessings & keep you haapy & working.";
	} else if (name === "Gowri") {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well ma'am.\nThank you for always being there by our side.\nA strict but well wishing teacher.\nMissing you ma'am, hope to meett you soon.";
	} else if (name === "sushree") {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well ma'am.\nA teacher you believed and trusted me more than I myself did.\nYou have always motivated me ma'am and I'll always remain obliged.\nI have never met a teacher so calm & composed.\nThank you for always being there by our side.";
	} else if (name === "shailesh") {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well sir.\nWe took a lot of learnings from you.\nThe efforts you took to teach us during covid times is really great sir.\nYou kind words of praise have always moivated me, & still remind me my goals to reach heights.\nThank you for always being there by our side sir.";
	} else if (name === "sampada") {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well ma'am.\nWe took a lot of learnings from you.\nYou've always been a caressing and supportive teacher, just like a mother at school.\nThank you for always being there by our side ma'am.";
	} else if (name === "heena") {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well ma'am.\nWe took a lot of learnings from you.\nMany of your classes have been eye-openers for us.\nYou have always considered your student at the 1st place.\n A teacher so much dedicated to the betterment of her children.\nI hope that the emergency would have perished and you would have grown beautifully out of it.\nThank you for always being there by our side ma'am.";
	} else if (name === "raghuvendra") {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well ma'am.\nThank you for always being there by our side.\nWe took a lot of learnings from you.\nThe fun moments, the learnings have become memories to be cherished lifelong.";
	} else if (name === "anil") {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well sir.\nWe took a lot of learnings from you.\nThe fun moments, the learnings have become memories to be cherished lifelong.\n So calm and composed, it's a big learning for our lives sir.\nThank you for always being there by our side.";
	} else if (name === "pooja") {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well ma'am.\nThank you for always being there by our side.\nWe took a lot of learnings from you.\nThe fun moments, the scoldings and the learnings have become memories to be cherished lifelong.";
	} else {
		let para = document.getElementById("para");
		para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace
		para.innerHTML =
			"I hope you are doing well.\nThank you for always being there by our side and guiding us through life.\nWe took a lot of learnings from you.\nThe fun moments, the scoldings and the learnings have become memories to be cherished lifelong.";
	}
	let nameInput = document.getElementById("name");
	nameInput.classList.add("hidden");
	let nameLabel = document.getElementById("label");
	nameLabel.classList.add("hidden");
}
