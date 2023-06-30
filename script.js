const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  const imagePaths = ['고양이.jpg', '강아지.jpg', '세탁기.jpg',];
  const recognition = new API();

  recognition.continuous = true;
  recognition.lang = 'ko-kr';
  let filename1 = '감자';
  let filename2 = '고구마';

  const button = document.querySelector('.speech-recognition');
  const speechResult = document.querySelector('.result');
  const photo1 = document.querySelector('#photo1');
  const photo2 = document.querySelector('#photo2');
  const message1 = document.querySelector('#message1');
  const message2 = document.querySelector('#message2');
  const usedImages = [];

  button.addEventListener('click', () => {
    recognition.start();
    button.textContent = 'Listening...';
  });

  recognition.onresult = (event) => {
    const results = event.results;

    for (let i = 0; i < results.length; i++) {
      const transcript = results[i][0].transcript;
      speechResult.textContent = transcript;

      if (transcript.includes(filename1)&& !transcript.includes(filename2)) {
        changephoto1();
      }
      if (transcript.includes(filename2)&& !transcript.includes(filename1)) {
        changephoto2();
      }
    }
  };

  function changephoto1() {
    const availableImages = imagePaths.filter((path) => !usedImages.includes(path));
    if (availableImages.length > 0) {
        const image = availableImages[Math.floor(Math.random() * availableImages.length)];
        filename1 = extractFileName(image);
        photo1.src = image;
        usedImages.push(image);
        message1.textContent = '';
      }
      else {
        message1.textContent = '이미지가 끝났습니다.';
      }
  }
  function changephoto2() {
    const availableImages = imagePaths.filter((path) => !usedImages.includes(path));
    if (availableImages.length > 0) {
        const image = availableImages[Math.floor(Math.random() * availableImages.length)];
        filename2 = extractFileName(image);
        photo2.src = image;
        usedImages.push(image);
        message2.textContent = '';
      }
      else {
        message2.textContent = '이미지가 다 나왔습니다.';
      }
  }
  function extractFileName(imagePath) {
    return imagePath.match(/(.+)\./)[1];
  }
}
