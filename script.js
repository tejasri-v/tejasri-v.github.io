// script.js

document.addEventListener("DOMContentLoaded", function() {
    loadAssets("assets/images", "images", "img");
    loadAssets("assets/media", "media", ["img", "video"]);
    loadAssets("assets/pdfs", "pdfs", "a");
});

function loadAssets(folder, elementId, tag) {
    let container = document.getElementById(elementId);
    
    // Mockup for dynamically adding assets (requires backend or JSON for full automation)
    let assets = [
        { src: folder + "/example.jpg", type: "img" },
        { src: folder + "/example.mp4", type: "video" },
        { src: folder + "/example.pdf", type: "pdf" }
    ];
    
    assets.forEach(asset => {
        let el;
        if (asset.type === "img") {
            el = document.createElement("img");
            el.src = asset.src;
        } else if (asset.type === "video") {
            el = document.createElement("video");
            el.src = asset.src;
            el.controls = true;
        } else if (asset.type === "pdf") {
            el = document.createElement("a");
            el.href = asset.src;
            el.innerText = "Download PDF";
        }
        container.appendChild(el);
    });
}
