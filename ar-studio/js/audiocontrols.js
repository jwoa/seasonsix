// Music Player 1
AFRAME.registerComponent('songplayer', {
  
      init: function () {
        
        let audiosource = document.querySelector('#musicpanel1');

        let musicplay = () => {
        audiosource.components.sound.playSound()
        }
        
        this.el.addEventListener('click', musicplay);

      }});
    
AFRAME.registerComponent('songstopper', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel1');

        let musicstop = () => {
        audiosource.components.sound.stopSound()
        }
        
        this.el.addEventListener('click', musicstop);
        
}});

AFRAME.registerComponent('songpause', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel1');

        let musicpause = () => {
        audiosource.components.sound.pauseSound()
        }
        
        this.el.addEventListener('click', musicpause);
        
}});
// Music Player 2
AFRAME.registerComponent('songplayer2', {
  
      init: function () {
        
        let audiosource = document.querySelector('#musicpanel2');

        let musicplay = () => {
        audiosource.components.sound.playSound()
        }
        
        this.el.addEventListener('click', musicplay);

      }});
    
AFRAME.registerComponent('songstopper2', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel2');

        let musicstop = () => {
        audiosource.components.sound.stopSound()
        }
        
        this.el.addEventListener('click', musicstop);
        
}});

AFRAME.registerComponent('songpause2', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel2');

        let musicpause = () => {
        audiosource.components.sound.pauseSound()
        }
        
        this.el.addEventListener('click', musicpause);
        
}});
// Music Player 3
AFRAME.registerComponent('songplayer3', {
  
      init: function () {
        
        let audiosource = document.querySelector('#musicpanel3');

        let musicplay = () => {
        audiosource.components.sound.playSound()
        }
        
        this.el.addEventListener('click', musicplay);

      }});
    
AFRAME.registerComponent('songstopper3', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel3');

        let musicstop = () => {
        audiosource.components.sound.stopSound()
        }
        
        this.el.addEventListener('click', musicstop);
        
}});

AFRAME.registerComponent('songpause3', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel3');

        let musicpause = () => {
        audiosource.components.sound.pauseSound()
        }
        
        this.el.addEventListener('click', musicpause);
        
}});
// Music Player 4
AFRAME.registerComponent('songplayer4', {
  
      init: function () {
        
        let audiosource = document.querySelector('#musicpanel4');

        let musicplay = () => {
        audiosource.components.sound.playSound()
        }
        
        this.el.addEventListener('click', musicplay);

      }});
    
AFRAME.registerComponent('songstopper4', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel4');

        let musicstop = () => {
        audiosource.components.sound.stopSound()
        }
        
        this.el.addEventListener('click', musicstop);
        
}});

AFRAME.registerComponent('songpause4', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel4');

        let musicpause = () => {
        audiosource.components.sound.pauseSound()
        }
        
        this.el.addEventListener('click', musicpause);
        
}});