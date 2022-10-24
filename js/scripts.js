window.addEventListener("load", function () {
  const removeH1 = document.querySelector("h1");
  removeH1.remove();
  
  let currentLoc = document.querySelector("body");
  const h1 = document.createElement("h1");
  h1.append("Webpage Recreation Practice");
  currentLoc.after(h1);
  currentLoc = h1;

  const p = document.createElement("p");
  p.append("The HTML of this webpage was created with Java Script.");
  currentLoc.after(p);
  currentLoc = p;

  const img = document.createElement("img");
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  img.setAttribute("style", "width:50%");
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  currentLoc.after(img);
  currentLoc = img;

  const secondH1 = document.createElement("h1");
  secondH1.append("Facts about the Multicolored Tanager");
  currentLoc.after(secondH1);
  currentLoc = secondH1;

  const liOne = document.createElement("li");
  liOne.append("It is endemic to the mountains of Colombia.");
  const liTwo = document.createElement("li");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  const ul = document.createElement("ul");
  ul.append(liOne, liTwo);
  currentLoc.after(ul);
  currentLoc = ul;

  const h2 = document.createElement("h2");
  h2.append("Source");
  currentLoc.after(h2);
  currentLoc = h2;

  const a = document.createElement("a");
  a.append("Wikipedia");
  a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  currentLoc.after(a);
  
});
