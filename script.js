const birthdayConfig = {
  recipient: "Beans",
  sender: "Bujoy",
  paragraphs: [
    "Hello, Beans! Sorry if ngayon lang ako nag-message haha. Gumawa kasi ako ng code, and ang dami kong ginawa ngayong araw. Medyo sinadya ko rin talagang huwag mag-message hahahaha, sorry na!",
    "Anyway, happy birthday! Ang tanda mo na pala HAHAHA, emz. But seriously, I wish you a long and happy life, good health, and more blessings to come. I hope you get all the things you’ve been working and praying for because you genuinely deserve them.",
    "I'm really thankful na dumating ka sa buhay ko. Minsan naiisip ko, paano na lang kung hindi kita nakilala? You probably don't know how grateful I am that I got to know you, but I really am. I'm thankful for all the big things you do, for the way you care, and for simply being there. Kahit minsan hindi ko sabihin, I really appreciate you more than you know.",
    "Super swerte ko to have a friend like you kasi mabait ka, maalaga ka, and you genuinely care about me. You make me feel appreciated and cared for, and honestly, minsan naiisip ko kung deserve ko ba 'yung ganung treatment. Minsan natatakot na lang ako na masanay nang sobra sa treatment mo kasi you're kinda the standard type of guy, hays HAHAHA. Pero kidding aside, I hope you know that I also value you and our friendship so much.",
    "I hope this new chapter of your life brings you more happiness, peace, success, and genuine people who will always support you. And whenever things get difficult, I hope you remember that you don't have to face everything alone. Here lang ako always, okay? You can always count on me.",
    "Happy birthday ulit, Beans! Enjoy your day and please take care of yourself always. Good luck din sa upcoming defense ninyo! I know you can do it, kaya mo 'yan! I'm always rooting for you, and I'll be here cheering for you every step of the way. 🤍"
  ]
};

const card = document.querySelector("#birthdayCard");
const toggleButton = document.querySelector("#cardToggle");
const instruction = document.querySelector("#cardInstruction");
const letterContent = document.querySelector("#letterContent");
let isAnimating = false;

function renderLetter() {
  const greeting = document.createElement("p");
  greeting.className = "letter-greeting";
  greeting.textContent = `To ${birthdayConfig.recipient},`;
  letterContent.append(greeting);

  birthdayConfig.paragraphs.forEach((paragraph) => {
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = paragraph;
    letterContent.append(messageParagraph);
  });

  const signoff = document.createElement("p");
  signoff.className = "letter-signoff";
  signoff.innerHTML = `Yours,<br>${birthdayConfig.sender}`;
  letterContent.append(signoff);
}

function toggleBirthdayCard() {
  if (isAnimating) {
    return;
  }

  isAnimating = true;
  const isOpening = !card.classList.contains("open");
  card.classList.toggle("open", isOpening);
  toggleButton.setAttribute("aria-expanded", String(isOpening));
  instruction.innerHTML = isOpening
    ? 'Click to close <span aria-hidden="true">&#10005;</span>'
    : 'Click to open <span aria-hidden="true">&#128140;</span>';

  window.setTimeout(() => {
    isAnimating = false;
  }, 1100);
}

renderLetter();
toggleButton.addEventListener("click", toggleBirthdayCard);
