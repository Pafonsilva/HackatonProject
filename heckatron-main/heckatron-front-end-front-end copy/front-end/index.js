
function openWindow() {
    const windowWidth = 700;
    const windowHeight = 400;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    const windowFeatures = `width=${windowWidth},height=${windowHeight},left=${left},top=${top},resizable=yes`;
    
    const myWindow = window.open("how-to-play.html", 'myWindow', windowFeatures);

    myWindow.focus();
}
