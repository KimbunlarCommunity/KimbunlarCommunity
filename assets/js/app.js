(function(){
  const cfg = window.SITE_CONFIG || {};
  const $ = (q, el=document) => el.querySelector(q);
  const $$ = (q, el=document) => Array.from(el.querySelectorAll(q));

  // Fill brand texts
  $$(".js-brand").forEach(el => el.textContent = cfg.brandName || "KimbunlarCommunity");
  $$(".js-subbrand").forEach(el => el.textContent = cfg.subBrand || "Valesa RP");
  $$(".js-discord").forEach(el => { el.href = cfg.discordUrl || "#"; });

  // Dropdown
  const dd = $(".dropdown");
  if(dd){
    const toggle = $(".dropdown-toggle", dd);
    toggle?.addEventListener("click", (e)=>{
      e.preventDefault();
      dd.classList.toggle("open");
    });
    document.addEventListener("click", (e)=>{
      if(!dd.contains(e.target)) dd.classList.remove("open");
    });
  }

  // Trailer
  const trailer = $("#trailer");
  if(trailer && cfg.trailerYouTubeId){
    trailer.src = `https://www.youtube-nocookie.com/embed/${cfg.trailerYouTubeId}?rel=0&modestbranding=1`;
  }

  // KPIs (demo)
  const kpiUsers = $("#kpiUsers");
  const kpiChars = $("#kpiChars");
  const kpiClans = $("#kpiClans");
  if(kpiUsers) kpiUsers.textContent = "—";
  if(kpiChars) kpiChars.textContent = "—";
  if(kpiClans) kpiClans.textContent = "—";
})();
