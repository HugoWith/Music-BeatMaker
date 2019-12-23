window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector(".visual");
  const colors = [
    "#36b5b0",
    "#9dd8c8",
    "#f09595",
    "#fcf5b0",
    "#f0cf85",
    "#ff896b"
  ];

  console.log(sounds)

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });

  });

  const createBubble = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});


