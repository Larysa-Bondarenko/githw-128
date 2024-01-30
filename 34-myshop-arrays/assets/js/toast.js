const toast = {
    timeoutID: null,
    styles: {
        position:'fixed',
        left: '20px',
        top: '20px',
        'border-radius': '10px',
        padding: '15px',
        color: '#fff',
        'z-index': 1  
    },
    success: function(text){
        this.show(text, 'success')
    },
    error: function(text){
        this.show(text, 'error')
    },
    warning: function(text){
        this.show(text, 'warning')
    },
    info: function(text){
        this.show(text, 'info')
    },
    show: function(text, type=''){
        const myToast = document.getElementById('my-toast')
        if(myToast){
            clearTimeout(this.timeoutID);
            myToast.remove();
        }
        let style = '';
        Object.entries(this.styles).forEach(([key, value])=>{
            style += `${key}: ${value};`
        })
        switch(type){
            case 'success':
                style += 'background-color: #198754;'
                break;
             case 'error':
                style += 'background-color: #dc3545;'
                break;
            case 'warning':
                style += 'background-color: #fd7e14;'
                break;
            case 'info':
                style += 'background-color: #0dcaf0;'
                break;
        }
        const html = `<div id="my-toast" style="${style}">
        <p class="mb-0">${text}</p>
            </div>`;
        document.body.insertAdjacentHTML('afterbegin', html);
        this.hide(3000);
    },
    hide: function(timeout){
        this.timeoutID = setTimeout(function(){
            const myToast = document.getElementById('my-toast')
        myToast && myToast.remove();
        }, timeout);
    }    
}