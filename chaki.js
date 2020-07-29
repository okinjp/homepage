const colors = [["茶", "brown"], ["青", "blue"], ["黒", "black"], ["白", "white"], ["緑", "green"], ["黄", "yellow"], ["再描画", "black "], ["リセット", "red"]];
const chakiViewID = "chakis";
const colorViewID = "colors";
let arr = [];

function addChaki(key, arr) {
    arr.push(colors[key]);
    return arr;
}

function updateChakiView(id, arr) {
    id = id;
    document.getElementById(id).innerHTML = "";
    for (const [key, value] of arr) {
        let chaki = document.createElement("div");
        chaki.innerHTML = key;
        chaki.style.color = value;
        chaki.className = 'chaki-item';
        document.getElementById(id).appendChild(chaki);
        if (key.length>2) {
            let space = document.createElement("span");
            space.innerHTML="&nbsp;";
            document.getElementById(id).appendChild(space);
        }
    }
    return arr;
}

function clearChakiView(id) {
    arr = [];
    document.getElementById(id).innerHTML = "";
    return arr;
}

function writeList(id) {
    document.getElementById(id).innerHTML = "";
    let i = 0;
    for (const [key, value] of colors) {
        let color = document.createElement("div");
        color.innerHTML = key;
        color.style.color = value;
        // let f = new Function();
        // color.onclick = f;
        if (key == "リセット") {
            color.setAttribute('onclick', 'arr = clearChakiView(chakiViewID);');
        } else if (key == "再描画") {
            color.setAttribute('onclick', 'arr = updateChakiView(chakiViewID,arr);');
        } else {
            color.setAttribute('onclick', 'arr = addChaki(' + i + ', arr);updateChakiView(chakiViewID,arr);');
        }
        color.className = 'color-item';
        document.getElementById(id).appendChild(color);
        i++;
    }
}

window.onload = function () {
    clearChakiView(chakiViewID);
    writeList(colorViewID);
}