const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navanchors = document.getElementsByTagName("a");
console.log(navanchors);

for (let i = 0; i<6; i++){
  navanchors[i].innerHTML = siteContent.nav[`nav-item-${i+1}`]
}

let ctatext = document.getElementsByClassName("cta-text")
console.log(ctatext[0].children)

/// HEADER
ctatext[0].children[0].innerHTML = "DOM <br> Is <br> Awesome"
ctatext[0].children[1].textContent = "Get Started"
let headimg = document.getElementById("cta-img")
headimg.setAttribute("src", siteContent["cta"]["img-src"])


///// TOP CONTENT /////
let topcontent = document.getElementsByClassName("top-content")

// features
topcontent[0].children[0].children[0].innerHTML = "Features"
topcontent[0].children[0].children[1].innerHTML = siteContent["main-content"]["features-content"]

//about
topcontent[0].children[1].children[0].textContent = siteContent["main-content"]["about-h4"]
topcontent[0].children[1].children[1].textContent = siteContent["main-content"]["about-content"]

///// MIDDLE IMG //////
let midimg = document.getElementById("middle-img")
midimg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

////// BOTTOM OF IMAGE/////
let botcontent = document.getElementsByClassName("bottom-content")

//services
botcontent[0].children[0].children[0].innerHTML = siteContent["main-content"]["services-h4"]
botcontent[0].children[0].children[1].innerHTML = siteContent["main-content"]["services-content"]

//product
botcontent[0].children[1].children[0].innerHTML = siteContent["main-content"]["product-h4"]
botcontent[0].children[1].children[1].innerHTML = siteContent["main-content"]["product-content"]

// vision
botcontent[0].children[2].children[0].innerHTML = siteContent["main-content"]["vision-h4"]
botcontent[0].children[2].children[1].innerHTML = siteContent["main-content"]["vision-content"]

let contact = document.getElementsByClassName("contact")[0]

contact.children[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.children[1].innerHTML = siteContent["contact"]["address"]
contact.children[2].innerHTML = siteContent["contact"]["phone"]
contact.children[3].innerHTML = siteContent["contact"]["email"]

let footer = document.getElementsByTagName("footer")[0]

footer.children[0].innerHTML = siteContent["footer"]["copyright"]


// NAV
let navbar = document.getElementsByTagName("nav")[0]
//APPEND
let a = document.createElement("a")
let atext = document.createTextNode("Team")
a.appendChild(atext)
navbar.appendChild(a)
//PREPEND
let a2 = document.createElement("a")
let a2text = document.createTextNode("Company")
a2.appendChild(a2text)
navbar.prepend(a2)

navbar.children[7].setAttribute("href" , "#")
navbar.children[0].setAttribute("href", "#")

// COLOR TO GREEN
let anchors = document.getElementsByTagName("a")
for (let i=0;i<anchors.length; i++){
  anchors[i].style.color = "green";
}


///// STRETCH GOAL /////
function clicky(){
  let img = document.getElementById("cta-img")
  if (img.style.display != "none"){
    img.style.display = "none";
  }
  else{
    img.style.display = "block";
  }
}

let button = document.querySelector("button")
button.setAttribute("onClick", "clicky()")