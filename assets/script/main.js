function loginWithGithub() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Iv23likKKgI0xO7TTawC&scope=user';
    
}

const urlParams =  new URLSearchParams(Window.location.search) ;
const error = urlParams.get('error');
if (error == 'acess_denied') {
    alert('Acesso negado');
    window.location.href = 'index.html';
}