const button = document.querySelector("button");
 
const SpeechRecognition =
 window.SpeechRecognition || window.webkitSpeechRecognition;
 
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("speech recognition started!");
};
 
recognition.onresult = function (event) {
    console.log(event);

    const spokenwords = event.results[0][0].transcript;

    console.log("spoken words are",spokenwords);
    computerspeech(spokenwords);
};



function computerspeech(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;

    determinewords(speech,words);

    window.speechSynthesis.speak(speech);

}


function determinewords(speech,words){
    if(words.includes("how are you")){
        speech.text = "I am fine , thank you!";
    }

    if(words.includes("open for me")){
        speech.text = "okay sir";
        window.open("https://www.facebook.com/");

    }
} 
button.addEventListener("click",()=>{
    recognition.start();
});