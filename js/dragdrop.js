const linkBlock = document.querySelector('.block__link');
const fillBlock = document.querySelectorAll('.block__fill');
const blockPopup = document.getElementById('blockPopup');
const closeBtn = document.getElementById('popupCloseBtn');
const linkBtn = document.getElementById('blockLinkBtn');

// When a block is dragged
function dragStart(el) {
    el.className += ' hold';
    setTimeout(() => {
        el.className = 'invisible';
    }, 0);    
    el.parentElement.className += ' blur'
    localStorage.setItem('project_name', el.dataset.name)
}

// When a block is dragged off (cancelled)
function dragEnd(el) {
    el.className = 'block__fill';
    el.parentElement.className = 'block__container'
}

function dragOver(e) {
    e.preventDefault(); // call drop event
}
function dragEnter(e) {
    e.preventDefault();    
    console.log(this);
    // console.log(this.dataset.name);
}
function dragLeave() {    
    this.className = 'block__link'
}
function drop(e) {

    setTimeout(() => {
        blockPopup.classList.remove('hidden');
        blockPopup.classList.add('show');
    }, 0.2)


}

for (let block of fillBlock) {
    block.addEventListener('dragstart', (e) => {
        dragStart(block);       
    })

    block.addEventListener('dragend', (e) => {
        dragEnd(block);
    })
}

// Hide a popup window
function hidePopup() {    
    blockPopup.classList.remove('show');
    blockPopup.classList.add('hidden');
}

// Load a project link
function loadProjectLink (e) {
    let PROJECT_NAME = localStorage.getItem('project_name');
    const baseUrl = `https://htmlpreview.github.io/?https://github.com/jasonsuk/frontend-dev/blob/master/mini-projects/${PROJECT_NAME}/index.html`
    e.target.href = baseUrl;
}

// EVENT LISTENER

// When a block is dragged over to the link block (in the middle)
linkBlock.addEventListener('dragover', dragOver);
linkBlock.addEventListener('dragenter', dragEnter);
linkBlock.addEventListener('dragleave', dragLeave);
linkBlock.addEventListener('drop', drop);

// When a close btn is clicked on the popup window
closeBtn.addEventListener('click', hidePopup);
linkBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    loadProjectLink(e);
})






