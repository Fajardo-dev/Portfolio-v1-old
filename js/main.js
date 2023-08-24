function isTouchDevide(){
    return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0))
}

const isTouch = isTouchDevide();

if (!isTouch){


const cursorEl = document.querySelector('.cursorjs');
const isClickedClass = 'is-clicked';
const isHiddenClass = 'is-hidden';
const isLinkHoveredClass = 'is-link-hovered';
const hasCustomCursorClass = 'has-custom-cursor'

const addEventListeners = ()=> {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    handleLinkHoverEvents()
};

const onMouseMove = (e) => {
    cursorEl.style.setProperty('--cursor-x', e.clientX + "px");
    cursorEl.style.setProperty('--cursor-y', e.clientY + "px");
};

const onMouseDown = () =>{
    cursorEl.classList.add(isClickedClass);
};

const onMouseUp = () =>{
    cursorEl.classList.remove(isClickedClass);
};

const onMouseEnter = () =>{
    cursorEl.classList.remove(isHiddenClass);
};

const onMouseLeave = () =>{
    cursorEl.classList.add(isHiddenClass);
};

const handleLinkHoverEvents = () =>{
    document.querySelectorAll('a, button, .js-link, input[type="button"], input [type="submit"]').forEach((el) => {
        el.addEventListener("mouseover", ()=> cursorEl.classList.add(isLinkHoveredClass));
        el.addEventListener("mouseout", ()=> cursorEl.classList.remove(isLinkHoveredClass));
    })
}

addEventListeners();
document.body.classList.add(hasCustomCursorClass);

}