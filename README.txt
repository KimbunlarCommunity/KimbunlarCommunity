# KimbunlarCommunity (RigorZ benzeri yapı)

Bu proje, RigorZ ana sayfa akışından *ilham alan* (birebir kopya olmayan) bir tasarımla hazırlanmıştır.

## Hızlı Kurulum (GitHub Pages)
1) Repo -> Code -> Add file -> Upload files
2) Bu ZIP içindeki DOSYALARI (ZIP'i değil) yükle:
   - index.html
   - siralama.html
   - market.html ... vb.
   - assets/ klasörü

## Konfig
`assets/js/config.js` içinde:
- discordUrl
- trailerYouTubeId
- apiBase (FiveM API)
- leaderboardPath

## Sıralama API
Sıralama sayfası şu endpoint'ten çeker:
`{apiBase}{leaderboardPath}` => örn. https://api.kimbunlarcommunity.com/leaderboard
