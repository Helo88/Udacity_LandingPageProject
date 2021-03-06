
 /*global variables*/
sections=document.querySelectorAll('section')
main=document.querySelector('.main__hero')
collapseBtns=document.querySelectorAll('h2')
console.log(collapseBtns)
navbarList=document.querySelector('#navbar__list')
/*  */
navbarList.style.display="none"
main.setAttribute("id","main")

var isScrolling;
/* scroll up btn*/
scrollBtn=document.createElement("a")
scrollBtn.style.textDecoration="none"
scrollBtn.innerText="up"
scrollBtn.style.display="none"
scrollBtn.style.width="30px"
scrollBtn.style.height="30px"
scrollBtn.style.textAlign="center"
scrollBtn.style.paddingTop="10px"
scrollBtn.style.borderRadius="50%"
scrollBtn.style.color="black"
scrollBtn.style.backgroundColor="yellow"
scrollBtn.style.position="fixed"
scrollBtn.style.left="20px"
scrollBtn.style.bottom="200px"
scrollBtn.setAttribute("href","#"+"main")
scrollBtn.style.zIndex="1000"
main.appendChild(scrollBtn)

/* dynamic Nav Bar*/ 

for(i=0 ;i<sections.length;i++)
{
li=document.createElement("li")
a=document.createElement("a")
a.classList.add("menu__link")
a.setAttribute("href","#"+sections[i].id);
a.setAttribute("id","nav_"+sections[i].id);
console.log(a.href.split("#")[1])
a.addEventListener("click",function fuv() {
    sections.forEach(element => { //nav to a specific section
        if(element.id==this.href.split("#")[1])
        {
        element.classList.add("your-active-class")}
         else{
          
            element.classList.remove("your-active-class")  
         }
        
    });
    
})

a.textContent=sections[i].id
li.appendChild(a)
navbarList.appendChild(li)
}



/* check nav*/
console.log(navbarList)


// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    navbarList.style.display="block"
    console.log("scrolling")
    /*scroll up button*/
  if (document.body.scrollTop > window.innerHeight  /* for old browsers*/
    || document.documentElement.scrollTop > window.innerHeight) {
    scrollBtn.style.display="block"
  } else {
    console.log( document.documentElement.scrollTop)
    scrollBtn.style.display="none"
   
  }
   /*scroll with nav*/
	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
        navbarList.style.display="none"
		console.log( 'Scrolling has stopped.' );

	}, 1000);

}, false);
   
  /*intersctor observable part to detect which section is on viewport*/
let options = {
    threshold: .7
  }
  
anchors=document.querySelectorAll('a')
console.log("ans",anchors)

  let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
        console.log("this is iddd ",entry.target.id)

       anchors.forEach(anchor=>{ /*highlight only active section nav a  */
           if(anchor.id.split("_")[1]==entry.target.id)
           {
            anchor.classList.add("activeLink")
           }
           else {
            anchor.classList.remove("activeLink")
           }
       })
       

        
        }

    });
  };
  let observer = new IntersectionObserver(callback, options);
sections.forEach(section=>{observer.observe(section)})
  
 
/*collapse part */

collapseBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        var content1 = btn.nextElementSibling;
        var content2 = content1.nextElementSibling;
        if (content1.style.display == "block" && content2.style.display == "block") {
          content1.style.display = "none";
          content2.style.display = "none";
        } else {
          content1.style.display = "block";
          content2.style.display = "block";
        }
        

    })
})










