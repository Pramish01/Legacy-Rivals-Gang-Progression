document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const gangs = Array.from(document.querySelectorAll(".gang"));

  // Sort gangs by points (highest first)
  gangs.sort((a, b) => parseInt(b.dataset.points) - parseInt(a.dataset.points));

  // Render each gang and re-append in sorted order
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

    container.appendChild(gang); // Re-append in correct order
  });
});
