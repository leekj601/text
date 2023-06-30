const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  const imagePaths = ['감자.jpg', '고구마.jpg', '고양이.jpg', '강아지.jpg', '세탁기.jpg', '밤.jpg'];
  const recognition = new API();

  recognition.continuous = true;
  recognition.lang = 'ko-kr';

  const button = document.querySelector('.speech-recognition');
  const speechResult = document.querySelector('.result');
  const photo1 = document.querySelector('#photo1');
  const photo2 = document.querySelector('#photo2');

  button.addEventListener('click', () => {
    recognition.start();
    button.textContent = 'Listening...';
  });

  recognition.onresult = (event) => {
    const results = event.results;

    for (let i = 0; i < results.length; i++) {
      const transcript = results[i][0].transcript;
      speechResult.textContent = transcript;

      const photo1Name = extractImageName(photo1.src);
      const photo2Name = extractImageName(photo2.src);

      if (transcript.includes(photo1Name)) {
        changePhoto(photo1);
      }
      if (transcript.includes(photo2Name)) {
        changePhoto(photo2);
      }
    }
  };

  function extractImageName(imagePath) {
    const imageName = imagePath.split('/').pop().split('.')[0];
    return imageName;
  }

  function changePhoto(photo) {
    const newImageIndex = getRandomImageIndex(photo.src);
    const newImagePath = imagePaths[newImageIndex];
    photo.src = newImagePath;
  }

  function getRandomImageIndex(currentImagePath) {
    const currentIndex = imagePaths.findIndex(path => path === currentImagePath);
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * imagePaths.length);
    } while (newIndex === currentIndex);
    return newIndex;
  }
}
