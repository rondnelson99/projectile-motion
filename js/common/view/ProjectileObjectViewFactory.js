// Copyright 2016, University of Colorado Boulder

/**
 * Functions that create nodes for the projectile objects
 *
 * @author Andrea Lin( PhET Interactive Simulations )
 */
define( function( require ) {
  'use strict';
  
  // modules
  var Circle = require( 'SCENERY/nodes/Circle' );
  var Image = require( 'SCENERY/nodes/Image' );
  var Matrix3 = require( 'DOT/Matrix3' );
  var Path = require( 'SCENERY/nodes/Path' );
  var projectileMotion = require( 'PROJECTILE_MOTION/projectileMotion' );
  var Shape = require( 'KITE/Shape' );
  var Util = require( 'DOT/Util' );

  // image
  var pumpkinImage = require( 'image!PROJECTILE_MOTION/pumpkin_1.png' );
  var landedPumpkinImage = require( 'image!PROJECTILE_MOTION/pumpkin_2.png' );
  var baseballImage = require( 'image!PROJECTILE_MOTION/baseball.png' );
  var buickImage = require( 'image!PROJECTILE_MOTION/buick_1.png' );
  var landedBuickImage = require( 'image!PROJECTILE_MOTION/buick_2.png' );
  var footballImage = require( 'image!PROJECTILE_MOTION/football.png' );
  var humanImage = require( 'image!PROJECTILE_MOTION/human_1.png' );
  var landedHumanImage = require( 'image!PROJECTILE_MOTION/human_2.png' );
  var pianoImage = require( 'image!PROJECTILE_MOTION/piano_1.png' );
  var landedPianoImage = require( 'image!PROJECTILE_MOTION/piano_2.png' );

  var ProjectileObjectViewFactory = {

    // @public @returns {Circle} a custom object view based on {number} and {number} drag coefficient
    createCustom: function( radius, dragCoefficient ) {
      // drag coefficients estimated from three sources:
      // https://en.wikipedia.org/wiki/Drag_coefficient#Drag_coefficient_cd_examples
      // https://www.grc.nasa.gov/www/k-12/airplane/shaped.html
      // http://www.aerospaceweb.org/question/aerodynamics/q0231.shtml
      assert && assert( dragCoefficient >= 0.04 && dragCoefficient <= 1, 'drag coefficient out of bounds' );
      var shape;
      var angle;
      var newRadius;
      var newCenterX;
      if ( dragCoefficient <= 0.47 ) { // teardrop (inclusive) to sphere (inclusive)
        // Algorithm from http://mathworld.wolfram.com/TeardropCurve.html
        // drag coefficient ranges from [ 0.04 , 0.47 ], and m ranges from 0 to 7
        var m = Util.linear( 0.04, 0.47, 4, 0, dragCoefficient );
        shape = new Shape();
        shape.moveTo( -radius, 0 );
        var t;
        for ( t = Math.PI / 12; t < 2 * Math.PI; t += Math.PI / 12 ) {
          var x = -Math.cos( t ) * radius;
          var y = Math.sin( t ) * Math.pow( Math.sin( 0.5 * t ), m ) * radius;
          shape.lineTo( x, y );
        }
        shape.lineTo( -radius, 0 );

        // to maintain the same cross sectional area
        var currentCrossSectionalRadius = ( shape.bounds.maxY - shape.bounds.minY ) / 2;
        var scaleFactor = radius / currentCrossSectionalRadius;
        shape = shape.transformed ( Matrix3.scaling( scaleFactor, scaleFactor ) );

        return new Path( shape, { fill: 'black' } );
      }
      else { // sphere (exclusive) to kind of hemisphere (inclusive )
        // ( 0.47 , 1 )
        shape = new Shape();
        shape.arc( 0, 0, radius, Math.PI / 2, 3 * Math.PI / 2, false );
        shape.moveTo( 0, -radius );

        angle = Util.linear( 0.47, 1.17, Math.PI / 2, 0, dragCoefficient );
        newRadius = radius / Math.sin( angle );
        newCenterX = -radius / Math.tan( angle );
        shape.arc( newCenterX, 0, newRadius, -angle, angle, false );
        return new Path( shape, { fill: 'black' } );
      }
    },

    // @public @returns {Circle} object based on the type
    createObjectView: function( type, diameter, modelViewTransform ) {
      var transformedBallSize = modelViewTransform.modelToViewDeltaX( diameter );
      switch ( type ) {
        case 'cannonball':
          return new Circle( transformedBallSize / 2, { fill: 'black' } );
        case 'pumpkin':
          return new Image( pumpkinImage, { maxHeight: transformedBallSize } );
        case 'baseball':
          return new Image( baseballImage, { maxWidth: transformedBallSize } );
        case 'buick':
          return new Image( buickImage, { maxHeight: transformedBallSize * 0.8 } );
        case 'football':
          return new Image( footballImage, { maxHeight: transformedBallSize } );
        case 'human':
          return new Image( humanImage, { maxHeight: transformedBallSize * 1.3} );
        case 'piano':
          return new Image( pianoImage, { maxWidth: transformedBallSize * 1.1 } );
        case 'golfBall':
          return new Circle( transformedBallSize / 2, { fill: 'white', stroke: 'gray' } );
        case 'tankShell':
          var tankShellShape = new Shape();
          tankShellShape.moveTo( 0, -0.4 * transformedBallSize )
            .lineTo( -1.5 * transformedBallSize, -0.4 * transformedBallSize )
            .lineTo( -1.5 * transformedBallSize, 0.4* transformedBallSize )
            .lineTo( 0, 0.4 * transformedBallSize )
            .lineTo( 0.7 * transformedBallSize, 0 )
            .close();
          return new Path( tankShellShape, { fill: 'darkgreen', stroke: 'black' } );
        default:
          throw new Error( 'type is not right' );
      }
    },

    // @public @returns {Circle} object based on the type
    createLandedObjectView: function( type, diameter, modelViewTransform ) {
      var transformedBallSize = modelViewTransform.modelToViewDeltaX( diameter );
      switch ( type ) {
        case 'cannonball':
          return new Circle( transformedBallSize / 2, { fill: 'black' } );
        case 'pumpkin':
          return new Image( landedPumpkinImage, { maxHeight: transformedBallSize } );
        case 'baseball':
          return new Image( baseballImage, { maxWidth: transformedBallSize } );
        case 'buick':
          return new Image( landedBuickImage, { maxWidth: transformedBallSize * 1.6 } ); // * 2 is empirically determined based on image
        case 'football':
          return new Image( footballImage, { maxHeight: transformedBallSize } );
        case 'human':
          return new Image( landedHumanImage, { maxWidth: transformedBallSize * 1.3 } );
        case 'piano':
          return new Image( landedPianoImage, { maxWidth: transformedBallSize * 1.3 } );
        case 'golfBall':
          return new Circle( transformedBallSize / 2, { fill: 'white', stroke: 'gray' } );
        case 'tankShell':
          var tankShellShape = new Shape();
          tankShellShape.moveTo( 0, -0.4 * transformedBallSize )
            .lineTo( -1.5 * transformedBallSize, -0.4 * transformedBallSize )
            .lineTo( -1.5 * transformedBallSize, 0.4* transformedBallSize )
            .lineTo( 0, 0.4 * transformedBallSize )
            .lineTo( 0.7 * transformedBallSize, 0 )
            .close();
          return new Path( tankShellShape, { fill: 'darkgreen', stroke: 'black' } );
        default:
          throw new Error( 'type is not right' );
      }
    }
  };

  projectileMotion.register( 'ProjectileObjectViewFactory', ProjectileObjectViewFactory );

  return ProjectileObjectViewFactory;

} );

