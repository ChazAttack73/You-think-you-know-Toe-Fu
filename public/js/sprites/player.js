(function () {

  var ANIMATIONS = {
    IDLE : {
      name : 'idle',
      frames : [0,1,2,3],
      fps : 5
    }
  };

  var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };

  ToeFu.Player = function ( game, id, name ) {
    this.game = game,
    this.id = id,
    this.name = name? name : 'Player ' + (id+1);
    this.facing; //direction the player is facing

    Phaser.Sprite.call( this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name );

    this.animations.add( ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames );
    this.animations.play( ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true );

  };

  ToeFu.Player.prototype = Object.create( Phaser.Sprite.prototype, {
    constructor : {
      value : ToeFu.Player
    }
  });

  ToeFu.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };

  ToeFu.Player.prototype.update = function () {
    this.scale.x =FACING_FACTOR[ this.facing ];
  };

})();