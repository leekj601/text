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
      const transcript = results[i][0].transcript.toLowerCase();
      speechResult.textContent = transcript;

      if (transcript.includes('감자')) {
        changePhoto(photo1);
      }
      if (transcript.includes('고구마')) {
        changePhoto(photo2);
      }
    }
  };

  // 초기 로딩 시 첫 번째 사진 랜덤으로 선택
  window.addEventListener('load', () => {
    changePhoto(photo1);
  });

  function changePhoto(photoElement) {
    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    photoElement.src = image;
  }
}
