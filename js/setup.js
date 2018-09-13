'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var defaultFirstName = ['Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];
var defaultLastName = ['да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var defaultCoatColor = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var defaultEyesColor = ['black',
  'red',
  'blue',
  'yellow',
  'green'];
var defaultFireballColor = ['#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var inpuCoatColor = setup.querySelector('input[name=coat-color]');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var inputEyesColor = setup.querySelector('input[name=eyes-color]');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var inputFireballColor = setupFireballWrap.querySelector('input[name=fireball-color]');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var generateRandomNumber = function (max, min) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};
var getRandomArrayElement = function (array) {
  return array[generateRandomNumber(array.length - 1, 0)];
};

var generateCharactersArray = function (defaultFirstNameArr, defaultLastNameArr, defaultCoatColorArr, defaultEyesColorArr) {
  var charactersArray = [];
  for (var i = 1; i <= 4; i++) {
    var character = {};
    var firstName = getRandomArrayElement(defaultFirstNameArr);
    var lastName = getRandomArrayElement(defaultLastNameArr);
    var coatColor = getRandomArrayElement(defaultCoatColorArr);
    var eyesColor = getRandomArrayElement(defaultEyesColorArr);
    character['name'] = firstName + ' ' + lastName;
    character['coatColor'] = coatColor;
    character['eyesColor'] = eyesColor;
    charactersArray.push(character);
  }
  return charactersArray;
};
var generateSimilarWizardDOM = function (character) {
  var similarWizard = similarWizardTemplate.cloneNode(true);
  similarWizard.querySelector('.setup-similar-label').textContent = character['name'];
  similarWizard.querySelector('.wizard-coat').style.fill = character['coatColor'];
  similarWizard.querySelector('.wizard-eyes').style.fill = character['eyesColor'];
  return similarWizard;
};
var addSimilarWizardTemplate = function (charactersArray) {
  var similarWizardTemplateElements = document.createDocumentFragment();
  for (var i = 0; i < charactersArray.length; i++) {
    var similarWizard = generateSimilarWizardDOM(charactersArray[i], similarWizardTemplate);
    similarWizardTemplateElements.appendChild(similarWizard);
  }
  setupSimilarList.appendChild(similarWizardTemplateElements);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
wizardCoat.addEventListener('click', function () {
  var coatColor = getRandomArrayElement(defaultCoatColor);
  wizardCoat.style.fill = coatColor;
  inpuCoatColor.value = coatColor;
});
wizardEyes.addEventListener('click', function () {
  var eyesColor = getRandomArrayElement(defaultEyesColor);
  wizardEyes.style.fill = eyesColor;
  inputEyesColor.value = eyesColor;
});
setupFireballWrap.addEventListener('click', function () {
  var fireballColor = getRandomArrayElement(defaultFireballColor);
  setupFireballWrap.style.background = fireballColor;
  inputFireballColor.value = fireballColor;
});

var charactersArray = generateCharactersArray(defaultFirstName, defaultLastName, defaultCoatColor, defaultEyesColor);
addSimilarWizardTemplate(charactersArray);

