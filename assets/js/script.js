const discordUsername = "sphinx0006";
      
document.getElementById("discordBtn").addEventListener("click", () => {
    const el = document.createElement('textarea');
    el.value = discordUsername;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert(`Discord username '${discordUsername}' copied!`);
});
const toggle = document.getElementById("darkModeToggle");
const icon = toggle.querySelector("i");

// Sayfa yüklenince localStorage'daki tema durumunu kontrol et
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.className = "fa-solid fa-sun";
}

// Butona tıklanınca tema değiştir ve localStorage'ı güncelle
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.className = "fa-solid fa-sun";
    localStorage.setItem("theme", "dark");
  } else {
    icon.className = "fa-solid fa-moon";
    localStorage.setItem("theme", "light");
  }
});