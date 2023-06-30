const API=window.SpeechRecognition||window.webkitSpeechRecognition

if (API){
    count=0;
    const recognition=new API()
    recognition.continouse=true;
    recognition.lang="ko-kr"
    const button=document.querySelector('.speech-recognition')
    const speechResult=document.querySelector('.result')

    const imagePaths=[
        '세탁기.jpg',
    ]

    button.addEventListener('click',()=>{
        recognition.start();
        button.textContent='Listening...'
    })

    recognition.onresult=(event)=>{
        for(const result of event.results){
            speechResult.textContent=result[0].transcript

            if(transcript.includes('감자'))
            {
                changephoto()
                count++;
            }else if (transcript.includes('고구마'))
            {
                changephoto()
                count++;
            }
        }
    }
    function changephoto()
    {
        if (count==5) {
            console.log("게임 끝.");
        }
    }
}
