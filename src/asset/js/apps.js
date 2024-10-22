function registerApp (name = "", posX = 0, posY = 0, url = "") {
    let img = document.createElement("img")
    img.src = `./asset/icon/${name}.png`
    img.onclick = function () { launch(this) }.bind(url)

    if (posX < 0) img.style.left = `${screen.width + (posX * 74) + 10}px`
    else img.style.left = `${(posX * 74) + 10}px`
    if (posY < 0) img.style.top = `${screen.height + (posY * 74) + 10}px`
    else img.style.top = `${(posY * 74) + 10}px`
    
    document.body.append(img)
}

function registerAllApps () {
    registerApp("gmail",        0,  0, "https://mail.google.com/mail/u/0/#inbox")
    registerApp("drive",        1,  0, "https://drive.google.com/drive/my-drive")
    
    registerApp("studentvue",   0,  1, "https://wa-nor-psv.edupoint.com/PXP2_Login_Student.aspx?regenerateSessionId=True")
    registerApp("schoology",    1,  1, "https://nsd.schoology.com/home")


    registerApp("welnet",      -1,  1, "https://clever.com/oauth/authorize?channel=clever-portal&client_id=c968423122e865b5cdd3&confirmed=true&district_id=5b7b3a1da47b2e0001fba6ac&redirect_uri=https%3A%2F%2Fwww.focusedfitness.net%2FWELNET%2Fssoclevergateway.php&response_type=code")

    registerApp("desmos",      -2,  3, "https://student.desmos.com/")
    registerApp("savvas",      -1,  3, "https://reader.savvasrealize.com/book/8S86CIR2XC/view/single/page/1")

    registerApp("noodletools", -4,  4, "https://my.noodletools.com/logon/signin?domain=apps.nsd.org")
    registerApp("britannica",  -3,  4, "https://go.openathens.net/redirector/kcls.org?url=https%3A%2F%2Flibrary.eb.com")
    registerApp("worldbook",   -2,  4, "https://worldbookonline.com/advanced/home")
    registerApp("gale",        -1,  4, "https://docs.google.com/spreadsheets/d/1tAIgDD0Gl67UFSy_EOz4No71He2-O0AJeCHYowO2s7Q/edit?usp=sharing")

    registerApp("sora",        -2,  7, "https://soraapp.com/library/northshoresdwa")
    registerApp("follett",     -1,  7, "https://clever.com/oauth/authorize?channel=clever-portal&client_id=f3c1e3b9d9815e1d59ac&confirmed=true&district_id=5b7b3a1da47b2e0001fba6ac&redirect_uri=https%3A%2F%2Fsecurity.follettsoftware.com%2Faasp%2Fservice%2Fsso%2FidpValidate%2FClever&response_type=code")

    registerApp("blooket",     -4,  8, "https://play.blooket.com/play")
    registerApp("kahoot",      -3,  8, "https://kahoot.it/")
    registerApp("quizlet",     -2,  8, "https://quizlet.com/latest")
    registerApp("menti",       -1,  8, "https://www.menti.com/")
}

function launch (path = "") {
    let optsStr = `popup,left=0,top=0,width=${screen.width},height=${screen.height},noopener,noreferrer`
    open(path, "_blank", optsStr)
}
