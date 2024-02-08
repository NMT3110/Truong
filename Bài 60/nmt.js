function toggleMenu(){
    const menu = document.querySelector('.hamburger');
    const dt_menu = document.querySelector('.menu-links');
    menu.addEventListener('click', function () {
        menu.classList.toggle('open');
        dt_menu.classList.toggle('open');
    });
}

/* form*/
function validateForm(){
    var x;
    x=document.forms["frm_dk"]["name"].value;
    if(x==""){
        alert("Bạn chưa nhập họ");
        return false;
    }
    x=document.getElementById("txt_ten").value;
    if(x==""){
        alert("Bạn chưa nhập tên");
        return false;
    }
    x=document.getElementById("phone").value;
    if(isNaN(x)||length(x)==0||length(x)>10){
        alert("điện thoại phải có số, mời nhập lại");
        return false;
    }
}


/* click btap*/
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        const projectName = project.getAttribute('data-name');
        if (projectName !== 'b1') {
            project.style.display = 'none';
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-name');
            projects.forEach(project => {
                const projectName = project.getAttribute('data-name');
                if (projectName === tabName) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});

let navlist = document.querySelectorAll('.ten-buoi a');

for (let i = 0; i < navlist.length; i++) {
	navlist[i].addEventListener('click', function() {
		for (let x = 0; x < navlist.length; x++) {
			if (navlist[x] == this) {
				navlist[x].classList.add('bam');
			} else {
				navlist[x].classList.remove('bam');
			}
		}
	});
}

/* loichungthuc*/
const wrapper = document.querySelector('.khung-anh');
const indicators = [...document.querySelectorAll('.chuyendong button')];

let currentTestimonial = 0; 

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})

/* cuộn chuột*/
let navbar = document.querySelector('.menunho');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.menunho li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('activemn');
            });
            document.querySelector('.menunho li a[href*=' + id + ']').classList.add('activemn');
        }
    });
};