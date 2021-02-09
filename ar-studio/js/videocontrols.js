AFRAME.registerComponent('videoplayer', {
  
      init: function () {
        
        let videosource = document.querySelector('#videoclip');

        let videoplay = () => {
        videosource.play();        
        }
        
        this.el.addEventListener('click', videoplay);

      }});
AFRAME.registerComponent('videopause', {
  
      init: function () {
        
        let videosource = document.querySelector('#videoclip');

        let videopause = () => {
        videosource.pause();        
        }
        
        this.el.addEventListener('click', videopause);

      }});