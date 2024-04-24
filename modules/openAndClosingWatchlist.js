//öppnar och stänger watchlist

export function openWatchList() {
    document.getElementById("watchListASide").classList.add("open");
}

export function closeWatchList() {
    document.getElementById("watchListASide").classList.remove("open");
}
