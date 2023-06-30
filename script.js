if (API) {
    let count = 0;
    const recognition = new API();
    recognition.continuous = true;
    recognition.lang = "ko-kr";
    const button = document.querySelector(".speech-recognition");
    const speechResult = document.querySelector(".result");
    const photo1 = document.querySelector("#photo1");
    const photo2 = document.querySelector("#photo2");
  
    const imagePaths = ["세탁기.jpg", "고양이.jpg", "강아지.jpg"];
  
    button.addEventListener("click", () => {
      recognition.start();
      button.textContent = "Listening...";
    });
  
    recognition.onresult = (event) => {
      for (const result of event.results) {
        const transcript = result[0].transcript;
        speechResult.textContent = transcript;
      }
    };
  }
  