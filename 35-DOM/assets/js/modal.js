const openBtn = document.createElement('button');
openBtn.id = 'open';
openBtn.innerText = 'Open';

const modalWrap = document.createElement('div');
modalWrap.id = 'modal-wrap';
modalWrap.className = 'modal-wrap';

const modalItself = document.createElement('div');
modalItself.className = 'modal-itself';
const modalTitle = document.createElement('h1');
modalTitle.className = 'modal-title';
modalTitle.innerText = 'Modal window'
const p = document.createElement('p');
p.innerText = 'Close me first to interact with the rest of the content'

const closeBtnWrap = document.createElement('div');
closeBtnWrap.className = 'modal-close';
const closeBtn = document.createElement('button');
closeBtn.id = 'close';
closeBtn.innerText = 'Close';

modalItself.append(modalTitle);
modalItself.append(p);
closeBtnWrap.append(closeBtn);
modalItself.append(closeBtnWrap);
modalWrap.append(modalItself);

document.body.append(openBtn);
document.body.append(modalWrap);

modalWrap.style.display = 'none';

function openModal() {
  modalWrap.style.display = 'block';
}

function closeModal() {
  modalWrap.style.display = 'none';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


//this function works to close the modal even if style display block/none  isnot used
//and without eventListeners:
// closeBtn.onclick = function(){
//   closeBtn.closest('.modal-wrap').remove();
// }

