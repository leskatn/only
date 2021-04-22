function doMagic() {
    var blockLeft = document.getElementById('block-left');
    if (blockLeft.classList.contains('block--red')) {
        blockLeft.classList.remove('block--red');
        blockLeft.classList.add('block--green');
    } else {
        blockLeft.classList.remove('block--green');
        blockLeft.classList.add('block--red');
    }

    var blockRight = document.getElementById('block-right');
    if (blockRight.classList.contains('hidden')) {
        blockRight.classList.remove('hidden');
    } else {
        blockRight.classList.add('hidden');
    }
}