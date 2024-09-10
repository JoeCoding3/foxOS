function registerApp (name = "", posX = 0, posY = 0, hidden = false, url = "") {
    let img = document.createElement("img")
    img.src = `./app/icon/${name}.png`
    img.onclick = function () {
        if (url != "") launch(this.url)
        else launch(`./app/src/${this.name}.html`)
    }.bind({name, url})
    img.className = hidden ? "hide" : ""
    if (posX < 0) img.style.left = `${screen.width + (posX * 74) + 10}px`
    else img.style.left = `${(posX * 74) + 10}px`
    if (posY < 0) img.style.top = `${screen.height + (posY * 74) + 10}px`
    else img.style.top = `${(posY * 74) + 10}px`
    document.body.append(img)
}

function registerAllApps () {
    registerApp("filesys",      0,  0, false, "")
    registerApp("textedit",     1,  0, false, "")
    
    registerApp("gmail",        0,  1, false, "https://mail.google.com/mail/u/0/#inbox")
    registerApp("drive",        1,  1, false, "https://drive.google.com/drive/my-drive")
    
    registerApp("grades",       0,  2, false, "https://wa-nor-psv.edupoint.com/PXP2_Login_Student.aspx?regenerateSessionId=True")
    registerApp("schoology",    1,  2, false, "https://nsd.schoology.com/home")

    registerApp("desmos",       0,  3, false, "https://student.desmos.com/")
    registerApp("textbook",     1,  3, false, "https://reader.savvasrealize.com/book/8S86CIR2XC/view/single/page/1")

    
    registerApp("mc",           0,  4, true,  "")
    registerApp("dino",         1,  4, true,  "")
}
