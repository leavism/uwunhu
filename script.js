const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay");

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1");

const can = document.getElementById("can");

noBtn.addEventListener("click", () => {
  yesBtn.style.width = `${yesBtn.offsetWidth + 50}px`;
  yesBtn.style.height = `${yesBtn.offsetHeight + 50}px`;
	
	can1.style.width = `${can1.offsetWidth + 10}px`;
	can1.style.height = `${can1.offsetHeight + 10}px`;
});

yesBtn.addEventListener("click", () => {
  yayText.style.display = "block";

  yayText1.style.display = "block";

  can.style.display = "none";

  can1.style.display = "none";
});
