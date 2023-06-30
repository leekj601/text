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
          const randomIndex = Math.floor(Math.random() * (imagePaths.length - 1)) + 1;
          const randomImagePath = imagePaths[randomIndex];
          imagePaths[randomIndex] = "감자.jpg";
          photo1.src = randomImagePath;
          count++;
        }
      }
    };
  }
  