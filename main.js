const searchInputFieldValue = document.getElementById("search-el").value

const links = [
  {
    id:1,
    name:"Youtube",
    color:"red",
    href:"https://www.youtube.com"
  },
  {
    id:2,
    name:"Facebook",
    color:"blue",
    href:"https://www.facebook.com"
  },
  {
    id:3,
    name:"ChatGPT",
    color:"green",
    href:"https://chat.openai.com/"
  },
  {
    id:4,
    name:"Github",
    color:"black",
    href:"https://www.github.com"
  },
  {
    id:5,
    name:"Scrimba",
    href:"https://www.Scrimba.com"
  },
  {
    id:6,
    name:"GSMArena",
    href:"https://www.gsmarena.com"
  },
  {
    id:7,
    name:"Google",
    href:"https://www.google.com"
  },
  {
    id:7,
    name:"Google",
    href:"https://www.google.com"
  },
  
];

const linksList = links.map((aLink) =>{
  return(
    `<li class="list-item" style=background-color:${aLink.color};>
      <a class="link" href=${aLink.href} >
        <div style="">
          <h1>${aLink.name}</h1>
        </div>
      </a>
    </li>
    `
  )
})


document.addEventListener("DOMContentLoaded", () => {
  set();
});

function set() {
  const list = document.getElementById("list");
  list.innerHTML = linksList.join("");
}
