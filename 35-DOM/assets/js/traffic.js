const roadTraffic = document.createElement('div');
roadTraffic.id = 'road-traffic';
roadTraffic.classList.add('traffic-lights');
roadTraffic.style.backgroundColor = 'grey';
roadTraffic.style.border = '2px solid black';
roadTraffic.style.margin = '0 auto';
roadTraffic.style.display = 'flex';
roadTraffic.style.alignItems = 'center';
roadTraffic.style.justifyContent = 'center';
roadTraffic.style.width = '200px';

const lightsContainer = document.createElement('div');
lightsContainer.classList.add('lights-container');

const actingColors = ['red', 'yellow', 'green'];
const lights = [];

actingColors.forEach((color) => {
  const light = document.createElement('div');
  light.style.backgroundColor = 'grey';
  light.style.borderRadius = '50%';
  light.style.border = '2px solid black';
  light.style.width = '100px';
  light.style.aspectRatio = '1';
  light.style.display = 'flex';
  light.style.justifyContent = 'center';
  light.style.alignItems = 'center';
  light.style.margin = '10px';

  lightsContainer.append(light);
  lights.push(light);
});

roadTraffic.append(lightsContainer);
document.body.prepend(roadTraffic);

let lightIndex = 0;

function switchLight() {
  lights.forEach((light, index) => {
    light.style.backgroundColor = index === lightIndex ? actingColors[index] : 'grey';
  });
  lightIndex++;
  if (lightIndex >= actingColors.length) {
    lightIndex = 0;
  }
}

const switchBtn = document.createElement('button');
switchBtn.innerText = 'Switch Light';
switchBtn.addEventListener('click', switchLight);

document.body.append(switchBtn);







