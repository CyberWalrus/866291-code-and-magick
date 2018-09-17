'use strict';

(function () {
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var setup = document.querySelector('.setup');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var inpuCoatColor = setup.querySelector('input[name=coat-color]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var inputEyesColor = setup.querySelector('input[name=eyes-color]');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupFireballWrap.querySelector('input[name=fireball-color]');
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

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
  wizardCoat.addEventListener('click', function () {
    var coatColor = window.data.getRandomArrayElement(window.data.defaultCoatColor);
    wizardCoat.style.fill = coatColor;
    inpuCoatColor.value = coatColor;
  });
  wizardEyes.addEventListener('click', function () {
    var eyesColor = window.data.getRandomArrayElement(window.data.defaultEyesColor);
    wizardEyes.style.fill = eyesColor;
    inputEyesColor.value = eyesColor;
  });
  setupFireballWrap.addEventListener('click', function () {
    var fireballColor = window.data.getRandomArrayElement(window.data.defaultFireballColor);
    setupFireballWrap.style.background = fireballColor;
    inputFireballColor.value = fireballColor;
  });
  addSimilarWizardTemplate(window.data.charactersArray);
})();


