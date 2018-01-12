var isAnimating = false,
  currentFrame = 1,
  previousFrame = 1,
  maxFrame = 1;

document.addEventListener('keydown', function (evt) {

  var key = evt.keyCode;

  if (evt.keyCode == 38 || evt.keyCode == 40) {
    // only trigger when not animating
    if (!isAnimating) {

      // stop key from affecting animation
      isAnimating = true;

      previousFrame = currentFrame;

      evt.keyCode == 38 ? currentFrame-- : currentFrame++;

      // shorthand if else
      currentFrame > maxFrame ? currentFrame = maxFrame : null;
      currentFrame < 0 ? currentFrame = 0 : null;

      if (previousFrame != currentFrame) {

        if (previousFrame > currentFrame) {
          document.getElementsByClassName('frame')[previousFrame].style.top = "-100%";
        } else if (currentFrame < previousFrame) {
          document.getElementsByClassName('frame')[previousFrame].style.top = "100%";
        }

        document.getElementsByClassName('frame')[currentFrame].style.top = "0%";

        var tempTimeout = setTimeout(function () {
          clearTimeout(tempTimeout);
          // no need to enable animation just change pages
          window.location.href = "index.html";
        }, 250);

      } else {
        isAnimating = false;
      }

      // console.log(previousFrame, currentFrame);

    }

  }

});
