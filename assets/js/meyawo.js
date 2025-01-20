/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function openModal(imageElement) {
    // Obtém o caminho da imagem clicada
    const imageUrl = imageElement.src;

    // Encontra o modal e a imagem dentro do modal
    const modal = document.getElementById('modal');
    const modalImage = modal.querySelector('img');

    // Define o caminho da imagem no modal
    modalImage.src = imageUrl;

    // Exibe o modal
    modal.style.display = 'block';
}