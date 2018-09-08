'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(100, 280);
  ctx.lineTo(520, 280);
  ctx.lineTo(520, 10);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fill();

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);
}
