document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-game');
  const homeScreen = document.getElementById('home-screen');
  const levelSelection = document.getElementById('level-selection');

  // Show Level Selection Screen
  startButton.addEventListener('click', () => {
    homeScreen.style.display = 'none'; // Hide Home Screen
    levelSelection.style.display = 'block'; // Show Level Selection
  });








  // Animal Sound Screen Elements
  const animalSoundScreen = document.getElementById('animal-sound');
  const playSoundButton = document.getElementById('btn-sound-play');
  const answerButton = document.getElementById('btn-answer');
  const animalTag = document.getElementById('animal-tag');
  const animalAnswerScreen = document.getElementById('animal-answer');

  // Animal Data (Placeholder for dynamic content)
  const animals = {
    easy: [
      { tag: 'tag-1.png', sound: '1-1-dog.wav', image: '1-1-dog.png', text: '1-1-dog-txt.png' },
      { tag: 'tag-2.png', sound: '1-2-cat.wav', image: '1-2-cat.png', text: '1-2-cat-txt.png' },
      { tag: 'tag-3.png', sound: '1-3-chicken.wav', image: '1-3-chicken.png', text: '1-3-chicken-txt.png' },
      { tag: 'tag-4.png', sound: '1-4-pig.wav', image: '1-4-pig.png', text: '1-4-pig-txt.png' },
      { tag: 'tag-5.png', sound: '1-5-horse.wav', image: '1-5-horse.png', text: '1-5-horse-txt.png' },
      { tag: 'tag-6.png', sound: '1-6-sheep.wav', image: '1-6-sheep.png', text: '1-6-sheep-txt.png' },
      { tag: 'tag-7.png', sound: '1-7-rooster.wav', image: '1-7-rooster.png', text: '1-7-rooster-txt.png' },
      { tag: 'tag-8.png', sound: '1-8-rabbit.wav', image: '1-8-rabbit.png', text: '1-8-rabbit-txt.png' },
      { tag: 'tag-9.png', sound: '1-9-owl.wav', image: '1-9-owl.png', text: '1-9-owl-txt.png' },
      { tag: 'tag-10.png', sound: '1-10-turkey.wav', image: '1-10-turkey.png', text: '1-10-turkey-txt.png' },
      { tag: 'tag-11.png', sound: '1-11-crow.wav', image: '1-11-crow.png', text: '1-11-crow-txt.png' },
    ],
    normal: [
      { tag: 'tag-1.png', sound: '2-1-goat.wav', image: '2-1-goat.png', text: '2-1-goat-txt.png' },
      { tag: 'tag-2.png', sound: '2-2-cow.wav', image: '2-2-cow.png', text: '2-2-cow-txt.png' },
      { tag: 'tag-3.png', sound: '2-3-elephant.wav', image: '2-3-elephant.png', text: '2-3-elephant-txt.png' },
      { tag: 'tag-4.png', sound: '2-4-wolf.wav', image: '2-4-wolf.png', text: '2-4-wolf-txt.png' },
      { tag: 'tag-5.png', sound: '2-5-duck.wav', image: '2-5-duck.png', text: '2-5-duck-txt.png' },
      { tag: 'tag-6.png', sound: '2-6-peacock.wav', image: '2-6-peacock.png', text: '2-6-peacock-txt.png' },
      { tag: 'tag-7.png', sound: '2-7-seal.wav', image: '2-7-seal.png', text: '2-7-seal-txt.png' },
      { tag: 'tag-8.png', sound: '2-8-camel.wav', image: '2-8-camel.png', text: '2-8-camel-txt.png' },
      { tag: 'tag-9.png', sound: '2-9-parrot.wav', image: '2-9-parrot.png', text: '2-9-parrot-txt.png' },
      { tag: 'tag-10.png', sound: '2-10-hyena.wav', image: '2-10-hyena.png', text: '2-10-hyena-txt.png' },
      { tag: 'tag-11.png', sound: '2-11-bat.wav', image: '2-11-bat.png', text: '2-11-bat-txt.png' },
      { tag: 'tag-12.png', sound: '2-12-koala.wav', image: '2-12-koala.png', text: '2-12-koala-txt.png' },
    ],
    hard: [
      { tag: 'tag-1.png', sound: '3-1-donkey.wav', image: '3-1-donkey.png', text: '3-1-donkey-txt.png' },
      { tag: 'tag-2.png', sound: '3-2-frog.wav', image: '3-2-frog.png', text: '3-2-frog-txt.png' },
      { tag: 'tag-3.png', sound: '3-3-dolphin.wav', image: '3-3-dolphin.png', text: '3-3-dolphin-txt.png' },
      { tag: 'tag-4.png', sound: '3-4-cricket.wav', image: '3-4-cricket.png', text: '3-4-cricket-txt.png' },
      { tag: 'tag-5.png', sound: '3-5-rattlesnake.wav', image: '3-5-rattlesnake.png', text: '3-5-rattlesnake-txt.png' },
      { tag: 'tag-6.png', sound: '3-6-flamingo.wav', image: '3-6-flamingo.png', text: '3-6-flamingo-txt.png' },
      { tag: 'tag-7.png', sound: '3-7-macaw.wav', image: '3-7-macaw.png', text: '3-7-macaw-txt.png' },
      { tag: 'tag-8.png', sound: '3-8-wombat.wav', image: '3-8-wombat.png', text: '3-8-wombat-txt.png' },
      { tag: 'tag-9.png', sound: '3-9-llama.wav', image: '3-9-llama.png', text: '3-9-llama-txt.png' },
      { tag: 'tag-10.png', sound: '3-10-whale.wav', image: '3-10-whale.png', text: '3-10-whale-txt.png' },
      { tag: 'tag-11.png', sound: '3-11-zebra.wav', image: '3-11-zebra.png', text: '3-11-zebra-txt.png' },
    ],
  };

  let currentSound = null;

  // Function to load the selected animal sound
  function loadAnimalSound(level, index) {
    const animal = animals[level][index];
    animalTag.src = `assets/images/${animal.tag}`;
    currentSound = new Audio(`assets/sounds/${animal.sound}`);
    
    // Play sound on button click
    playSoundButton.onclick = () => {
      currentSound.play();
    };
  }

  // Current Animal Index and Level
  let currentAnimalIndex = 0;
  let currentLevel = '';

  // Transition from Level Selection to Animal Sound Screen (Handle Level Button Clicks)
    const levelButtons = document.querySelectorAll('.level-button');
    levelButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      currentLevel = event.target.alt.toLowerCase();
      levelSelection.style.display = 'none';
      animalSoundScreen.style.display = 'block';
      loadAnimalSound(currentLevel, 0); // Load the first animal in the selected level
    });
  });

  // Transition to Animal Answer Screen
  answerButton.addEventListener('click', () => {
    // Stop the sound before transitioning
    if (currentSound) {
      currentSound.pause();
    }
    animalSoundScreen.style.display = 'none';
    animalAnswerScreen.style.display = 'block';
    loadAnimalAnswer(currentLevel, currentAnimalIndex);
  });






  // Animal Answer Screen Elements
  const animalImage = document.getElementById('animal-image');
  const animalName = document.getElementById('animal-name');
  const backButton = document.getElementById('btn-back');
  const homeButton = document.getElementById('btn-home');
  const nextButton = document.getElementById('btn-next');


  // Function to Load Animal Answer
  function loadAnimalAnswer(level, index) {
    const animal = animals[level][index];
    animalImage.src = `assets/images/${animal.image}`; // Load animal image
    animalName.src = `assets/images/${animal.text}`;  // Load animal text
  }

  // Back Button Logic
  backButton.addEventListener('click', () => {
    animalAnswerScreen.style.display = 'none';
    animalSoundScreen.style.display = 'block';
  });

  // Home Button Logic
  homeButton.addEventListener('click', () => {
    animalAnswerScreen.style.display = 'none';
    levelSelection.style.display = 'block';
    currentAnimalIndex = 0;
    currentLevel = '';
  });

  // Next Button Logic
  nextButton.addEventListener('click', () => {
    currentAnimalIndex++;
    if (currentAnimalIndex < animals[currentLevel].length) {
      loadAnimalSound(currentLevel, currentAnimalIndex);
      animalAnswerScreen.style.display = 'none';
      animalSoundScreen.style.display = 'block';
    } else {
      // alert('End of Level! Returning to Level Selection.');
      animalAnswerScreen.style.display = 'none';
      levelSelection.style.display = 'block';
      currentAnimalIndex = 0;
      currentLevel = '';
    }
  });






// Sound Effects
const buttonClickSound = new Audio('assets/sounds/sound-btn-click.wav');
const answerButtonClickSound = new Audio('assets/sounds/sound-answer-btn-click.wav');

// Function to Play Button Sound
function playButtonClickSound(isAnswerButton = false) {
  if (isAnswerButton) {
    answerButtonClickSound.play();
  } else {
    buttonClickSound.play();
  }
}

// Add Click Sound to All Buttons
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (event) => {
    // Ensure the target is the button itself
    const clickedButton = event.target.closest('button');

    // Check if the button is the Answer Button
    if (clickedButton && clickedButton.id === 'btn-answer') {
      playButtonClickSound(true); // Play answer button sound
    } else {
      playButtonClickSound(false); // Play general button sound
    }
  });
});



});
