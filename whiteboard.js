(function() {
    var canvas = document.getElementById('canvas');
    var canvasParent = canvas.parentNode;
    var ctx = canvas.getContext('2d');

    var clear = function() {
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // When the page is first loaded, and every time the window is resized,
    // we should resize the <canvas> element appropriately.
    var sizeCanvasToParent = function() {
        canvas.width = canvasParent.clientWidth;
        canvas.height = canvasParent.clientHeight;

        // And also clear the screen.
        clear();
    };
    window.addEventListener('resize', sizeCanvasToParent);
    sizeCanvasToParent();

    var mouse1Pressed = false;
    canvas.addEventListener('mousemove', function(e) {
        if (mouse1Pressed) {
            ctx.fillStyle = 'rgb(255, 0, 0)';
            ctx.fillRect(e.x, e.y, 10, 10)
        }
    });

    canvas.addEventListener('mousedown', function(e) {
        if (e.button == 0) {
            mouse1Pressed = true;
        }
    });

    canvas.addEventListener('mouseup', function(e) {
        if (e.button == 0) {
            mouse1Pressed = false;
        }
    });
})();
