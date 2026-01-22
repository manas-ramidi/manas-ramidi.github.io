
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-89797207-1', 'auto');
ga('send', 'pageview');

var clicky_site_ids = clicky_site_ids || [];
clicky_site_ids.push(101436781);
(function () {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//static.getclicky.com/js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
})();


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const slideshow = document.getElementById('slideshow');

function scrollSlides(direction) {
  const slideWidth = slideshow.clientWidth;
  slideshow.scrollBy({ left: slideWidth * direction, behavior: 'smooth' });
}


// Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  // Semi-transparent black to create trail effect
  // Check if we are in "Matrix Mode" (Dark Mode). 
  // We can check the body background color or a specific class/variable.
  // For now, assuming dark mode is the main theme.

  // In our new CSS, checked = "Dark Mode" (Matrix).
  const isMatrixMode = document.getElementById('darkmode-toggle').checked;

  if (!isMatrixMode) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0'; // Neon Green
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 30);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Re-initialize drops
  rainDrops.length = 0;
  const newColumns = canvas.width / fontSize;
  for (let x = 0; x < newColumns; x++) {
    rainDrops[x] = 1;
  }
});