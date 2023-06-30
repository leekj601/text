const API = window.SpeechRecognition || window.webkitSpeechRecognition;

if (API) {
  let count = 0;
  const recognition = new API();
  recognition.continuous = true;
  recognition.lang = "ko-kr";
  const button = document.querySelector(".speech-recognition");
  const speechResult = document.querySelector(".result");
  const photo1 = document.querySelector("#photo1");

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
    if (count == 5) {
      gameEndMsg.classList.remove("hidden");
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImagePath = imagePaths[randomIndex];
    imagePaths.splice(randomIndex, 1);
  
    let updatedImagePath = "";
    
    // 말한 이미지에 해당하는 이미지 경로로 교체합니다.
    if (randomImagePath === "감자.jpg") {
      updatedImagePath = "세탁기.jpg";
    } else if (randomImagePath === "고구마.jpg") {
      updatedImagePath = "감자.jpg";
    }
  
    imagePaths.push(updatedImagePath);
  
    const updatedRandomIndex = Math.floor(Math.random() * imagePaths.length);
    const updatedRandomImagePath = imagePaths[updatedRandomIndex];
    photo1.src = updatedRandomImagePath;
  }
  
}
