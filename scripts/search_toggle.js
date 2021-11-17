function toggleSearch() {
    document.getElementById("inputSearch").classList.toggle("open");
}

function closeSearch() {
    document.getElementById("inputSearch").classList.remove("open");
}

let btnSearch = document.getElementById('btnSearch');
btnSearch.onclick = toggleSearch;

let btnSearchClose = document.getElementById('btnSearchClose');
btnSearchClose.onclick = closeSearch;