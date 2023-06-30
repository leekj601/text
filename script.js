const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  const imagePaths = ['감자.jpg', '고구마.jpg', '고양이.jpg', '강아지.jpg', '세탁기.jpg'];
  const recognition = new API();

  recognition.continuous = true;
  recognition.lang = 'ko-kr';

  const button = document.querySelector('.speech-recognition');
  const speechResult = document.querySelector('.result');

  button.addEventListener('click', () => {
    recognition.start();
    button.textContent = 'Listening...';
  });

  recognition.onresult = (event) => {
    const results = event.results;

    for (let i = 0; i < results.length; i++) {
      const transcript = results[i][0].transcript;
      speechResult.textContent = transcript;

      for (let j = 0; j < imagePaths.length; j++) {
        const imageName = imagePaths[j].split('.')[0];
        if (transcript.includes(imageName)) {
          changephoto(j);
          break;
        }
      }
    }
  };

  function changephoto(photoNumber) {
    const photo1 = document.querySelector('#photo1');
    const photo2 = document.querySelector('#photo2');
    
    if (photoNumber === 0) {
      let randomIndex = Math.floor(Math.random() * imagePaths.length);
      while (randomIndex === 0) {
        randomIndex = Math.floor(Math.random() * imagePaths.length);
      }
      const image = imagePaths[randomIndex];
      photo1.src = image;
    } else if (photoNumber === 1) {
      let randomIndex = Math.floor(Math.random() * imagePaths.length);
      while (randomIndex === 1) {
        randomIndex = Math.floor(Math.random() * imagePaths.length);
      }
      const image = imagePaths[randomIndex];
      photo2.src = image;
    }
  }
}
