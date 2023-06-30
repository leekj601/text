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

      for (let j = 0; j < imagePaths.length; j++) {
        const imageName = imagePaths[j].split('.')[0]; // 사진 파일 이름에서 확장자 제거
        if (transcript.includes(imageName)) {
          changePhoto(j);
          break;
        }
      }
    }
  };

  function changePhoto(photoNumber) {
    const photo1 = document.querySelector('#photo1');
    const photo2 = document.querySelector('#photo2');

    let newImageIndex;
    do {
      newImageIndex = Math.floor(Math.random() * imagePaths.length);
    } while (newImageIndex === photoNumber);

    if (photoNumber === 0) {
      const image = imagePaths[newImageIndex];
      photo1.src = image;
    } else if (photoNumber === 1) {
      const image = imagePaths[newImageIndex];
      photo2.src = image;
    }
  }
}
