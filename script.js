const CONFIG = {
  discord: "https://discord.gg/INVITEKODUN",
  apply: "https://forms.gle/BASVURULINKIN",
};

document.getElementById("year").textContent = new Date().getFullYear();

["discordBtn","discordBtn2","discordBtn3"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = CONFIG.discord;
});
["applyBtn","applyBtn2"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = CONFIG.apply;
});

document.getElementById("onlineVal").textContent = "Yakında";
