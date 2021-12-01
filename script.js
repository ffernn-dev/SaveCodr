var levelElement, moneyElement, goldElement, blackbricksElement, skillpointsElement

var regballsElement, plasballsElement, snipballsElement, splitballsElement, cannonballsElement, poisballsElement

var regballtopElement, regballbottomElement, plasballtopElement, plasballbottomElement, snipballtopElement, snipballbottomElement, splitballtopElement, splitballbottomElement, cannonballtopElement, cannonballbottomElement, poisballtopElement, poisballbottomElement

var poweruptokensElement, cashedupElement, clickfrenzyElement, demoncoreElement, snowballElement, twoxgoldElement

var prestigeElement, cashbonusElement, ballspeedElement, ballpowElement, vauslasersElement, maxballsElement

window.onload = function() {
    levelElement = document.getElementById("level");
    moneyElement = document.getElementById("money");
    goldElement = document.getElementById("gold");
    blackbricksElement = document.getElementById("blackbricks");
    skillpointsElement = document.getElementById("skillpoints");

    regballsElement = document.getElementById("regballs");
    plasballsElement = document.getElementById("plasballs");
    snipballsElement = document.getElementById("snipballs");
    splitballsElement = document.getElementById("splitballs");
    cannonballsElement = document.getElementById("cannonballs");
    poisballsElement = document.getElementById("poisballs");

    regballtopElement = document.getElementById("regballtop");
    regballbottomElement = document.getElementById("regballbottom");
    plasballtopElement = document.getElementById("plasballtop");
    plasballbottomElement = document.getElementById("plasballbottom");
    snipballtopElement = document.getElementById("snipballtop");
    snipballbottomElement = document.getElementById("snipballbottom");
    splitballtopElement = document.getElementById("splitballtop");
    splitballbottomElement = document.getElementById("splitballbottom");
    cannonballtopElement = document.getElementById("cannonballtop");
    cannonballbottomElement = document.getElementById("cannonballbottom");
    poisballtopElement = document.getElementById("poisballtop");
    poisballbottomElement = document.getElementById("poisballbottom");

    poweruptokensElement = document.getElementById("poweruptokens");
    cashedupElement = document.getElementById("cashedup");
    clickfrenzyElement = document.getElementById("clickfrenzy");
    demoncoreElement = document.getElementById("demoncore");
    snowballElement = document.getElementById("snowball");
    twoxgoldElement = document.getElementById("2xgold");

    prestigeElement = document.getElementById("prestige");
    cashbonusElement = document.getElementById("cashbonus");
    ballspeedElement = document.getElementById("ballspeed");
    ballpowElement = document.getElementById("ballpow");
    vauslasersElement = document.getElementById("vauslasers");
    maxballsElement = document.getElementById("maxballs");
}

function read() {
    var code = document.getElementById("currentcode").value
    decoded = Base64.decode(code)
    console.log(decoded)
    var valuesArray = decoded.split(',');
    console.log(valuesArray)
    levelElement.value = valuesArray[0]
    moneyElement.value = valuesArray[1]
    goldElement.value = valuesArray[2]
    blackbricksElement.value = valuesArray[104]
    skillpointsElement.value = valuesArray[109]

    regballsElement.value = valuesArray[28]
    plasballsElement.value = valuesArray[29]
    snipballsElement.value = valuesArray[30]
    splitballsElement.value = valuesArray[31]
    cannonballsElement.value = valuesArray[32]
    poisballsElement.value = valuesArray[33]

    regballtopElement.value = valuesArray[37]
    regballbottomElement.value = valuesArray[38]
    plasballtopElement.value = valuesArray[39]
    plasballbottomElement.value = valuesArray[40]
    snipballtopElement.value = valuesArray[41]
    snipballbottomElement.value = valuesArray[42]
    splitballtopElement.value = valuesArray[42]
    splitballbottomElement.value = valuesArray[44]
    cannonballtopElement.value = valuesArray[45]
    cannonballbottomElement.value = valuesArray[46]
    poisballtopElement.value = valuesArray[47]
    poisballbottomElement.value = valuesArray[48]

    poweruptokensElement.value = valuesArray[8]
}

function generate() {
    const code = document.getElementById("currentcode")

    var valuesArray = [
        levelElement.value,
        moneyElement.value,
        goldElement.value,
        prestigeElement.value,
        0,
        0,
        0,
        0,
        poweruptokensElement.value,
        0,
        0,
        1,
        1,
        0,
        44529,
        999999,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        regballsElement.value,
        plasballsElement.value,
        snipballsElement.value,
        splitballsElement.value,
        cannonballsElement.value,
        poisballsElement.value,
        0,
        0,
        0,
        regballtopElement.value,
        regballbottomElement.value,
        plasballtopElement.value,
        plasballbottomElement.value,
        snipballtopElement.value,
        snipballbottomElement.value,
        splitballtopElement.value,
        splitballbottomElement.value,
        cannonballtopElement.value,
        cannonballbottomElement.value,
        poisballtopElement.value,
        poisballbottomElement.value,
        0,
        0,
        0,
        cashbonusElement.value,
        ballspeedElement.value,
        ballpowElement.value,
        vauslasersElement.value,
        maxballsElement.value,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        String(+cashedupElement.checked),
        String(+clickfrenzyElement.checked),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        blackbricksElement.value,
        0,
        0,
        0,
        1,
        skillpointsElement.value,
        1,
        0,
        0
    ]
    var string = valuesArray.join()
    encoded = Base64.encode(string)
    code.value = encoded
}

function check(type) {
    if (type === "read") {
        read()
    }
    else if (type === "generate") {
        generate()
    }
}