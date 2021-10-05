import './styles.css';
import Dot from './Dot';

const dotsContainer = document.getElementById('dots-container');
const dot1 = new Dot(dotsContainer, 'red', 100);
// STEP 1: create new point that is blue and has a size of 50
const dot2 = new Dot(dotsContainer, 'blue', 50);
// STEP2: move the second dot to the coordinates x: 300, y: 50
dot2.move(300,50);
// STEP4: Set the radius of the first red sqaure to 20.
// Change the radius of the second square so that it becomes a dot.
dot1.setRadius(20);
dot2.setRadius(60);
// STEP 5: Create a new green dot that has a size of 75 and move it to the coordinates x: 350, y: 250
const dot3 = new Dot(dotsContainer, 'green', 75);
dot3.move(350, 250);
// Bonus 1: Select the button element, add a click event handler so that a new element is created everytime the button is clicked
const btn = document.getElementById('button');
btn.addEventListener('click', () => {
    const dot = new Dot(dotsContainer, "orange", 75);
    dot.setRadius(50);
    const posX = Math.floor(Math.random()*400);
    const posY = Math.floor(Math.random()*300);
    dot.move(posX, posY);
})
// Bonus 2 : Manage a random position for each new created element.

