const API = window.SpeechRecognition || window.webkitSpeechRecognition

if (API) {
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
    const image = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    photo1.src = `src/${image}`;
  }
}