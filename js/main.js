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
        speech.text = "Hi ";
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
    else if (text == "who are you") {
        speech.text = "i am assistant of Md Altaf Hossen"
    }
    else if (text == "who is your owner") {
        speech.text = 'My boss is Md Altaf Hossen';
    }
    else if (text == "how old are you") {
        speech.text = "i am computer programme , i have no age like human"
    }
    else if (text == "what food do you like") {
        speech.text = "biriyani"
    }
    else if (text == "you are so talented") {
        speech.text = "Thank you very much !!"
    }
    else if (text == "I love you") {
        speech.text = "I love you too but as a friend !!"
    }
    else if (text == "why") {
        speech.text = "nothing "
    }
    else if (text == "do you have any girlfriend") {
        speech.text = "yes i have more and more girlfriends"
    }
    else if (text == "give me your boss phone number") {
        speech.text = "+88 01873-379859"
    }
    else if (text == "give me your boss photo") {
        speech.text = "";
        document.getElementById('link').style.display = 'block';
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
