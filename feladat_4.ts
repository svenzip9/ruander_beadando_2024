function osszesOszto(szam: number): number[] | string {
    if (szam <= 0 || !Number.isInteger(szam)) {
        return "Csak pozitív egész számokra készült a függvény!";
    }

    let osztok: number[] = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }

    return osztok;
}

function parosDarab(szamTomb: number[]): number {
    let parosok: number[] = szamTomb.filter(szam => szam % 2 === 0);
    return parosok.length;
}

function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    
    const eredmeny: string = fuggveny();
    const tisztaEredmeny: string = eredmeny.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const forditottEredmeny: string = tisztaEredmeny.split('').reverse().join('');
    
    return tisztaEredmeny === forditottEredmeny;
}
