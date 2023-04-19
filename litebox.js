//DOM load event
window.addEventListener("DOMContentLoaded", () => {

    const litebox = document.querySelector('.litebox');

    let liteboxSize = 'transparent 100px, rgba(0, 0, 0, 0.85) 100px)';

    window.addEventListener('mousemove', e => updateLitebox(e));

    window.addEventListener('scroll', e => updateLitebox(e));

    window.addEventListener('mousedown', e => {

        liteboxSize = 'transparent 50px, rgba(0, 0, 0, 0.95) 50px)';

        updateLitebox(e);

    });

    window.addEventListener('mouseup', e => {

        liteboxSize = 'transparent 100px, rgba(0, 0, 0, 0.85) 100px)';

        updateLitebox(e);

    });

    window.addEventListener('mouseup', e => {

        liteboxSize = 'transparent 100px, rgba(0, 0, 0, 0.85) 100px)';

        updateLitebox(e);

    });    

    function updateLitebox(e) {

        litebox.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 50}%, ${liteboxSize}`;

    }
});

document.addEventListener(
    "click",
    function (event) {
      // Only fire if the target has id copy
      if (!event.target.matches("#copy")) return;
  
      if (!navigator.clipboard) {
        // Clipboard API not available
        return;
      }
      const text = event.target.value;
      try {
        navigator.clipboard.writeText(text);
        document.getElementById("copy-status").innerText = "🧞‍♂️ copied to clipboard";
        setTimeout(function () {
          document.getElementById("copy-status").innerText = "👈 click to copy";
        }, 1200);
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    },
    false
  );

/* mobile copy clipboard */
document.addEventListener(
  "touchend",
  function (event) {
    // Only fire if the target has id copy
    if (!event.target.matches("#copy")) return;

    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    const text = event.target.value;
    try {
      navigator.clipboard.writeText(text);
      document.getElementById("copy-status").innerText = "🧞‍♂️ copied";
      setTimeout(function () {
        document.getElementById("copy-status").innerText = "👈 click to copy";
      }, 1200);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  },
  false
);

