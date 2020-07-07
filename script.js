const voice = document.querySelector('.voice');
const voice2txt = document.querySelector('.voice2txt');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
	console.log(event);
};

voice.addEventListener('click', () =>{
	recorder.start();
})
