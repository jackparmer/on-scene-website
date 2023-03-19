//DOM load event
window.addEventListener("DOMContentLoaded", () => {

    const litebox = document.querySelector('.litebox');

    let liteboxSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

    window.addEventListener('mousemove', e => updateLitebox(e));

    window.addEventListener('mousedown', e => {

        liteboxSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

        updateLitebox(e);

    });

    window.addEventListener('mouseup', e => {

        liteboxSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

        updateLitebox(e);

    });

    function updateLitebox(e) {

        litebox.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${liteboxSize}`;

    }
});