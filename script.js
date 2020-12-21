/* Är inte min javascript så kan inte förklara det helt, men jag kan försöka*/

/* sparar elementet från knappens ID (myBtn) i "mybutton"*/
mybutton = document.getElementById("myBtn");

/* Denna funktionen körs när man klickar på knappen, den ser till så man skrollas upp till toppen av sidan. */
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}