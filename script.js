document.addEventListener('DOMContentLoaded' , function () {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');
    const closeMenuButton = document.querySelector('.close-menu');

    burgerMenu.addEventListener('click' , function () {
        toggleMenu();

        
    })

    closeMenuButton.addEventListener('click' , function () {
        closeMenu();
    });

    function toggleMenu() {
        navigation.classList.toggle("show");
        //burgerMenu.style.display = 'none' ;
        
    };

    function closeMenu() {
        navigation.classList.remove('show');
       // burgerMenu.style.display = 'block'
    }
})


document.getElementById('text-copy').addEventListener('click' , function() {
    const text = this.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = text

    document.body.appendChild(textarea)

    textarea.select();
    textarea.style.display = 'none'

    document.execCommand('copy');

    alert('تم نسخ النص ' + text)
})