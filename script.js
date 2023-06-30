const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  let count = 0;
  const recognition = new API();
  recognition.continuous = true;
  recognition.lang = "ko-kr";
  const button = document.querySelector(".speech-recognition");
  const speechResult = document.querySelector(".result");
  const photo1 = document.querySelector("#photo1 img"); // 수정: img 요소 선택
  const gameEndMsg = document.querySelector("#game-end-msg"); // 수정: 게임 종료 메시지 요소

  const imagePaths = ["감자.jpg", "고구마.jpg", "세탁기.jpg"]; // 수정: 감자와 고구마의 순서 변경

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
    photo1.src = randomImagePath;
    imagePaths.splice(randomIndex, 1);
  }

  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  const randomImagePath = imagePaths[randomIndex];
  photo1.src = randomImagePath;
  imagePaths.splice(randomIndex, 1);
}
