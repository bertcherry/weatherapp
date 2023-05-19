import WindowImage from './window.png';

function initialDisplay() {
    const contentDiv = document.getElementById('content');
    
    const windowDiv = document.createElement('div');
    windowDiv.classList.add('window-frame');
    contentDiv.appendChild(windowDiv);

    const windowContainer = document.createElement('div');
    windowContainer.classList.add('img-container');
    const windowImage = document.createElement('img');
    windowImage.src = WindowImage;
    windowImage.alt = 'Transparent window frame to show outside weather';
    windowContainer.appendChild(windowImage);
    windowDiv.appendChild(windowContainer);

    const gifContainer = document.createElement('div');
    gifContainer.classList.add('img-container');
    gifContainer.id = 'gif-container';
    windowDiv.appendChild(gifContainer);

    const thermometerDiv = document.createElement('div');
    thermometerDiv.id = 'thermometer';
    contentDiv.appendChild(thermometerDiv);
}

export { initialDisplay }