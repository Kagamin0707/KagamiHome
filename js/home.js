function onClickChocolateRollChoice(b)
{
	var bu = document.getElementById("chocolate-roll-choice-up");
	//alert(bu.classList);
	var bd = document.getElementById("chocolate-roll-choice-down");
	if (bu.classList.contains("choco-active-left") || bd.classList.contains("choco-active-right"))
	{
		resetChocolateRollChoice(bu);
		resetChocolateRollChoice(bd);

		bu.innerHTML = "ʌ";
		bd.innerHTML = "v";
	}
	else 
	{
		activeChocolateRollChoice(b, bu);
		if (b === bu) inactiveChocolateRollChoice(bd);
		else inactiveChocolateRollChoice(bu);
	}

}

function activeChocolateRollChoice(b, bu)
{
	var s = b === bu ? "left" : "right";
	b.classList.add("choco-active-" + s);
	b.style.animation = `${"choco-active-" + s} 0.5s ease`;
	b.style.width = "100%";
	setTimeout(() =>
	{
		b.innerHTML = "恭喜你！100%的人认为 "
		b.innerHTML += b === bu ? "ʌ" : "v";
		b.innerHTML += " 才是头！"
	}
	, 80);
}

function inactiveChocolateRollChoice(b)
{
	b.classList.add("choco-inactive");
	b.style.animation = `${"choco-inactive"} 0.5s ease`;
}

function resetChocolateRollChoice(b)
{
	b.classList.remove("choco-active-left");
	b.classList.remove("choco-active-right");
	b.classList.remove("choco-inactive");
	b.style.animation = "";
	b.style.width = "40%";
}