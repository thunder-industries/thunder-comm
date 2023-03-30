var navbar = ` 
<link href= "nav.css" rel="stylesheet">
<nav>
<div class="nav">

<ul>
    <li ><img class="logo"</li>
    <li ><button ><a href="index.html">Home</a></button></li>
    <li ><button><a href="about.html">About</a></button></li>
    <li ><button ><a href="contact.html">Contact</a></button></li>
    <li ><button ><a href="projects.html">Projects</a></button></li>
   
</ul>
    </div>
</nav>`;

// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navbar);