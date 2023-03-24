function createHome() {
    const home = document.createElement('div');
    const image = document.createElement('img');
  
    image.src = "/dist/images/red-wine.jpg";
    image.alt = "Red Wine";
  
    home.appendChild(createText("This Restaurant is Amazing!"));
    home.appendChild(image);
  
    return home;
  }

function createText(text) {
    const paragraph = document.createElement("h1");

    paragraph.textContent = text;

    return paragraph;
}

function loadPage() {
    const content = document.getElementById('content');

    content.appendChild(createHome());
}

export default loadPage;