function javaGo (){
    const addBtn = document.querySelector('.add-btns')    
    
    function clickInput() {
        // input창이 생기고
        // if문으로 아무것도 클릭안하면 input창이 안 생기고 클릭하면 생기고 
        addBtn.innerHTML = `<input type="text" placeholder="할 일을 입력해주세요."/>`
        
    }
    
    addBtn.addEventListener('click',clickInput)
    

}

javaGo();