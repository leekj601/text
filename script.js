const API = window.SpeechRecognition || window.webkitSpeechRecognition

if (API) {
    const imagePaths = ['고양이.jpg', '강아지.jpg', '세탁기.jpg'];
   const recognition = new API()

   recognition.continouse = true;
   recognition.lang = 'ko-kr'

   const button = document.querySelector('.speech-recognition')
   const speechResult = document.querySelector('.result')

   button.addEventListener('click', () => {
    recognition.start();
    button.textContent = 'Listening...'
   })


   recognition.onresult = (event) => {
    for(const result of event.results) {
        speechResult.textContent = result[0].transcript
    }
    if (transcript.includes("감자")) {
        changephoto1();
      }
   }
   function changephoto1() {
    const photo1 = document.querySelector('#photo1');
    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    photo1.src = "image.jpg";
  }
}