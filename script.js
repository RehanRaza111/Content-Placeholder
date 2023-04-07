const header = document.getElementById('header')
const title = document.getElementById('title')
const expert = document.getElementById('expert')
const profileImg = document.getElementById('profile-img')
const Name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout (getData, 2500)


function getData() {
    header.innerHTML=`<img src="/laptop.avif" alt="">`
    title.innerHTML=` World's Best Smart Looking Laptop`
    expert.innerHTML=`This is the best solution for any User looking for best computing Device!`
    profileImg.innerHTML=`<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    Name.innerHTML=`Rehan Raza`
    date.innerHTML=` April 3, 2023`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg')
    )
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text')
    )
}