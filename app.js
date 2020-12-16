// bring in what we want from the DOM

// small cups go blue or back to white and affect liters and % numbers
const smallCups = document.querySelectorAll('.cup-small');

const liters = document.getElementById('liters');
// when we click a small cup/s the liter value (%) in large cup changes up or down
const percentage = document.getElementById('percentage');
// the water will move up or down
const remained = document.getElementById('remained');

updateBigCup();

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
  updateBigCup();
}

function updateBigCup() {
  // get no. of full cups
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  // will always be 8 total cups
  const totalCups = smallCups.length;

  // if no full cups, hide %
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    // fill the large cup with water (height 330px)
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    // also show %
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  // the text for amount of liters remaining needs to disappear at 100%
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    // amount remaining in liters
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
