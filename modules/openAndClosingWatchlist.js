//öppnar och stänger watchlist

export function openWatchlist() {
    document.getElementById("watchListASide").classList.add("open");
}

export function closeWatchlist() {
    document.getElementById("watchListASide").classList.remove("open");
}
