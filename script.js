const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  let count = 0;
  const recognition = new API();
  recognition.continuous = true;
  recognition.lang = "ko-kr";
  const button = document.querySelector(".speech-recognition");
  const speechResult = document.querySelector(".result");
  const photo1 = document.querySelector("#photo1");

  const imagePaths = ["감자.jpg", "세탁기.jpg"];

  button.addEventListener("click", () => {
    recognition.start();
    button.textContent = "Listening...";
  });

  recognition.onresult = (event) => {
    for (const result of event.results) {
      const transcript = result[0].transcript;
      speechResult.textContent = transcript;

      if (transcript.includes("감자")) {
        changephoto();
        count++;
      } else if (transcript.includes("고구마")) {
        changephoto();
        count++;
      }
    }
  };

  function changephoto() {
    if (count >= 5) {
      gameEndMsg.classList.remove("hidden");
      return;
    }

    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImagePath = imagePaths[randomIndex];
    imagePaths.splice(randomIndex, 1);

    const potatoIndex = imagePaths.indexOf("감자.jpg");
    if (potatoIndex !== -1) {
      const temp = imagePaths[potatoIndex];
      imagePaths[potatoIndex] = randomImagePath;
      imagePaths.push(temp);
    }

    const updatedRandomIndex = Math.floor(Math.random() * imagePaths.length);
    const updatedRandomImagePath = imagePaths[updatedRandomIndex];
    photo1.src = updatedRandomImagePath;
  }

  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  const randomImagePath = imagePaths[randomIndex];
  photo1.src = randomImagePath;
  imagePaths.splice(randomIndex, 1);
}
