/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

document.addEventListener("DOMContentLoaded", function () {
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
