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

  recognition.onstart = () => {
    recognizeImage(photo1);
    recognizeImage(photo2);
  };

  recognition.onresult = (event) => {
    const results = event.results;

    for (let i = 0; i < results.length; i++) {
      const transcript = results[i][0].transcript;
      speechResult.textContent = transcript;

      if (transcript.includes(photo1.src.split('/').pop().split('.')[0])) {
        changePhoto(photo1);
        break;
      }
      if (transcript.includes(photo2.src.split('/').pop().split('.')[0])) {
        changePhoto(photo2);
        break;
      }
    }
  };

  function recognizeImage(photo) {
    const imageIndex = getRandomImageIndex();
    const imagePath = imagePaths[imageIndex];
    photo.src = imagePath;
  }

  function changePhoto(photo) {
    const currentImageName = photo.src.split('/').pop().split('.')[0];
    const newImageIndex = getRandomImageIndexExcept(currentImageName);
    const newImagePath = imagePaths[newImageIndex];
    photo.src = newImagePath;
  }

  function getRandomImageIndex() {
    return Math.floor(Math.random() * imagePaths.length);
  }

  function getRandomImageIndexExcept(excludedImageName) {
    const availableImages = imagePaths.filter((imagePath) => {
      const imageName = imagePath.split('/').pop().split('.')[0];
      return imageName !== excludedImageName;
    });
    return Math.floor(Math.random() * availableImages.length);
  }
}
