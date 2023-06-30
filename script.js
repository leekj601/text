recognition.onresult = (event) => {
    const results = event.results;
  
    for (let i = 0; i < results.length; i++) {
      const transcript = results[i][0].transcript;
      speechResult.textContent = transcript;
  
      if (imagePaths.some(photo => transcript.includes(photo.split('.')[0]))) {
        const photoIndex = imagePaths.findIndex(photo => transcript.includes(photo.split('.')[0]));
        if (photoIndex !== -1) {
          changephoto(photoIndex);
        }
      }
    }
  };
  
  function changephoto(photoIndex) {
    const photo1 = document.querySelector('#photo1');
    const photo2 = document.querySelector('#photo2');
  
    let newImageIndex;
    do {
      newImageIndex = Math.floor(Math.random() * imagePaths.length);
    } while (newImageIndex === photoIndex);
  
    if (photoIndex === 0) {
      const image = imagePaths[newImageIndex];
      photo1.src = image;
    } else if (photoIndex === 1) {
      const image = imagePaths[newImageIndex];
      photo2.src = image;
    }
  }
  