const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  let count = 0;
  const recognition = new API();
  recognition.continuous = true;
  recognition.lang = "ko-kr";
  const button = document.querySelector(".speech-recognition");
  const speechResult = document.querySelector(".result");
  const photo1 = document.querySelector("#photo1");
  const gameEndMsg = document.querySelector("#game-end-msg"); // 추가: 게임 종료 메시지 요소

  const imagePaths = ["세탁기.jpg"];

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
    if (count >= 5) { // 수정: count가 5 이상인 경우
      gameEndMsg.classList.remove("hidden"); // 추가: 게임 종료 메시지를 보이도록 함
      return;
    }

    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImagePath = imagePaths[randomIndex];
    photo1.src = randomImagePath;
    imagePaths.splice(randomIndex, 1);
  }

  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  const randomImagePath = imagePaths[randomIndex];
  photo1.src = randomImagePath;
  imagePaths.splice(randomIndex, 1);
}
