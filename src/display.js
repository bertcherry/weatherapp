import WindowImage from './window.jpg';

function initialDisplay() {
    const contentDiv = document.getElementById('content');
    
    const windowContainer = document.createElement('div');
    windowContainer.classList.add('img-container');
    const windowImage = document.createElement('img');
    windowImage.src = WindowImage;
    windowImage.alt = 'Transparent window frame to show outside weather';
    windowContainer.appendChild(windowImage);
    contentDiv.appendChild(windowContainer);

    const thermometerDiv = document.createElement('div');
    thermometerDiv.id = 'thermometer';
    contentDiv.appendChild(thermometerDiv);
}

export { initialDisplay }