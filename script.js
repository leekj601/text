const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  const imagePaths = ['감자.jpg', '고구마.jpg', '고양이.jpg', '강아지.jpg', '세탁기.jpg', '밤.jpg'];
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

      const currentPhoto1Name = getFileName(photo1.src);
      const currentPhoto2Name = getFileName(photo2.src);

      if (transcript.includes(currentPhoto1Name)) {
        changePhoto(photo1);
      }
      if (transcript.includes(currentPhoto2Name)) {
        changePhoto(photo2);
      }
    }
  };

  function getFileName(path) {
    return path.split('/').pop().split('.')[0];
  }

  function changePhoto(photo) {
    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    photo.src = image;
  }
}
