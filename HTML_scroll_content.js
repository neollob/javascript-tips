// Use the `scrollLeft` property to make an element scroll horizontally:

const box = document.getElementById('box');

// Scroll content vertically
box.scrollTop += 50;

// Scroll content horizontally
box.scrollLeft += 50;

//El mètode scrollIntoView() de la interfície Element desplaça el contingut principal de l'element de forma que l'element sobre el qual s'invoca scrollIntoView()sea visible a l'usuari.
var element = document.getElementById('box');

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: 'end' });
element.scrollIntoView({ block: 'end', behavior: 'smooth' });
