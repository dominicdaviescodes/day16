// bring in what we want from the DOM

// small cups go blue or back to white and affect liters and % numbers
const smallCups = document.querySelectorAll('.cup-small');

const liters = document.getElementById('liters');
// when we click a small cup/s the liter value (%) in large cup changes up or down
const percentage = document.getElementById('percentage');
// the water will move up or down
const remained = document.getElementById('remained');

// Fill the small cups

smallCups.forEach((cup, idx) => {
  // console.log(idx); gives us index of cups
  cup.addEventListener('click', () => highlightCups(idx));
});

// add full class to small cups when clicked
function highlightCups(idx) {
  // if you click on a full cup, it will empty, previous cups are still full
  // toggle cups. if you click a full cup it will empty and other cups will empty
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  // use idx2 as specific to this loop
  smallCups.forEach((cup, idx2) => {
    // fill cup and all ones before it
    // is this index <= the index we click on?
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
}
