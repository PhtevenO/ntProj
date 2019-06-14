var carrouselItems = [
  {
    picture: "/Images/jason-briscoe-332508-unsplash.png",
    title: "Lorem ipsum dolor sit amet",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    picture: "/Images/kirill-975619-unsplash.png",
    title: "Lorem ipsum dolor",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    picture: "/Images/tu-tu-322210-unsplash.png",
    title: "Lorem ipsum dolor sit amet",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];

var offerItems = [
    {disc: '-5%', houseNumber: '1', area: '50.17', rooms: '3', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '', houseNumber: '2', area: '15', rooms: '3', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '', houseNumber: '1', area: '20.17', rooms: '3', window: 'Šiaurė', finish: 'Statoma'},
    {disc: '-15%', houseNumber: '1', area: '67', rooms: '3', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '-10%', houseNumber: '2', area: '58.17', rooms: '3', window: 'Rytai', finish: 'Statoma'},
    {disc: '', houseNumber: '1', area: '60.17', rooms: '3', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '', houseNumber: '21', area: '60.17', rooms: '3', window: 'Pietūs', finish: 'Statoma'},
    {disc: '-15%', houseNumber: '8', area: '50.17', rooms: '3', window: 'Vakarai', finish: 'Pastatyta'},
    {disc: '-5%', houseNumber: '1', area: '50.17', rooms: '3', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '-5%', houseNumber: '1', area: '50.17', rooms: '3', window: 'Pietūs', finish: 'Statoma'},
]

console.log(carrouselItems);

function createItems() {
  let i = 0;
  carrouselItems.forEach(element => {
    console.log(element);
    let el = document.getElementById("itemsInside");
    let newEl = document.createElement("div");
    newEl.setAttribute("class", "itemWindow");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "image");
    let imgEl = document.createElement("IMG");
    imgEl.setAttribute("src", element.picture);
    let headEl = document.createElement("h2");
    var headNode = document.createTextNode(element.title);
    headEl.appendChild(headNode);

    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "text");

    let textEl = document.createElement("p");
    var textNode = document.createTextNode(element.text);
    textEl.appendChild(textNode);
    textDiv.appendChild(textEl);
    imgDiv.appendChild(imgEl);
    newEl.appendChild(imgDiv);
    newEl.appendChild(headEl);
    newEl.appendChild(textDiv);
    el.appendChild(newEl);
  });
}
createItems();

function checkNumbers(e) {
  let ch = String.fromCharCode(e.which);
  if (!/[0-9]/.test(ch)) {
    e.preventDefault();
  }
}

function validateForm(e) {
  console.log("valid");
  e.preventDefault();
}
