var recognition = new webkitSpeechRecognition();

recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;

    const output = document.getElementById('para').innerText = text;
    output.innerText
    read(text);
}

function read(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if (text == 'hello') {
        speech.text = "Bye";
    }
    else if (text == "what is your name") {
        speech.text = "My name is Alexa , i am your assistant "
    }

    // else if (text == "who is your GF") {
    //     speech.text = "My girlfriend name is Samia Akter "
    // }
    else if (text == "hello Alexa") {
        speech.text = "Yes , how can i help you sir ?"
    }
    else if (text == "what are you doing") {
        speech.text = "Nothing !!"
    }
    else if (text == "do you love me") {
        speech.text = "yes , as a friend !!"
    }
    else if (text == "thanks a lot") {
        speech.text = "You are welcome "
    }
    else if (text == "Alexa") {
        speech.text = "Yes sir , How can i help you ?"
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }

    else {
        speech.text = "Please try again";
    }

    document.getElementById('res').innerText = speech.text;
    window.speechSynthesis.speak(speech);

}
