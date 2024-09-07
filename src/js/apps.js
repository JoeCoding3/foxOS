function registerApp (name = "", posX = 0, posY = 0, ab = true, hidden = false, url = "") {
    let img = document.createElement("img")
    img.src = `./app/icon/${name}.png`
    img.onclick = function () {
        if (url != "") launch(url, ab)
        else launch(`./app/src/${this.name}.html`, ab)
    }.bind({name, ab, url})
    img.className = `${hidden ? "hide " : ""}sec${ab ? 0 : 1}`
    if (posX < 0) img.style.left = `${screen.width + (posX * 74) + 10}px`
    else img.style.left = `${(posX * 74) + 10}px`
    if (posY < 0) img.style.top = `${screen.height + (posY * 74) + 10}px`
    else img.style.top = `${(posY * 74) + 10}px`
    document.body.append(img)
}

function registerAllApps () {
    registerApp("chrome",       0,  0, false, false, "https://www.google.com/?safe=active&ssui=on")
    registerApp("chrome2",      1,  0, true,  true,  "https://www.google.com/?safe=active&ssui=on&igu=1")
    
    registerApp("gmail",        0,  1, false, false, "https://mail.google.com/mail/u/0/#inbox")
    registerApp("drive",        1,  1, false, false, "https://drive.google.com/drive/my-drive")
    
    registerApp("blank",        0,  2, true,  false, "")
    registerApp("terminal",     1,  2, true,  false, "")

    registerApp("textedit",     0,  3, false, false, "")
    registerApp("hexedit",      1,  3, false, false, "")
    
    registerApp("camera",       0,  4, true,  false, "")
    registerApp("imgedit",      1,  4, true,  false, "")
    
    registerApp("mc",           0,  5, true,  true,  "")
    registerApp("dino",         1,  5, true,  true,  "")

    
    registerApp("clock",       -1,  0, true,  false, "")
    registerApp("filesys",     -1,  1, true,  false, "")
    registerApp("screensaver", -1,  2, true,  false, "")

    
    registerApp("clever",       0, -1, false, false, "https://clever.com/in/northshore/student/portal")
    registerApp("grades",       1, -1, false, false, "https://wa-nor-psv.edupoint.com/PXP2_Login_Student.aspx?regenerateSessionId=True")
    registerApp("schoology",    2, -1, false, false, "https://nsd.schoology.com/home")
    

    registerApp("desmos",      -1, -1, false, false, "https://student.desmos.com/")
}
