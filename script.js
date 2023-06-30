const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  const imagePaths = ['감자.jpg','고구마.jpg','고양이.jpg', '강아지.jpg', '세탁기.jpg',];
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

      if (transcript.includes(filename1)) {
        changephoto1();
      }
      if (transcript.includes(filename2)) {
        changephoto2();
      }
    }
  };

  window.addEventListener('load', () => {
    changePhoto1(photo1);
    changePhoto2(photo2);
  });

  function changephoto1() {
    const photo1 = document.querySelector('#photo1');
    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    const filename1=extractFileName(image);
    photo1.src = image;
  }
  function changephoto2() {
    const photo2 = document.querySelector('#photo2');
    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    const filename2=extractFileName(image);
    photo2.src = image;
  }
  function extractFileName(imagePath) {
    return imagePath.match(/(.+)\./)[1];
  }
}
