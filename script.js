const API=window.SpeechRecognition||window.webkitSpeechRecognition

if (API){
    count=0;
    const recognition=new API()
    recognition.continouse=true;
    recognition.lang="ko-GB"
    const button=document.querySelector('.speech-recognition')
    const speechResult=document.querySelector('.result')

    const imagePaths=[

    ]

    button.addEventListener('click',()=>{
        recognition.start();
        button.textContent='Listening...'
    })

    recognition.onresult=(event)=>{
        for(const result of event.results){
            speechResult.textContent=result[0].transcript

            if(transcript.includes('potato'))
            {
                changephoto()
                count++;
            }else if (transcript.includes('sweet potato'))
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
