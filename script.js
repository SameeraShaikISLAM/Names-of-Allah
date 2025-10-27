const names = [
  { arabic: "الله", transliteration: "Allah", meaning: "The One and Only God" },
  { arabic: "الرحمن", transliteration: "Ar-Rahman", meaning: "The Most Compassionate" },
  { arabic: "الرحيم", transliteration: "Ar-Rahim", meaning: "The Most Merciful" },
  { arabic: "الملك", transliteration: "Al-Malik", meaning: "The King and Owner of Dominion" },
  { arabic: "القدوس", transliteration: "Al-Quddus", meaning: "The Absolutely Pure" },
  { arabic: "السلام", transliteration: "As-Salam", meaning: "The Source of Peace" },
  { arabic: "المؤمن", transliteration: "Al-Mu'min", meaning: "The Giver of Faith and Security" },
  { arabic: "العزيز", transliteration: "Al-Aziz", meaning: "The Almighty, The Invincible" },
  { arabic: "الجبار", transliteration: "Al-Jabbar", meaning: "The Compeller, The Restorer" },
  { arabic: "المتكبر", transliteration: "Al-Mutakabbir", meaning: "The Supreme in Greatness" },

];

let currentIndex = 0;

const arabicEl = document.getElementById('arabic');
const transliterationEl = document.getElementById('transliteration');
const meaningEl = document.getElementById('meaning');
const card = document.getElementById('card');

function showName(index) {
  const name = names[index];
  arabicEl.textContent = name.arabic;
  transliterationEl.textContent = name.transliteration;
  meaningEl.textContent = name.meaning;
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % names.length;
  card.classList.remove('flipped');
  showName(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + names.length) % names.length;
  card.classList.remove('flipped');
  showName(currentIndex);
});

document.getElementById('flip').addEventListener('click', () => {
  card.classList.toggle('flipped');
});

showName(currentIndex);
