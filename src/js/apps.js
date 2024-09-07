function registerApp (name = "", posX = 0, posY = 0, ab = true, hidden = false, security = 0, url = "") {
    let img = document.createElement("img")
    img.src = `./app/icon/${name}.png`
    img.onclick = function () {
        if (url != "") launch(url, ab)
        else launch(`./app/src/${this.name}.html`, ab)
    }.bind({name, ab, url})
    img.className = `${hidden ? "hide " : ""}sec${security}`
    if (posX < 0) img.style.left = `${screen.width + (posX * 74) + 10}px`
    else img.style.left = `${(posX * 74) + 10}px`
    if (posY < 0) img.style.top = `${screen.height + (posY * 74) + 10}px`
    else img.style.top = `${(posY * 74) + 10}px`
    document.body.append(img)
}

function registerAllApps () {
    registerApp("chrome",       0,  0, false, false, 3, "https://www.google.com/?safe=active&ssui=on")
    registerApp("chrome2",      1,  0, true,  true,  1, "https://www.google.com/?safe=active&ssui=on&igu=1")
    
    registerApp("gmail",        0,  1, false, false, 3, "https://mail.google.com/mail/u/0/#inbox")
    registerApp("drive",        1,  1, false, false, 3, "https://drive.google.com/drive/my-drive")
    
    registerApp("blank",        0,  2, true,  false, 0, "")
    registerApp("terminal",     1,  2, true,  false, 0, "")

    registerApp("textedit",     0,  3, true,  false, 0, "")
    registerApp("hexedit",      1,  3, true,  false, 0, "")
    
    registerApp("camera",       0,  4, true,  false, 0, "")
    registerApp("imgedit",      1,  4, true,  false, 0, "")
    
    registerApp("mc",           0,  5, true,  true,  0, "")
    registerApp("dino",         1,  5, true,  true,  0, "")

    
    registerApp("clock",       -1,  0, true,  false, 0, "")
    registerApp("filesys",     -1,  1, true,  false, 0, "")
    registerApp("screensaver", -1,  2, true,  false, 0, "")

    
    registerApp("clever",       0, -1, false, false, 3, "https://clever.com/in/northshore/student/portal")
    registerApp("grades",       1, -1, false, false, 3, "https://wa-nor-psv.edupoint.com/PXP2_Login_Student.aspx?regenerateSessionId=True")
    registerApp("schoology",    2, -1, false, false, 3, "https://nsd.schoology.com/home")
    

    registerApp("desmos",      -1, -1, false, false, 3, "https://student.desmos.com/")
}
