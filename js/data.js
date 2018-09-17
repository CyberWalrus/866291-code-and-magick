'use strict';

(function () {
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
  var charactersArray = generateCharactersArray(defaultFirstName, defaultLastName, defaultCoatColor, defaultEyesColor);

  window.data = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    defaultFirstName: defaultFirstName,
    defaultLastName: defaultLastName,
    defaultCoatColor: defaultCoatColor,
    defaultEyesColor: defaultEyesColor,
    defaultFireballColor: defaultFireballColor,
    charactersArray: charactersArray,
    generateRandomNumber: generateRandomNumber,
    getRandomArrayElement: getRandomArrayElement,
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
