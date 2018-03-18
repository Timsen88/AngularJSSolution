
Brugt teknologi. 
- AngularJS
- Babel 
- ES2015
- babel-polyfills
- Grunt
- NPM

Overvejelser
Vin er et separat component af hele aplikationen, som har del elementer som Detaljer, form og liste oversigt. Oprettelse og editering af et form som kan dele samme controller (WineFormController). 
MainController er implementeret men ikke brugt da der er ikke grund til det i den her opgave. Når applicationen rammer default url, så bliver man automatisk redirected til vin oversigt. 
Der er ikke lagt meget vægt på css, applikationen skal fungere og gøre som er beskrevet i opgaven. UI er responsivt implementeret med flex layout, men man kunne self. også bruge den gamle bootstrap. 


shared folder skal bruges til shared componenter, som for eksempel det samme header på alle sider eller den samme footer for et tabel med pagination. 

Teknologierne brugt er så tæt som muligt på dem som blev beskrevet under interviewet. 

Optimeringer: 

- Grunt skal blive ved med at "watche" selvom der er sket en exception.
- Når man retter i html filerne og css skal de automatisk opdateres på serveren.
- Når man retter i html, css eller js så skal browser automatisk lave update. 
- Angular pakkene skal også hentes ind via NPM og ikke via Nuget.
- Wine component skal flyttes over i et separat modul.

Start up

Hent løsning, kør build (vent på npm henter nødvendige moduler) og start debug mode i Visual Studio 2017 efterfølgende. 
