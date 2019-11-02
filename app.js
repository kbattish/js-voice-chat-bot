const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = ['Im good you little piece of shit', 'Leave me the fuck alone','Stop bothering me asshole']
const weather = ['Why does it matter to you, you fat fuck', 'Someone fucking kill me', 'This is what you do, when you could be doing serious work and get your life together but know you are lost and have no fucking clue what to do with your life. I hate you']
const alternate = 'you are a real stupid piece of shit but you know that you are a piece of shit. That makes you better than all the pieces of shit who dont know they are pieces of shit';

recognition.onstart = function(){
    console.log('Mic activated.');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click',() => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    if (message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    else if (message.includes('weather')){
        const finalText = weather[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    else { speech.text = alternate; }

    

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    // speech.text = 'What you say bruh';

    window.speechSynthesis.speak(speech);
}