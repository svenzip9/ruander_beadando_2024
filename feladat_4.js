function osszesOszto(szam) {
    if (szam <= 0 || !Number.isInteger(szam)) {
        return "Csak pozitív egész számokra készült a függvény!";
    }
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamTomb) {
    var parosok = szamTomb.filter(function (szam) { return szam % 2 === 0; });
    return parosok.length;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var eredmeny = fuggveny();
    var tisztaEredmeny = eredmeny.replace(/[^a-zA-Z]/g, '').toLowerCase();
    var forditottEredmeny = tisztaEredmeny.split('').reverse().join('');
    return tisztaEredmeny === forditottEredmeny;
}
