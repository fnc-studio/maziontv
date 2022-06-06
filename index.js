let navBtn = document.getElementById("toggleNav");
navBtn.addEventListener('click', (e) => {
    console.log(navBtn.checked)
    if(navBtn.checked) {
        document.addEventListener('click', closeNav);
        
    } else {
        document.removeEventListener('click', closeNav);
    }
})

function closeNav(e) {
    if(e.target.id !== navBtn.id) {
        navBtn.checked = false;
    }
}

let wordCombo = "";
document.addEventListener('keyup', (e) => {
    setTimeout(function(){
        wordCombo = "";
    }, 2000);
    wordCombo+= e.key;
    if(wordCombo=='buttplug'){
        console.log(`
        G#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#G
        GGB&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#BGG
        GGGGB#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#BGGGG
        GGGGGGB#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#BGGGGGG
        GGGGGGGGB#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#BGGGGGGGG
        BGGGGGGGGGB#@@@@@@@@@@@@@@@@@@@@@@@@@@#BGGGGGGGGGB
        BBBBGBBGGBGGB#@@@@@@@@@@@@@@@@@@@@@@#BGGBGGBBGBBBB
        BBBBB#@&BBBBBBB#&@@@@@@@@@@@@@@@@&#BBBBBBB&@#BBBBB
        BBBBB#@@@&#BBBBBB#&@@@@@@@@@@@@&#BBBBBB#&@@@#BBBBB
        BBBBB#@@@@@&#BBBBBB#&@@@@@@@@&#BBBBBB#&@@@@@#BBBBB
        BBBBB#@@@@@@@&#BBBBBB#&@@@@&#BBBBBB#&@@@@@@@#BBBBB
        BBBBB#@@@@@@@@@&#BBBBBB#&&#BBBBBB#@@@@@@@@@@#BBBBB
        BBBBB#@@@@@@@@@@@@#BBBBBBBBBBB##@@@@@@@@@@@@#BBBBB
        #BBBB#@@@@@#&@@@@@@@&#BBBBBB#&@@@@@@@&#@@@@@#BBBB#
        #####&@@@@@#B#&@@@@@@@&####&@@@@@@@&#B#@@@@@&#####
        #####&@@@@@#####&@@@@@@@&&@@@@@@@&#####@@@@@&#####
        #####&@@@@@#####&@@@@@@@@@@@@@@@@&#####@@@@@&#####
        #####&@@@@@#####&@@@@@@@@@@@@@@@@&#####@@@@@&#####
        #####&@@@@@#####&@@@@@@@@@@@@@@@@&#####@@@@@&#####
        #####&&&&&&#####&@@@@@@@@@@@@@@@@&#####&&&&&&#####
        ################&@@@@@@@@@@@@@@@@&################
        &&&&&&&&&&&&&&&#&@@@@@@@@@@@@@@@@&#&&&&&&&&&&&&&&&
        
        Get your very own MazPlug™ today!`)
    }
    
});