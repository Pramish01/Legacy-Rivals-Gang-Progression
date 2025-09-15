document.addEventListener("DOMContentLoaded", () => {
  const gangs = document.querySelectorAll(".gang");

  gangs.forEach(gang => {
    const name = gang.dataset.name;
    const level = gang.dataset.level;
    const points = parseInt(gang.dataset.points);
    const max = parseInt(gang.dataset.max);
    const logo = gang.dataset.logo;

    const percent = max > 0 ? (points / max) * 100 : 0;

    gang.innerHTML = `
      <div class="gang-header">
        <img src="${logo}" alt="${name}">
        ${name} – Level: ${level}
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${percent}%;"></div>
        <div class="progress-text">${points} / ${max}</div>
      </div>
    `;
  });
});
