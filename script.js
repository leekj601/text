const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  const imagePaths = ['감자.jpg','고구마.jpg','고양이.jpg', '강아지.jpg', '세탁기.jpg','밤.jpg'];
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

      if (transcript.includes(photo1.src.split('/').pop().split('.')[0])) {
        changephoto1();
      }
      if (transcript.includes(photo2.src.split('/').pop().split('.')[0])) {
        changephoto2();
      }
    }
  };

  function changephoto1() {
    const photo1 = document.querySelector('#photo1');
    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    photo1.src = image;
  }
  function changephoto2() {
    const photo2 = document.querySelector('#photo2');
    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    photo2.src = image;
  }
}
