(async function(){
  const cfg = window.SITE_CONFIG || {};
  const api = (cfg.apiBase || "").replace(/\/$/, "") + (cfg.leaderboardPath || "/leaderboard");

  const dailyEl = document.getElementById("dailyBody");
  const weeklyEl = document.getElementById("weeklyBody");
  const statusEl = document.getElementById("apiStatus");

  function rowHTML(rank, name, score){
    const safeName = String(name ?? "").replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
    const safeScore = String(score ?? "");
    return `<tr>
      <td>#${rank}</td>
      <td><b>${safeName}</b><div class="news-meta">KimbunlarCommunity • Valesa RP</div></td>
      <td style="text-align:right"><b>${safeScore}</b></td>
    </tr>`;
  }

  async function load(){
    try{
      const res = await fetch(api, { cache: "no-store" });
      if(!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();

      statusEl.textContent = "API: Aktif";
      statusEl.classList.add("status");
      statusEl.innerHTML = '<span class="dot"></span> API: Aktif';

      const daily = Array.isArray(data.daily) ? data.daily : [];
      const weekly = Array.isArray(data.weekly) ? data.weekly : [];

      dailyEl.innerHTML = daily.slice(0,10).map((x,i)=>rowHTML(i+1, x.name, x.score)).join("") || "<tr><td colspan='3'>Veri yok</td></tr>";
      weeklyEl.innerHTML = weekly.slice(0,10).map((x,i)=>rowHTML(i+1, x.name, x.score)).join("") || "<tr><td colspan='3'>Veri yok</td></tr>";
    }catch(e){
      statusEl.textContent = "API: Kapalı";
      dailyEl.innerHTML = "<tr><td colspan='3'>API kapalı — config.js içindeki apiBase'i ve sunucuyu kontrol et.</td></tr>";
      weeklyEl.innerHTML = "<tr><td colspan='3'>API kapalı — config.js içindeki apiBase'i ve sunucuyu kontrol et.</td></tr>";
    }
  }

  load();
})();
