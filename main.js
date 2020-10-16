const color = function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i= 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}


setInterval(function() {
    document.body.style.background = `linear-gradient(to bottom, ${color()},${color()})`;}, 2000);

document.querySelectorAll('.btn').forEach(btn => {btn.addEventListener('click', function() {window.location.href = `http://localhost:5501/${btn.innerHTML.toLowerCase()}/index.html`;
    });
});