function openMenu() {
    document.getElementById('menu-container').children.item(0).style.display = 'unset'
    const navigation = document.getElementById('menu-container');
    navigation.style.display = 'unset';

    const menuButton = document.getElementById('menu-button');
    menuButton.className = 'fa-solid fa-xmark';
    menuButton.onclick = function () {
        closeMenu();
    };
}

function closeMenu() {
    document.getElementById('menu-container').style.display = 'none';

    const menuButton = document.getElementById('menu-button');
    menuButton.className = 'fa-solid fa-bars';
    menuButton.onclick = function () {
        openMenu();
    };
}