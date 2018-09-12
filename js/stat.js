'use strict';
var randomBlueColor = function () {
  return 'rgba(0, 0, ' + (Math.floor(Math.random() * (256 - 0)) + 0) + ', 1)';
};
var createHistogram = function (ctx, number, percentHight, name, time) {
  ctx.beginPath();
  ctx.moveTo(150 + number * 90, 240);
  ctx.lineTo(150 + number * 90, 240 - 150 * percentHight);
  ctx.lineTo(150 + number * 90 + 40, 240 - 150 * percentHight);
  ctx.lineTo(150 + number * 90 + 40, 240);
  ctx.closePath();
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = randomBlueColor();
  }
  ctx.shadowColor = 'none';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fill();
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText(name, 150 + number * 90, 255);
  ctx.fillText(time, 150 + number * 90, 240 - 150 * percentHight - 5);
};
var createWindows = function (ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(100, 280);
  ctx.lineTo(520, 280);
  ctx.lineTo(520, 10);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fill();
};
var createText = function (ctx) {
  ctx.font = '16px PT Mono';
  ctx.shadowColor = 'none';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:', 150, 50);
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
