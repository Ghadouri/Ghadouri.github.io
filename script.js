document.addEventListener('click', function() {
    const boy = document.getElementById('boy');
    if (boy.classList.contains('jump')) return;
    
    boy.classList.add('jump');
    
    setTimeout(function() {
        boy.classList.remove('jump');
    }, 500);
});
