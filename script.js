const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  const imagePaths = ['감자.jpg', '고구마.jpg', '고양이.jpg', '강아지.jpg', '세탁기.jpg','밤.jpg'];
  const recognition = new API();

  recognition.continuous = true;
  recognition.lang = 'ko-kr';

  const button = document.querySelector('.speech-recognition');
  const speechResult = document.querySelector('.result');
  const photo1 = document.querySelector('#photo1');
  const photo2 = document.querySelector('#photo2');
  let photo1Name = extractImageName(photo1.src);
  let photo2Name = extractImageName(photo2.src);

  button.addEventListener('click', () => {
    recognition.start();
    button.textContent = 'Listening...';
  });

  recognition.onresult = (event) => {
    const results = event.results;

    for (let i = 0; i < results.length; i++) {
      const transcript = results[i][0].transcript;
      speechResult.textContent = transcript;

      if (transcript.includes(photo1Name)) {
        changephoto1();
      }
      if (transcript.includes(photo2Name)) {
        changephoto2();
      }
    }
  };

  function extractImageName(imagePath) {
    const imageName = imagePath.split('/').pop().split('.')[0];
    return imageName;
  }

  function changephoto1() {
    const newPhotoIndex = getRandomPhotoIndex(photo1Name);
    const newPhotoName = extractImageName(imagePaths[newPhotoIndex]);
    photo1.src = imagePaths[newPhotoIndex];
    photo1Name = newPhotoName;
  }

  function changephoto2() {
    const newPhotoIndex = getRandomPhotoIndex(photo2Name);
    const newPhotoName = extractImageName(imagePaths[newPhotoIndex]);
    photo2.src = imagePaths[newPhotoIndex];
    photo2Name = newPhotoName;
  }

  function getRandomPhotoIndex(excludeName) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * imagePaths.length);
    } while (extractImageName(imagePaths[randomIndex]) === excludeName);
    return randomIndex;
  }
}
