function openAdoptionForm(dogName) {

    const windowWidth = 600;
    const windowHeight = 700;

    const windowLeft = (window.screen.width - windowWidth) / 2;
    const windowTop = (window.screen.height - windowHeight) / 2;

    const adoptionFormUrl = `adoption_form.html?dogName=${encodeURIComponent(dogName)}`;
    window.open(adoptionFormUrl, '_blank', `width=${windowWidth}, height=${windowHeight}, left=${windowLeft}, top=${windowTop}`);
}


function playDogAudio() {
    var audio = new Audio(' ../audio/Dog_audio.mp3'); // Replace 'path/to/dog_audio.mp3' with the actual path to your dog audio file
    audio.play();
}

function playCatAudio() {
    var audio = new Audio('../audio/Cat_audio.mp3'); // Replace 'path/to/cat_audio.mp3' with the actual path to your cat audio file
    audio.play();
}

function playHamsterAudio() {
    var audio = new Audio('../audio/hamster_audio.mp3'); // Replace 'path/to/hamster_audio.mp3' with the actual path to your hamster audio file
    audio.play();
}
function playHorseAudio() {
    var audio = new Audio('../audio/horse_audio.mp3'); // Replace 'path/to/hamster_audio.mp3' with the actual path to your hamster audio file
    audio.play();
}
