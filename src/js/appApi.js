function registerApp (name, ab = true, hidden = false, security = 0) {
    let img = document.createElement("img")
    img.src = `./app/icon/${name}.png`
    img.onclick = function () {
        launch(`./app/src/${this.name}.html`, ab)
    }.bind({name, ab})
    img.className = `${hidden ? "hide " : ""}sec${security}`
    document.body.append(img)
}

function registerAllApps () {
    registerApp("clock")
}
