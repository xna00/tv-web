// @ts-nocheck

setTimeout(() => {
  document.querySelector("#player_pagefullscreen_player").click();
}, 5000);

setInterval(() => {
  try {
    if (document.querySelector("#player").querySelector("video").paused) {
      document.querySelector("#play_or_pause_pause_player").click();
    }
  } catch (error) {}
}, 5000);
