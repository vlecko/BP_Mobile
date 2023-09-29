import { de, en, es, fr, ja, pt } from './src/i18n/index';

const title__h1 = document.querySelector('h1.title__h1');
const title_one = document.querySelector('p.title_one');
const title_two = document.querySelector('p.title_two');
const title_three = document.querySelector('p.title_three');
const item_one = document.querySelector('div.item_one');
const item_two = document.querySelector('div.item_two');
const item_three = document.querySelector('div.item_three');
const btn__prise_year = document.querySelector('div.btn__prise-year');
const offer = document.querySelector('div.offer');
const btn__prise = document.querySelector('div.btn__prise');
const btn__title_one = document.querySelector('div.btn__title-one');
const btn__title_two = document.querySelector('div.btn__title-two');
const btn__first = document.querySelector('div.btn__first');
const footer__title_one = document.querySelector('a.footer__title-one');
const footer__title_two = document.querySelector('a.footer__title-two');
const footer__title_three = document.querySelector('a.footer__title-three');
const footer = document.querySelector('section.footer');
const header = document.querySelector('section.header');
const price = document.querySelector('div.btn__prise');
const two = document.querySelector('div.two');
const title = document.querySelector('section.title');

const allLang = ['de', 'en', 'es', 'fr', 'ja', 'pt']
let count = 1;

btn__first.addEventListener('click', () => {
  item_one.classList.remove('border');
  item_two.classList.remove('border');
  item_three.classList.remove('border');
  if(count === 1){
    item_one.classList.add('border');
   return count += 1;
  }
  if(count === 2){
    item_two.classList.add('border');
    return count += 1;
  }
  if(count === 3){
    item_three.classList.add('border');
    return count = 1
  }
})

function checkLanguages() {
  let hash = window.location.hash ? window.location.hash.substr(1) : window.navigator.language.substr(0, 2);
  if(!allLang.includes(hash)){
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  switch(hash) {
    case 'de':
     return de;
    case 'es':
      return es;
    case 'fr':
      return fr;
    case 'ja':
      return ja;
    case 'pt':
      return pt;
    default:
     return en;
  }
}

const lang = checkLanguages();

function changeLanguage() {
  title__h1.innerHTML = lang['Get Unlimited <br>Access'];
  title_one.innerHTML = lang['Unlimited Art <br>Creation'];
  title_two.innerHTML = lang['Exclusive <br>Styles'];
  title_three.innerHTML = lang['Magic Avatars <br>With 20% Off'];
  btn__prise_year.innerHTML = lang['Just {{price}} per year'];
  offer.innerHTML = lang['BEST OFFER'];
  btn__prise.innerHTML = lang['{{price}} <br>per week'];
  btn__title_one.innerHTML = lang['YEARLY ACCESS'];
  btn__title_two.innerHTML = lang['WEEKLY ACCESS'];
  btn__first.innerHTML = lang['Continue'];
  footer__title_one.innerHTML = lang['Terms of Use'];
  footer__title_two.innerHTML = lang['Privacy Policy'];
  footer__title_three.innerHTML = lang['Restore'];
}

function changeLanguagesStyle() {
  footer.classList.remove(
    'footer-pt_375',
    'footer-es_390',
    'footer-de_414',
    'footer-de_390',
    'footer-es_375',
    'footer-es_414',
    'footer-de_414',
    'footer-pt_414',
    'footer-en_390',
    'footer-en_414',
    'footer-fr_414',
    'footer-fr_375',
    'footer-de_375'
  );
  header.classList.remove(
    'header-es-414',
    'header-es-390',
    'header-de-375',
    'header-de-414',
    'header-de-390',
    'header-fr-414',
    'header-fr-390',
    'header-fr-375',
    'header-ja-390',
    'header-pt-390',
    'header-pt-375'
  );
  price.classList.remove(
    'btn__prise-es',
    'btn__prise-es', 'btn__prise-pt',
    'btn__prise_pt_375',
    'btn__prise-fr_375'
  );
  title.classList.remove('title-es');
  two.classList.remove('title-es', 'two_de_375', 'two_375', 'two_pt_414');
  btn__prise.classList.remove('btn__prise_de_375', 'btn__prise_fr_414', 'btn__prise-fr');
  
  if(window.innerWidth === 375){
    if(lang.Lang === 'es'){
      footer.classList.add('footer-es_375');
      price.classList.add('btn__prise-es');
    }
    if(lang.Lang === 'pt'){
      header.classList.add('header-pt-375');
      footer.classList.add('footer-pt_375');
      price.classList.add('btn__prise_pt_375');
    }
    if(lang.Lang === 'de'){
      footer.classList.add('footer-de_375');
      header.classList.add('header-de-375');
      btn__prise.classList.add('btn__prise_de_375');
      two.classList.add('two_de_375')
    }
    if(lang.Lang === 'fr'){
      header.classList.add('header-fr-375');
      btn__prise.classList.add('btn__prise-fr_375');
      footer.classList.add('footer-fr_375');
      two.classList.add('two_375')
    }
  }
  if(window.innerWidth === 414){
    if(lang.Lang === 'es'){
      header.classList.add('header-es-414');
      footer.classList.add('footer-es_414');
      price.classList.add('btn__prise-es');
    }
    if(lang.Lang === 'en'){
      footer.classList.add('footer-en_414');
    }
    if(lang.Lang === 'pt'){
      footer.classList.add('footer-pt_414');
      price.classList.add('btn__prise-pt');
      two.classList.add('two_pt_414');
    }
    if(lang.Lang === 'ja'){
      header.classList.add('header-de-390');
    }
    if(lang.Lang === 'de'){
      footer.classList.add('footer-de_414');
      header.classList.add('header-de-414');
      btn__prise.classList.add('btn__prise_de_375');
    }
    if(lang.Lang === 'fr'){
      btn__prise.classList.add('btn__prise_fr_414');
      footer.classList.add('footer-fr_414');
      header.classList.add('header-fr-414');
    }
  }
  if(window.innerWidth === 390){
    if(lang.Lang === 'es'){
      header.classList.add('header-es-390');
      price.classList.add('btn__prise-es');
      title.classList.add('title-es');
      footer.classList.add('footer-es_390');
    }
    if(lang.Lang === 'en'){
      header.classList.add('header-fr-390');
      footer.classList.add('footer-en_390');
    }
    if(lang.Lang === 'ja'){
      header.classList.add('header-ja-390');
    }
    if(lang.Lang === 'pt'){
      header.classList.add('header-pt-390');
      footer.classList.add('footer-pt_390');
      price.classList.add('btn__prise-pt');
    }
    if(lang.Lang === 'de'){
      header.classList.add('header-de-390');
      footer.classList.add('footer-de_390');
      two.classList.add('two_de_375')
      btn__prise.classList.add('btn__prise_de_375');
    }
    if(lang.Lang === 'fr'){
      header.classList.add('header-fr-390');
      footer.classList.add('footer-de_390');
      btn__prise.classList.add('btn__prise-fr');
    }
  }
}
window.addEventListener('resize', function(event) {
  changeLanguagesStyle();
}, true);
changeLanguagesStyle();
changeLanguage();