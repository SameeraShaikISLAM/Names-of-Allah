const namesOfAllah = [
  { arabic: "ٱللّٰه", transliteration: "Allah", meaning: "The God" },
  { arabic: "ٱلرَّحْمَـانُ", transliteration: "Ar-Rahman", meaning: "The Most Merciful" },
  { arabic: "ٱلرَّحِيمُ", transliteration: "Ar-Raheem", meaning: "The Most Compassionate" },
  { arabic: "ٱلْمَلِكُ", transliteration: "Al-Malik", meaning: "The King and Owner of Dominion" },
  { arabic: "ٱلْقُدُّوسُ", transliteration: "Al-Quddus", meaning: "The Absolutely Pure" },
  { arabic: "ٱلسَّلَامُ", transliteration: "As-Salam", meaning: "The Source of Peace" },
  { arabic: "ٱلْمُؤْمِنُ", transliteration: "Al-Mu’min", meaning: "The Giver of Faith and Security" },
  { arabic: "ٱلْمُهَيْمِنُ", transliteration: "Al-Muhaymin", meaning: "The Protector" },
  { arabic: "ٱلْعَزِيزُ", transliteration: "Al-‘Aziz", meaning: "The Almighty" },
  { arabic: "ٱلْجَبَّارُ", transliteration: "Al-Jabbar", meaning: "The Compeller" },
  { arabic: "ٱلْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", meaning: "The Supreme in Greatness" },
  { arabic: "ٱلْخَالِقُ", transliteration: "Al-Khaliq", meaning: "The Creator" },
  { arabic: "ٱلْبَارِئُ", transliteration: "Al-Bari’", meaning: "The Evolver" },
  { arabic: "ٱلْمُصَوِّرُ", transliteration: "Al-Musawwir", meaning: "The Fashioner" },
  { arabic: "ٱلْغَفَّارُ", transliteration: "Al-Ghaffar", meaning: "The All-Forgiving" },
  { arabic: "ٱلْقَهَّارُ", transliteration: "Al-Qahhar", meaning: "The Subduer" },
  { arabic: "ٱلْوَهَّابُ", transliteration: "Al-Wahhab", meaning: "The Bestower" },
  { arabic: "ٱلرَّزَّاقُ", transliteration: "Ar-Razzaq", meaning: "The Provider" },
  { arabic: "ٱلْفَتَّاحُ", transliteration: "Al-Fattah", meaning: "The Opener" },
  { arabic: "ٱلْعَلِيمُ", transliteration: "Al-‘Aleem", meaning: "The All-Knowing" },
  { arabic: "ٱلْقَابِضُ", transliteration: "Al-Qabid", meaning: "The Withholder" },
  { arabic: "ٱلْبَاسِطُ", transliteration: "Al-Basit", meaning: "The Expander" },
  { arabic: "ٱلْخَافِضُ", transliteration: "Al-Khafid", meaning: "The Abaser" },
  { arabic: "ٱلرَّافِعُ", transliteration: "Ar-Rafi‘", meaning: "The Exalter" },
  { arabic: "ٱلْمُعِزُّ", transliteration: "Al-Mu‘izz", meaning: "The Honourer" },
  { arabic: "ٱلْمُذِلُّ", transliteration: "Al-Mudhill", meaning: "The Dishonourer" },
  { arabic: "ٱلسَّمِيعُ", transliteration: "As-Sami‘", meaning: "The All-Hearing" },
  { arabic: "ٱلْبَصِيرُ", transliteration: "Al-Basir", meaning: "The All-Seeing" },
  { arabic: "ٱلْحَكَمُ", transliteration: "Al-Hakam", meaning: "The Judge" },
  { arabic: "ٱلْعَدْلُ", transliteration: "Al-‘Adl", meaning: "The Just" },
  { arabic: "ٱللَّطِيفُ", transliteration: "Al-Latif", meaning: "The Subtle One" },
  { arabic: "ٱلْخَبِيرُ", transliteration: "Al-Khabir", meaning: "The All-Aware" },
  { arabic: "ٱلْحَلِيمُ", transliteration: "Al-Haleem", meaning: "The Forbearing" },
  { arabic: "ٱلْعَظِيمُ", transliteration: "Al-‘Azim", meaning: "The Magnificent" },
  { arabic: "ٱلْغَفُورُ", transliteration: "Al-Ghafur", meaning: "The Forgiving" },
  { arabic: "ٱلشَّكُورُ", transliteration: "Ash-Shakur", meaning: "The Appreciative" },
  { arabic: "ٱلْعَلِيُّ", transliteration: "Al-‘Aliyy", meaning: "The Most High" },
  { arabic: "ٱلْكَبِيرُ", transliteration: "Al-Kabir", meaning: "The Most Great" },
  { arabic: "ٱلْحَفِيظُ", transliteration: "Al-Hafiz", meaning: "The Preserver" },
  { arabic: "ٱلْمُقِيتُ", transliteration: "Al-Muqit", meaning: "The Sustainer" },
  { arabic: "ٱلْحَسِيبُ", transliteration: "Al-Hasib", meaning: "The Reckoner" },
  { arabic: "ٱلْجَلِيلُ", transliteration: "Al-Jalil", meaning: "The Majestic" },
  { arabic: "ٱلْكَرِيمُ", transliteration: "Al-Karim", meaning: "The Generous" },
  { arabic: "ٱلرَّقِيبُ", transliteration: "Ar-Raqib", meaning: "The Watchful" },
  { arabic: "ٱلْمُجِيبُ", transliteration: "Al-Mujib", meaning: "The Responsive" },
  { arabic: "ٱلْوَاسِعُ", transliteration: "Al-Wasi‘", meaning: "The All-Encompassing" },
  { arabic: "ٱلْحَكِيمُ", transliteration: "Al-Hakim", meaning: "The Most Wise" },
  { arabic: "ٱلْوَدُودُ", transliteration: "Al-Wadud", meaning: "The Loving One" },
  { arabic: "ٱلْمَجِيدُ", transliteration: "Al-Majid", meaning: "The Glorious" },
  { arabic: "ٱلْبَاعِثُ", transliteration: "Al-Ba‘ith", meaning: "The Resurrector" },
  { arabic: "ٱلشَّهِيدُ", transliteration: "Ash-Shahid", meaning: "The Witness" },
  { arabic: "ٱلْحَقُّ", transliteration: "Al-Haqq", meaning: "The Truth" },
  { arabic: "ٱلْوَكِيلُ", transliteration: "Al-Wakil", meaning: "The Trustee" },
  { arabic: "ٱلْقَوِيُّ", transliteration: "Al-Qawiyy", meaning: "The All-Strong" },
  { arabic: "ٱلْمَتِينُ", transliteration: "Al-Matin", meaning: "The Firm" },
  { arabic: "ٱلْوَلِيُّ", transliteration: "Al-Waliyy", meaning: "The Protecting Friend" },
  { arabic: "ٱلْحَمِيدُ", transliteration: "Al-Hamid", meaning: "The Praiseworthy" },
  { arabic: "ٱلْمُحْصِي", transliteration: "Al-Muhsi", meaning: "The Reckoner" },
  { arabic: "ٱلْمُبْدِئُ", transliteration: "Al-Mubdi’", meaning: "The Originator" },
  { arabic: "ٱلْمُعِيدُ", transliteration: "Al-Mu‘id", meaning: "The Restorer" },
  { arabic: "ٱلْمُحْيِي", transliteration: "Al-Muhyi", meaning: "The Giver of Life" },
  { arabic: "ٱلْمُمِيتُ", transliteration: "Al-Mumit", meaning: "The Taker of Life" },
  { arabic: "ٱلْحَيُّ", transliteration: "Al-Hayy", meaning: "The Ever-Living" },
  { arabic: "ٱلْقَيُّومُ", transliteration: "Al-Qayyum", meaning: "The Sustainer" },
  { arabic: "ٱلْوَاجِدُ", transliteration: "Al-Wajid", meaning: "The Finder" },
  { arabic: "ٱلْمَاجِدُ", transliteration: "Al-Majid", meaning: "The Noble" },
  { arabic: "ٱلْوَاحِدُ", transliteration: "Al-Wahid", meaning: "The One" },
  { arabic: "ٱلصَّمَدُ", transliteration: "As-Samad", meaning: "The Eternal" },
  { arabic: "ٱلْقَادِرُ", transliteration: "Al-Qadir", meaning: "The Able" },
  { arabic: "ٱلْمُقْتَدِرُ", transliteration: "Al-Muqtadir", meaning: "The Powerful" },
  { arabic: "ٱلْمُقَدِّمُ", transliteration: "Al-Muqaddim", meaning: "The Expediter" },
  { arabic: "ٱلْمُؤَخِّرُ", transliteration: "Al-Mu’akhkhir", meaning: "The Delayer" },
  { arabic: "ٱلأَوَّلُ", transliteration: "Al-Awwal", meaning: "The First" },
  { arabic: "ٱلآخِرُ", transliteration: "Al-Akhir", meaning: "The Last" },
  { arabic: "ٱلظَّاهِرُ", transliteration: "Az-Zahir", meaning: "The Manifest" },
  { arabic: "ٱلْبَاطِنُ", transliteration: "Al-Batin", meaning: "The Hidden" },
  { arabic: "ٱلْوَالِي", transliteration: "Al-Wali", meaning: "The Governor" },
  { arabic: "ٱلْمُتَعَالِي", transliteration: "Al-Muta‘ali", meaning: "The Exalted" },
  { arabic: "ٱلْبَرُّ", transliteration: "Al-Barr", meaning: "The Source of Goodness" },
  { arabic: "ٱلتَّوَّابُ", transliteration: "At-Tawwab", meaning: "The Accepter of Repentance" },
  { arabic: "ٱلْمُنْتَقِمُ", transliteration: "Al-Muntaqim", meaning: "The Avenger" },
  { arabic: "ٱلْعَفُوُّ", transliteration: "Al-‘Afuww", meaning: "The Pardoner" },
  { arabic: "ٱلرَّؤُوفُ", transliteration: "Ar-Ra’uf", meaning: "The Compassionate" },
  { arabic: "مَالِكُ ٱلْمُلْكِ", transliteration: "Malik al-Mulk", meaning: "The Owner of All Sovereignty" },
  { arabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ", transliteration: "Dhul-Jalal wal-Ikram", meaning: "The Lord of Majesty and Honour" },
  { arabic: "ٱلْمُقْسِطُ", transliteration: "Al-Muqsit", meaning: "The Equitable" },
  { arabic: "ٱلْجَامِعُ", transliteration: "Al-Jami‘", meaning: "The Gatherer" },
  { arabic: "ٱلْغَنِيُّ", transliteration: "Al-Ghaniyy", meaning: "The Self-Sufficient" },
  { arabic: "ٱلْمُغْنِي", transliteration: "Al-Mughni", meaning: "The Enricher" },
  { arabic: "ٱلْمَانِعُ", transliteration: "Al-Mani‘", meaning: "The Preventer" },
  { arabic: "ٱلضَّارُّ", transliteration: "Ad-Darr", meaning: "The Distresser" },
  { arabic: "ٱلنَّافِعُ", transliteration: "An-Nafi‘", meaning: "The Benefactor" },
  { arabic: "ٱلنُّورُ", transliteration: "An-Nur", meaning: "The Light" },
  { arabic: "ٱلْهَادِي", transliteration: "Al-Hadi", meaning: "The Guide" },
  { arabic: "ٱلْبَدِيعُ", transliteration: "Al-Badi‘", meaning: "The Incomparable" },
  { arabic: "ٱلْبَاقِي", transliteration: "Al-Baqi", meaning: "The Everlasting" },
  { arabic: "ٱلْوَارِثُ", transliteration: "Al-Warith", meaning: "The Inheritor" },
  { arabic: "ٱلرَّشِيدُ", transliteration: "Ar-Rashid", meaning: "The Guide to the Right Path" },
  { arabic: "ٱلصَّبُورُ", transliteration: "As-Sabur", meaning: "The Patient" }
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
