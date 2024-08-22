## Usage

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Küsimused & vastused
1. Kirjelda koodi struktuuri ja miks oled just sellised valikud teinud?

Kasutan komponendi põhist struktuuri, ehk kõik komponendi spetsiifilised failid on selle komponendiga samas kaustas ja ülejäänud on jagatud kaustades vastavalt funktsionaalsusele, sest leian, et see teeb orienteerumise lihtsamaks ja vähendab segadust, eriti kui projekt peaks kasvama. Komponendi jsx'i hoian võimalikult tervikuna ja "kõrvalekallete" jaoks kasutan alamkomponente.


2. Kirjelda, kuidas sinu loodud chat-kasutajaliideses on tagatud kasutajasõbralikkus?

Kasutan minimalistlikku stiili. Fondi suurus on adekvaatne ja värvide kontrastsus vastab standardile. Olulisemad elemendid on rohkem silmapaistvamad, kasutaja ja AI sõnumid on lihtsasti eristatavad, ja rakendus on responsive.


3. Miks kasutad sellist värviskeemi ja tüpograafiat?

Valisin tumeda värviskeemi, kuna see on silmadele meeldivam, ja Noto Sans fondi valisin, kuna see tundus proovitud fontidest parim - paistab silma ja on lihtne lugeda.


4. Miks kasutad just seda disaini lähenemist (puhas CSS või Tailwind või Bootstrap või Material või muu lähenemine, mida eelistad)?

Antud rakenduses kasutan Tailwindi, kuna sellega arendamine tundub kiirem olevat kui CSS'ga.


5. Kuidas testiksid automaatselt antud rakendust (võid lisada ka testi, kuid see pole kohustuslik)?

Saaksin kasutada react testing library't. Näiteks oleks võimalik kontrollida, kas peale vormi saatmist tekib uus kasutaja ja ai sõnum.



6. Millised ohud ja riskid on seotud näidisrakendusega ning mida teeksid nende maandamiseks?

Hetkel oskan välja tuua selle, et igaüks saab teha piiramatus koguses päringuid, ja lahenduseks oleks piirata kasutaja päringute arvu ja/või lisada autentimine.
