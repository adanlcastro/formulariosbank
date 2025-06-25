const botaoIniciarcamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector ('[data-camera]');
const video = document.querySelector ('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
let imagemURL = "";


botaoIniciarcamera.addEventListener("click", async function () {
    try {
        const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

        botaoIniciarcamera.style.display = "none";
        campoCamera.style.display = "block";

        video.srcObject = iniciarVideo;
    } catch (erro) {
        console.error('Erro ao acessar a câmera:', erro);
        alert('Não foi possível acessar a câmera. Verifique as permissões.');
    }
});

botaoTirarFoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL ("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})