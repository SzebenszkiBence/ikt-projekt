const wordList = [
    {
        word: "gabona",
        hint: "kenyeret készítenek belőle"
    },
    {
        word: "alma",
        hint: "minden nap egy ... az orvost távol tartja"
    },
    {
        word: "monitor",
        hint: "A számítógép perifériái közé tartozik"
    },
    {
        word: "tanterem",
        hint: "iskolai helyiség ahol a diákok tanulnak"
    },
    {
        word: "kutya",
        hint: "Háziállat, emlős, a Canidae családba tartozik"
    },
    {
        word: "konyha",
        hint: "A helyiség, ahol ételt készítenek."
    },
    {
        word: "tavasz",
        hint: "Az év egyik évszaka, a tél utáni időszak."
    },
    {
        word: "kihívás",
        hint: "Olyan feladat, amely erőfeszítést, kitartást igényel, és nem könnyű teljesíteni"
    },
    {
        word: "szorgalom",
        hint: "Kemény munka, kitartás, amit az ember arra fordít, hogy elérje céljait."
    },
    {
        word: "becsület",
        hint: "Az erkölcsi tisztesség, amit az emberek saját maguknak és másoknak megőriznek."
    }, 
    {
        word: "alázat",
        hint: "Az a tulajdonság, hogy valaki nem tekinti magát másoknál fontosabbnak, és tisztelettel viszonyul másokhoz."
    },
    {
        word: "táska",
        hint: "Olyan eszköz, amelyet az emberek arra használnak, hogy kisebb dolgokat tartsanak benne és magukkal vigyék."
    },
    {
        word: "fáklya",
        hint: "Olyan fényforrás, amelyet kézben lehet tartani, gyakran gyújtottak meg tábortüzeknél vagy ünnepeken."
    },
    {
        word: "zsák",
        hint: "Egy olyan nagy, erős anyagból készült tartó, amelybe különféle dolgokat lehet tenni."
    },
    {
        word: "híd",
        hint: "Olyan építmény, amely lehetővé teszi, hogy átjussunk egy vízfolyás, szakadék vagy más akadály fölött."
    },
    {
        word: "kávé",
        hint: "Népszerű ital, melyet pörkölt kávébabból készítenek."
    },
    {
        word: "hegy",
        hint: "A földfelszín kiemelkedő része, amely magasabb, mint a környező terület."
    },
    {
        word: "sziget",
        hint: "Olyan földterület, amely teljesen víz veszi körül."
    },
    {
        word: "rózsa",
        hint: "Szép, illatos virág, amely sok színben létezik."
    },
    {
        word: "tükör",
        hint: "Olyan eszköz, amely visszaveri a fényt, és képet ad a rá néző személyről."
    },
    {
        word: "szél",
        hint: "A levegő mozgása, amelyet általában hőmérséklet- és nyomáskülönbségek okoznak."
    },
    {
        word: "vízesés",
        hint: "A víz olyan esése, amely a hegyekből a völgybe zuhan."
    },
    {
        word: "szivárvány",
        hint: "A fény szóródása miatt keletkező színes ív az égen, eső után gyakran látható."
    },
    {
        word: "fa",
        hint: "Élőlény, amelynek fás szára van és levelei."
    },
    {
        word: "repülő",
        hint: "Olyan jármű, amely a levegőben közlekedik."
    },
    {
        word: "kert",
        hint: "Olyan hely, ahol növényeket, virágokat és fák is nőhetnek."
    },
    {
        word: "tenger",
        hint: "Óceán vagy nagy víztömeg, amely a földek körül található."
    },
    {
        word: "hó",
        hint: "Fagyott vízcseppek, amelyek a levegőben alakulnak ki és földre esnek."
    },
    {
        word: "eső",
        hint: "A csapadék, amely vízcseppekként esik le az égből."
    },
    {
        word: "kertész",
        hint: "Olyan személy, aki növényeket ültet, gondoz és termeszt."
    },
    {
        word: "autó",
        hint: "Olyan jármű, amelyet motor hajt és a földön közlekedik."
    },
    {
        word: "óra",
        hint: "Eszköz, amely az idő mérésére szolgál."
    },
    {
        word: "számítógép",
        hint: "Elektronikus eszköz, amely adatokat dolgoz fel."
    },
    {
        word: "telefon",
        hint: "Olyan eszköz, amely hangüzenetek továbbítására szolgál."
    },
    {
        word: "túra",
        hint: "Különböző helyeken tett hosszabb gyalogos kirándulás."
    },
    {
        word: "város",
        hint: "Népességgel rendelkező, épületekkel és infrastruktúrával ellátott település."
    },
    {
        word: "színház",
        hint: "Olyan épület, ahol előadásokat tartanak."
    },
    {
        word: "film",
        hint: "Mozgóképekből álló műalkotás."
    },
    {
        word: "múzeum",
        hint: "Olyan intézmény, ahol művészeti, tudományos vagy történelmi tárgyakat őriznek."
    },
    {
        word: "hóember",
        hint: "A hóból formázott figura, általában répa orral és karácsonyi kiegészítőkkel."
    },
    {
        word: "asztal",
        hint: "Bútor, amelyen különféle dolgokat elhelyezhetünk."
    },
    {
        word: "szék",
        hint: "Bútor, amelyet ülésre használunk."
    },
    {
        word: "képernyő",
        hint: "Olyan eszköz, amelyen digitális információ jelenik meg."
    },
    {
        word: "napernyő",
        hint: "Kültéri árnyékoló eszköz, amely a napfénytől véd."
    },
    {
        word: "piros",
        hint: "Szín, amely a tűz és a vér színe."
    },
    {
        word: "kék",
        hint: "Szín, amely a tenger és az ég színe."
    },
    {
        word: "zöld",
        hint: "Szín, amely a fák és a növények színe."
    },
    {
        word: "sárga",
        hint: "Szín, amely a nap és a citrom színe."
    },
    {
        word: "lila",
        hint: "Szín, amely a levendula és a szilva színe."
    },
    {
        word: "narancs",
        hint: "Gyümölcs és szín, amely a narancsfa termése."
    },
    {
        word: "szürke",
        hint: "Semleges szín, amely a felhők és az eső színe."
    },
    {
        word: "fehér",
        hint: "Szín, amely a hó és a tej színe."
    },
    {
        word: "fekete",
        hint: "A legsötétebb szín, amely minden fényt elnyel."
    }
];
