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
    {disc: '-5%', houseNumber: '1', area: '50.17', rooms: '1', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '', houseNumber: '2', area: '15', rooms: '3', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '', houseNumber: '1', area: '20.17', rooms: '1', window: 'Šiaurė', finish: 'Statoma'},
    {disc: '-15%', houseNumber: '1', area: '67', rooms: '2', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '-10%', houseNumber: '2', area: '58.17', rooms: '4', window: 'Rytai', finish: 'Statoma'},
    {disc: '', houseNumber: '1', area: '60.17', rooms: '2', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '', houseNumber: '21', area: '60.17', rooms: '3', window: 'Pietūs', finish: 'Statoma'},
    {disc: '-15%', houseNumber: '8', area: '50.17', rooms: '1', window: 'Vakarai', finish: 'Pastatyta'},
    {disc: '-5%', houseNumber: '1', area: '50.17', rooms: '3', window: 'Pietūs', finish: 'Pastatyta'},
    {disc: '-5%', houseNumber: '1', area: '50.17', rooms: '3', window: 'Pietūs', finish: 'Statoma'},
]

console.log(carrouselItems);

function createItems() {
  let i = 0;
  carrouselItems.forEach(element => {
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

function createTableItems(){
  offerItems.forEach(item => {
    // console.log(Object.values(item));
    let liEl = document.createElement('tr');
    
    Object.values(item).forEach(values =>{
      let val = '';
      if (values == ''){
        val = '-'
      } else {
        val = values;
      }
      let valueNode = document.createTextNode(val);
      let liTd = document.createElement('td');
      liTd.appendChild(valueNode);
      liEl.appendChild(liTd);
      
    })
    
    document.getElementById('tableInfo').appendChild(liEl);
    // console.log(item);
  })
}

createTableItems();

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
var newsURL = 'https://api.unsplash.com/search/photos?query=lithuania&per_page=6&client_id=';
var apiKey = '4af7c386b4e4a4581713e009d5ee422c726867c1b10067c14b3e66b0f114e61c';
var X = 6;
$.ajax({
  url: newsURL+apiKey,
  type: 'GET',
  dataType: 'json',
  headers: {
   
  },
  contentType: 'application/json; charset=utf-8',
  success: res=>{
    console.log(res)
    res.results.forEach(links =>{
          console.log(links.urls['small']);
          let square = document.createElement('div');
          square.setAttribute('class', 'square');

          let content = document.createElement('div');
          content.setAttribute('class', 'content');

          let image = document.createElement('img');
          image.setAttribute('src', links.urls['small']);

          let textDiv = document.createElement('div');
          textDiv.setAttribute('class', 'text');

          let text = document.createElement('h2');
          let textNode = document.createTextNode(links.alt_description);
          text.appendChild(textNode);
          textDiv.appendChild(text);

          square.appendChild(content);
          content.appendChild(image);
          content.appendChild(textDiv);

          document.getElementById('newsContent').appendChild(square);

        })
  },
  error: er =>{
    console.log(er);
  }
})

