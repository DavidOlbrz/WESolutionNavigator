function toggleCode(id) {
    console.log('Toggling');
    const codeBlock = document.getElementById(id);
    if (codeBlock.style.display !== '') {
        codeBlock.style.display = '';
    } else {
        codeBlock.style.display = 'inline';
    }
}