const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  let count = 0;
  const recognition = new API();
  recognition.continuous = true;
  recognition.lang = "ko-kr";
  const button = document.querySelector(".speech-recognition");
  const speechResult = document.querySelector(".result");
  const photo1 = document.querySelector("#photo1");
  const photo2 = document.querySelector("#photo2");
  const gameEndMsg = document.querySelector("#game-end-msg");

  const imagePaths = ["감자.jpg", "고구마.jpg", "세탁기.jpg", "고양이.jpg", "강아지.jpg"];

  button.addEventListener("click", () => {
    recognition.start();
    button.textContent = "Listening...";
  });

  recognition.onresult = (event) => {
    for (const result of event.results) {
      const transcript = result[0].transcript;
      speechResult.textContent = transcript;

      if (transcript.includes("감자")) {
        changephoto(photo1);
        count++;
      } else if (transcript.includes("고구마")) {
        changephoto(photo2);
        count++;
      }
    }
  };

  function changephoto(photo) {
    if (count >= 5) {
      gameEndMsg.classList.remove("hidden");
      return;
    }

    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImagePath = imagePaths[randomIndex];
    photo.src = randomImagePath;
    imagePaths.splice(randomIndex, 1);
  }

  changephoto(photo1);
}
