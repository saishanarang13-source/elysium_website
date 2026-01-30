// 🔴 GOOGLE APPS SCRIPT URL
const API_URL = "https://script.google.com/macros/s/AKfycbwk13CdUNZJzB_oegBgDZ69dqI_sNpoHMjxHB0RpdCq-xcfl5-mfPTggCb_ZLdUeJdsew/exec";
/* 🔢 LIVE COUNTER */
let current = 0;

function animateCount(target) {
  if (current < target) {
    current += Math.ceil((target - current) / 20);
    document.getElementById("count").innerText = current;
    requestAnimationFrame(() => animateCount(target));
  }
}

async function updateCount() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    animateCount(data.count);
  } catch (e) {
    console.log("Error fetching count");
  }
}

updateCount();
setInterval(updateCount, 10000);

/* SCROLL REVEAL */
const sections = document.querySelectorAll(".hidden");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

/* PARALLAX EFFECT */
window.addEventListener("scroll", () => {
  const y = scrollY;
  document.querySelector(".stars").style.transform = `translateY(${y * 0.1}px)`;
  document.querySelector(".nebula").style.transform = `translateY(${y * 0.2}px)`;
});

