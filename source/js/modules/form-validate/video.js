function findVideo() {
  let video = document.querySelector('.about__video');

  setupVideo(video);
}

function setupVideo(video) {
  let link = video.querySelector('.about__video-link');
  let media = video.querySelector('picture');
  let button = video.querySelector('.about__video-button');
  const id = 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1';

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('about__video--enabled');
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', id);
  iframe.classList.add('about__video-media');

  return iframe;
}

export {findVideo};
