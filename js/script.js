

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // 1. Randomize individual flower spans
  const flowerSpans = document.querySelectorAll("span.flower");

  flowerSpans.forEach(span => {
    // Random size
    const sizeClasses = ["flower-small", "flower-medium", "flower-large"];
    if (Math.random() < 0.7) {
      const size = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
      span.classList.add(size);
    }

    // Random fade effect
    if (Math.random() < 0.4) {
      span.classList.add("flower-fade");
    }
  });

  // 2. Dynamic conclusion switching
  const conclusionBlocks = document.querySelectorAll(".conclusion-class");

  function showConclusionByKeyword(keyword) {
    conclusionBlocks.forEach(div => {
      const select = div.querySelector("select");
      const divId = div.id.toLowerCase();

      if (divId.includes(keyword)) {
        div.classList.add("selected-conclusion");

        // Update the select to reflect the chosen value (if it exists)
        if (select) {
          for (let i = 0; i < select.options.length; i++) {
            const optText = select.options[i].textContent.toLowerCase();
            if (optText.includes(keyword)) {
              select.selectedIndex = i;
              break;
            }
          }
        }

      } else {
        div.classList.remove("selected-conclusion");
      }
    });
  }

  // Default state
  showConclusionByKeyword("signals");

  // Attach listeners to all internal selects
  conclusionBlocks.forEach(div => {
    const select = div.querySelector("select");
    if (select) {
      select.addEventListener("change", function () {
        const selected = select.value.toLowerCase();
        let keyword = "";

        if (selected.includes("signal")) keyword = "signals";
        else if (selected.includes("wechat")) keyword = "wechat";
        else if (selected.includes("sky") || selected.includes("meta")) keyword = "meta";

        if (keyword) showConclusionByKeyword(keyword);
      });
    }
  });
});