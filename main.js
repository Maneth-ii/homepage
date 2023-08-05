const links = [
  {
    id:1,
    name:"Youtube",
    href:"https://www.youtube.com"
  },
  {
    id:2,
    name:"Facebook",
    href:"https://www.facebook.com"
  },
  {
    id:3,
    name:"ChatGPT",
    href:"https://chat.openai.com/"
  },
  {
    id:4,
    name:"Github",
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
  
];

const linksList = links.map((aLink) =>{
  return(
    `<li class="list-item">
      <a class="link" href=${aLink.href} target="_blank">
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
