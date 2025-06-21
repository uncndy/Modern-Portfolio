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

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
    icon.className = "fa-solid fa-sun";
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
    icon.className = "fa-solid fa-moon";
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});