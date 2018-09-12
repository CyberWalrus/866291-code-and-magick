'use strict';
var windowShadowColor = 'rgba(0, 0, 0, 0.7)';
var windowFillStyle = 'white';
var windowshadowOffsetX = 10;
var windowshadowOffsetY = 10;
var windowsStartX = 100;
var windowsStartY = 10;
var windowsWidth = 420;
var windowsHight = 270;
var textFontMono = '16px PT Mono';
var textFillStyle = 'black';
var textStartX = 150;
var textStartY = 30;
var textHight = 20;
var histogramRedFillStyle = 'rgba(255, 0, 0, 1)';
var histogramYou = 'Вы';
var histogramStartX = 150;
var histogramStartY = 240;
var histogramMaxHight = 150;
var histogramWidth = 40;
var histogramBetweenWidth = 50;
var histogramTextStartY = 255;
var histogramTextDeltaY = 5;
var generateBlueColor = function () {
  return 'rgba(0, 0, ' + (Math.floor(Math.random() * (256 - 0)) + 0) + ', 1)';
};
var createHistogram = function (ctx, number, percentHight, name, time) {
  ctx.beginPath();
  ctx.moveTo(histogramStartX + number * (histogramBetweenWidth + histogramWidth), histogramStartY);
  ctx.lineTo(histogramStartX + number * (histogramBetweenWidth + histogramWidth), histogramStartY - histogramMaxHight * percentHight);
  ctx.lineTo(histogramStartX + number * (histogramBetweenWidth + histogramWidth) + histogramWidth, histogramStartY - histogramMaxHight * percentHight);
  ctx.lineTo(histogramStartX + number * (histogramBetweenWidth + histogramWidth) + histogramWidth, histogramStartY);
  ctx.closePath();
  if (name === histogramYou) {
    ctx.fillStyle = histogramRedFillStyle;
  } else {
    ctx.fillStyle = generateBlueColor();
  }
  ctx.shadowColor = 'none';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fill();
  ctx.font = textFontMono;
  ctx.fillStyle = textFillStyle;
  ctx.fillText(name, histogramStartX + number * (histogramBetweenWidth + histogramWidth), histogramTextStartY);
  ctx.fillText(time, histogramStartX + number * (histogramBetweenWidth + histogramWidth), histogramStartY - histogramMaxHight * percentHight - histogramTextDeltaY);
};
var createWindows = function (ctx) {
  ctx.beginPath();
  ctx.moveTo(windowsStartX, windowsStartY);
  ctx.lineTo(windowsStartX, windowsStartY + windowsHight);
  ctx.lineTo(windowsStartX + windowsWidth, windowsStartY + windowsHight);
  ctx.lineTo(windowsStartX + windowsWidth, windowsStartY);
  ctx.closePath();
  ctx.fillStyle = windowFillStyle;
  ctx.shadowColor = windowShadowColor;
  ctx.shadowOffsetX = windowshadowOffsetX;
  ctx.shadowOffsetY = windowshadowOffsetY;
  ctx.fill();
};
var createText = function (ctx) {
  ctx.font = textFontMono;
  ctx.shadowColor = 'none';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = textFillStyle;
  ctx.fillText('Ура вы победили!', textStartX, textStartY);
  ctx.fillText('Список результатов:', textStartX, textStartY + textHight);
};
window.renderStatistics = function (ctx, names, times) {
  createWindows(ctx);
  createText(ctx);
  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  for (var e = 0; e < times.length; e++) {
    var percentHight = times[e] / maxTime;
    createHistogram(ctx, e, percentHight, names[e], Math.round(times[e]));
  }
};
