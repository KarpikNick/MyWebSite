
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ukrainian = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯЬ';
const digits = '0123456789';
const symbols = '!@#$%^&*()_-+={}[]:;"\'<>,.?/~`|\\';

const alphabet = ukrainian + digits + symbols;

const fontSize = 12;
const columns = canvas.width / fontSize;
context.font = '${fontSize}px ORC';
const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0,0,0,0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));

        // Змінюємо фарбу тексту в залежності від положення rainDrops[i]
        const blue = 255 + (rainDrops[i] / (canvas.height / 2)) * 255;
        const yellow = 255 + (rainDrops[i] / (canvas.height / 2)) * 255;
        const color = `rgba(0, ${blue}, 255, 1.0)`;

        if (rainDrops[i] * fontSize > canvas.height / 2) {
            context.fillStyle = `rgb(255, ${yellow}, 0)`;
        } else {
            context.fillStyle = color;
        }

        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);



function menuEffect() {
    menuLinksWrappers.forEach(menuLinksWrapper => {
        const menuLinks = menuLinksWrapper.querySelectorAll('a');
        const effectSpeed = menuLinksWrapper.dataset.lineEffect ? menuLinksWrapper.dataset.lineEffect : 200;
        menuLinks.length ? menuEffectItem(menuLinks, effectSpeed) : null;
    });

    function menuEffectItem(menuLinks, effectSpeed) {
        const effectTransition = `transition: transform ${effectSpeed}ms ease;`;
        const effectHover = 'transform: translate3d(0px, 0%, 0px);';
        const effectTop = 'transform: translate3d(0px, -100%, 0px);';
        const effectBottom = 'transform: translate3d(0px, 100%, 0px);';

        menuLinks.forEach(menuLink => {
            menuLink.insertAdjacentHTML('beforeend', `
                <span style="transform: translate3d(0px, 100%, 0px);" class="hover">
                    <span style="transform: translate3d(0px, -100%, 0px);" class="hover_text">${menuLink.textContent}</span>
                </span>
            `);
            menuLink.onmouseenter = menuLink.onmouseleave = menuLinkActions;
        });

        function menuLinkActions(e) {
            const menuLink = e.target;
            const menuLinkItem = menuLink.querySelector('.hover');
            const menuLinkText = menuLink.querySelector('.hover_text');
            const menuLinkHeight = menuLink.offsetHeight / 2;
            const menuLinkPos = e.pageY - (menuLink.getBoundingClientRect().top + scrollY);
            if (e.type === 'mouseenter') {
                menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectBottom : effectTop;
                menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectTop : effectBottom;
                setTimeout(() => {
                    menuLinkItem.style.cssText = effectHover + effectTransition;
                    menuLinkText.style.cssText = effectHover + effectTransition;
                }, 5);
            }
            if (e.type === 'mouseleave') {
                menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectBottom + effectTransition : effectTop + effectTransition;
                menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectTop + effectTransition : effectBottom + effectTransition;
            }
        }
    }
}
const menuLinksWrappers = document.querySelectorAll('[data-line-effect]');
menuLinksWrappers.length ? menuEffect() : null;


function showAboutDeveloper() {
    var aboutDeveloper = document.getElementById('about_developer');
    aboutDeveloper.style.visibility = 'visible';
}

function toggleAboutDeveloper() {
    var aboutDeveloper = document.getElementById('about_developer');
    aboutDeveloper.style.visibility = aboutDeveloper.style.visibility === 'visible' ? 'hidden' : 'visible';
}

function showCV() {
    var cv = document.getElementById('cv');
    cv.style.visibility = 'visible';
}
function togglecv() {
    var cv = document.getElementById('cv');
    cv.style.visibility = cv.style.visibility === 'visible' ? 'hidden' : 'visible';
}


function showProj() {
    var proj = document.getElementById('proj');
    proj.style.visibility = 'visible';
}
function toggleproj() {
    var proj = document.getElementById('proj');
    proj.style.visibility = proj.style.visibility === 'visible' ? 'hidden' : 'visible';
}