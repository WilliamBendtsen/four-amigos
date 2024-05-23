# Markdown dokumentation

## Four Amigos
#### I denne Markdown dokumentation kan der læses om et et kodeeksempel, hvor der kort beskrives 
#### hvordan brugeren kan fjerne en ordre fra sin bestilling. Det er også muligt at se vores
#### infographic uden for kontext således den analyseres yderligere.




### Hvordan man fjerner en ordre fra hjemmesiden
```html

    <img src="/four-amigos/img/removeknap.webp" alt="fjern knap" class="remove-button">
            
    <p class="fjern">Fjern</p>

    <button class="fjernet">Ordre fjernet</button>

```
#### HTML-koden, der ses ovenfor, er med til at give brugeren muligheden for at fjerne sin ordre. Vi opstiller nogle elementer, som har specifikke "class"', der spiller sammen med Javascript. 


### Sammenhængede Javascript til forrige HTML:
```javascript

    removeButton2.addEventListener('click', function() {
        elementsToAdd.classList.add('popup');
        elementsToRemove.forEach(function(element) {
            element.remove();

        });
    });

```
#### Denne Javascript-kode fungerer således, at når der klikkes på "removeButton2", vil alle "elementsToRemove" blive fjernet.
#### Dette sker vha. funktionerne forEach () (som tager fat i hvert element med en specifik kategorisering) og remove () (som kan fjerne et element fra dokumentet).



![Infographic, der befinder sig under FAQ på hjemmesiden](/four-amigos/img/Infographic.webp "Infographic")
#### Vi har fremstillet denne infographic for at give brugeren en ide om, hvordan Four
#### Amigos laver deres mad.

> Link til hjemmeside: \-https://four-amigos.williamskodeeventyr.dk/index.html
> Link til GitHub: \-https://github.com/WilliamBendtsen/four-amigos

