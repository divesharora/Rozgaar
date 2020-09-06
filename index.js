// workers  so far
function animateValue( ) {
    var end=5000;
    var start=0;
    var duration=1000;
    var range = end-start;
    var current = start;
    var increment = end > start? 1: -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.querySelector(".work");
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = "Workers helped so far:  "+current+"+";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

 // nav bar
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#272343';
		header.style.opacity = "0.9"
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// contact form validation and other effects

function validatenoblank()
        {
            var username=document.getElementById("uname");
            var useremail=document.getElementById("uemail");
            var usermessage=document.getElementById("umessage");
            if(username.value.trim()=="")
            {
                alert("Blank username");
                username.style.border="solid 1px #f8bd7f";
                return false;
            }
            else if(useremail.value.trim()=="")
            {
                alert("Blank email");
				useremail.style.border="solid 1px #f8bd7f";
				username.style.border="solid 1px black";
                return false;
            }
            else if(usermessage.value.trim()=="")
            {
                alert("Blank message");
				usermessage.style.border="solid 1px #f8bd7f";
				useremail.style.border="solid 1px black";
                return false;
            }
            else
            {
                return true;
            }
        }
        function validateemail()
        {
            var useremail=document.getElementById("uemail").value;
            var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
            if(regx.test(useremail))
            {
                alert("Valid email");
                return true;
            }
            else
            {
                alert("Invalid email");
                return false;
            }

		}
		
