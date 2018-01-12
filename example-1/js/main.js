var isAnimating = false,
  currentFrame = 0,
  previousFrame = 0,
  maxFrame = 3;

$(document).on('keydown', function (evt) {

  evt.stopPropagation();

  // 38 up, 40 down
  // only trigger if up or down key is pressed
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

      // debug
      console.log(previousFrame, currentFrame);

      if (previousFrame != currentFrame) {

        if (previousFrame > currentFrame) {
          TweenMax.to($('.frame').eq(previousFrame), 0.25, { top: '-100%' });
        } else if (currentFrame < previousFrame) {
          TweenMax.to($('.frame').eq(previousFrame), 0.25, { top: '100%' });
        }

        TweenMax.to($('.frame').eq(currentFrame), 0.25, {
          top: '0%',
          onComplete: function () {
            isAnimating = false;
          }
        });

      } else {
        isAnimating = false;
      }

    }
  }

})