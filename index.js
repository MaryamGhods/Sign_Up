function opening_modal(){
    setTimeout(()=>{
        document.querySelector('.modal').classList.add('open')
    },500);
    document.querySelector('.right-section').classList.remove('fade-out')
    document.querySelector('.left-section').classList.remove('fade-out')
    document.querySelector('.right-section').classList.add('fade-in');
    document.querySelector('.left-section').classList.add('fade-in');
    document.querySelector('.form').classList.add('form-fade-in');
    document.querySelector('.close-btn').classList.add('close-btn-fade-in');
    document.querySelector('.title').classList.add('title-fade-in');
}

window.addEventListener('load',()=>{
    opening_modal();
});

document.querySelector('.text-area .btn').addEventListener('click', ()=>{
    document.querySelector('.load-page').classList.remove('open');
    opening_modal();
});

document.querySelector('.close-btn').addEventListener('click',()=>{
    document.querySelector('.right-section').classList.remove('fade-in')
    document.querySelector('.left-section').classList.remove('fade-in')
    document.querySelector('.form').classList.remove('form-fade-in');
    document.querySelector('.close-btn').classList.remove('close-btn-fade-in');
    document.querySelector('.title').classList.remove('title-fade-in');
    document.querySelector('.right-section').classList.add('fade-out');
    document.querySelector('.left-section').classList.add('fade-out');
    setTimeout(()=>{
        document.querySelector('.load-page').classList.add('open');
        document.querySelector('.modal').classList.remove('open');
    },500);
});

const checkbox = document.querySelector('.checkbox label');

checkbox.addEventListener('click',()=>{
    if (checkbox.innerText===''){
        checkbox.innerText='✔️'
    }
    else{
        checkbox.innerText=''
    }
});

document.querySelectorAll('.floating-label').forEach(function(selectedInput){
    selectedInput.addEventListener('focus' , ()=>{
        selectedInput.classList.add('active');
    } , true);
    selectedInput.addEventListener('focusout' , (event)=>{
        if(event.target.value == "")
            selectedInput.classList.remove('active');
    } , true);
    
    
    selectedInput.addEventListener('mouseenter' , ()=>{
        selectedInput.classList.add('hover');
    });
        
    selectedInput.addEventListener('mouseleave' , (event)=>{
        selectedInput.classList.remove('hover');
    });
});

