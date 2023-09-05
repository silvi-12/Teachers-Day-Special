const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
	container.classList.toggle("change");
});

const nameMessages = {
	sheetal:
		"My life's 1st teacher, guide, support, mentor, and everything.\nThank you for being there, Mom. I can't imagine my life without you.\nA lot to learn from you, a multitasking, super-speedo, and sweet person. Love you, Mom!❤️",
	vijay:
		"My life's 1st teacher, guide, support, mentor, and everything.\nThank you for being there, Dad. I can't imagine my life without you.\nA lot to learn from you; you have a strong and sensible approach. My political head, I love you a lot!❤️",
	yogeeta:
		"I hope you are doing well ma'am.\nThank you for always being there by our side.\nWe took a lot of learnings from you.\nThe fun moments, the learnings have become memories to be cherished lifelong.",
	chitra:
		"I hope you are doing well ma'am.\nThank you for always being there by our side.\nYou are & will always be my idol.\nI haven't seen such a multitasking and dedicated person.\nMay God shower his blessings & keep you happy & working.",
	Gowri:
		"I hope you are doing well ma'am.\nThank you for always being there by our side.\nA strict but well-wishing teacher.\nMissing you ma'am, hope to meet you soon.",
	sushree:
		"I hope you are doing well ma'am.\nA teacher you believed and trusted me more than I myself did.\nYou have always motivated me ma'am and I'll always remain obliged.\nI have never met a teacher so calm & composed.\nThank you for always being there by our side.",
	shailesh:
		"I hope you are doing well sir.\nWe took a lot of learnings from you.\nThe efforts you took to teach us during covid times are really great sir.\nYour kind words of praise have always motivated me, & still remind me of my goals to reach heights.\nThank you for always being there by our side sir.",
	sampada:
		"I hope you are doing well ma'am.\nWe took a lot of learnings from you.\nYou've always been a caressing and supportive teacher, just like a mother at school.\nThank you for always being there by our side ma'am.",
	heena:
		"I hope you are doing well ma'am.\nWe took a lot of learnings from you.\nMany of your classes have been eye-openers for us.\nYou have always considered your student at the 1st place.\nA teacher so much dedicated to the betterment of her children.\nI hope that the emergency would have perished and you would have grown beautifully out of it.\nThank you for always being there by our side ma'am.",
	raghuvendra:
		"I hope you are doing well ma'am.\nThank you for always being there by our side.\nWe took a lot of learnings from you.\nThe fun moments, the learnings have become memories to be cherished lifelong.",
	anil: "I hope you are doing well sir.\nWe took a lot of learnings from you.\nThe fun moments, the learnings have become memories to be cherished lifelong.\nSo calm and composed, it's a big learning for our lives sir.\nThank you for always being there by our side.",
	pooja:
		"I hope you are doing well ma'am.\nThank you for always being there by our side.\nWe took a lot of learnings from you.\nThe fun moments, the scoldings, and the learnings have become memories to be cherished lifelong.",
};

function displayMsg() {
	const name = document.getElementById("name").value.toLowerCase();
	const para = document.getElementById("para");
	para.style.whiteSpace = "pre-line"; // This preserves newlines and whitespace

	if (nameMessages[name]) {
		para.textContent = nameMessages[name];
	} else {
		para.textContent =
			"I hope you are doing well.\nThank you for always being there by our side and guiding us through life.\nWe took a lot of learnings from you.\nThe fun moments, the scoldings, and the learnings have become memories to be cherished lifelong.";
	}

	const nameInput = document.getElementById("name");
	nameInput.classList.add("hidden");
	const nameLabel = document.getElementById("label");
	nameLabel.classList.add("hidden");
}
