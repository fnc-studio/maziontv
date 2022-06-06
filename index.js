let wordCombo = "";

document.addEventListener('keyup', (e) => {
    if(e.key === "b" && wordCombo === "") {
        wordCombo+= e.key;
    } else if (e.key === "u" && wordCombo === "b") {
        wordCombo += e.key;
    } else if (e.key === "t" && wordCombo === "bu" || e.key === "t" && wordCombo === "but") {
        wordCombo += e.key;
    } else if (e.key === "p" && wordCombo === "butt") {
        wordCombo += e.key;
    } else if (e.key === "l" && wordCombo === "buttp") {
        wordCombo += e.key;
    } else if (e.key === "u" && wordCombo === "buttpl") {
        wordCombo += e.key;
    } else if (e.key === "g" && wordCombo === "buttplu") {
        wordCombo += e.key;
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
        &&&&&&&&&&&&&&&#&@@@@@@@@@@@@@@@@&#&&&&&&&&&&&&&&&`)

        setTimeout(() => {
            wordCombo = "";
        }, 2000);
    } else {
        wordCombo = "";
    }
});
