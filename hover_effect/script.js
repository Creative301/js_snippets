// mouseenter dan mouseleave akan target semua child (li) yg ada di dalam ul
// mouseover dan mouseout akan target hanya child (li) yg di hover di dalam ul

let test = document.getElementById('test');

/* test.addEventListener("mouseenter", (event) => {
  event.target.style.color = 'green';

  setTimeout( () => {
    event.target.style.color = "";
  }, 500);
}, false); */

/* test.addEventListener('mouseover', (event) => {
  event.target.style.color = 'orange';

  setTimeout(() => {
    event.target.style.color = '';
  }, 500);
}, false); */

test.addEventListener('mouseover', (event) => {
  event.target.style.color = 'orange';
}, false);

test.addEventListener('mouseout', (event) => {
  event.target.style.color = '';
});

