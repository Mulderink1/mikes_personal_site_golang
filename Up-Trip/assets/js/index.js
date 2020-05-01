var pictureModal = function (thisObject) {
    if (window.innerWidth > 1155) {
        var imageData = {
            src: thisObject.childNodes[1].src,
            text: thisObject.childNodes[3].childNodes[1].innerHTML
        };
        var backgoundDiv_1 = document.createElement("div");
        var modalDiv = document.createElement("div");
        var imageDiv = document.createElement("div");
        var imageTag = document.createElement("img");
        imageTag.setAttribute("src", imageData.src);
        var paragraphTag = document.createElement("p");
        paragraphTag.innerHTML = imageData.text;
        imageDiv.appendChild(imageTag);
        modalDiv.appendChild(imageDiv);
        modalDiv.appendChild(paragraphTag);
        backgoundDiv_1.appendChild(modalDiv);
        document.getElementsByTagName("main")[0].appendChild(backgoundDiv_1);
        window.onclick = function (event) {
            if (event.target === backgoundDiv_1) {
                backgoundDiv_1.parentNode.removeChild(backgoundDiv_1);
                window.onclick = undefined;
            }
        };
    }
};
