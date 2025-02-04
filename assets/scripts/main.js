function changeLanguage(lang) {
  const azLang = document.getElementById('az');
  const enLang = document.getElementById('en');

  if (lang == 'az') {
    const flipCard = document.getElementById('flipCard');
    flipCard.classList.remove('flipped');
    azLang.classList.add('active');
    enLang.classList.remove('active');
  } else {
    const flipCard = document.getElementById('flipCard');
    flipCard.classList.add('flipped');
    azLang.classList.remove('active');
    enLang.classList.add('active');
  }
}