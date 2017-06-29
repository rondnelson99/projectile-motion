// Copyright 2016, University of Colorado Boulder

/**
 * Constants for the entire sim, global.
 *
 * @author Andrea Lin (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var projectileMotion = require( 'PROJECTILE_MOTION/projectileMotion' );
  var Range = require( 'DOT/Range' );
  var Vector2 = require( 'DOT/Vector2' );
  var PhetColorScheme = require( 'SCENERY_PHET/PhetColorScheme' );

  var ProjectileMotionConstants = {

    // truths about the world
    GRAVITY_RANGE: new Range( 5, 20 ), // in m/s/s
    GRAVITY_ON_EARTH: 9.81,
    SPHERE_DRAG_COEFFICIENT: 0.47, // https://en.wikipedia.org/wiki/Drag_coefficient

    // screen view layout
    VIEW_ORIGIN: new Vector2( 100, 520 ),

    // cannonball defaults
    CANNONBALL_MASS: 10.88,
    CANNONBALL_DIAMETER: 0.22,
    CANNONBALL_DRAG_COEFFICIENT: 0.47,

    // productive constraints
    MAX_NUMBER_OF_PROJECTILES: 5,

    CANNON_HEIGHT_RANGE: new Range( 0, 15 ),
    CANNON_ANGLE_RANGE: new Range( -90, 90 ),
    LAUNCH_VELOCITY_RANGE: new Range( 0, 25 ),

    PROJECTILE_MASS_RANGE: new Range( 1, 10 ), // in original, highest is 1000
    PROJECTILE_DIAMETER_RANGE: new Range( 0.1, 1 ), // in original, smallest is 0.043

    // data point collection along the trajectory
    TIME_PER_DATA_POINT: 16, // milliseconds

    // teardrop to almost pancake shape
    PROJECTILE_DRAG_COEFFICIENT_RANGE: new Range( 0.04, 1 ),
    ALTITUDE_RANGE: new Range( 0, 5000 ), // meters, max is arbitrary but in upper stratosphere

    // target
    TARGET_X_DEFAULT: 15, // meters
    TARGET_WIDTH: 3, // meters
    TARGET_HEIGHT: 0.6, // meters

    // tracer
    LABEL_TEXT_OPTIONS: { font: new PhetFont( 14 ) },

    // control panels
    RIGHTSIDE_PANEL_OPTIONS: {
      align: 'center',
      controlsVerticalSpace: 10,
      minWidth: 260,
      xMargin: 10,
      xSpacing: 10,
      yMargin: 10,
      fill: 'rgb( 255, 238, 218 )',
      lineWidth: 1,
      stroke: 'black',
      textDisplayWidth: 60,
      textDisplayYMargin: 4,
      sliderLabelSpacing: 6
    },

    INITIAL_SPEED_PANEL_OPTIONS: {
      fill: 'rgb( 235, 235, 235 )',
      lineWidth: 1,
      stroke: 'black',
      xMargin: 20,
      yMargin: 5
    },

    //Light gray, used as the 'disabled' color
    LIGHT_GRAY: 'rgb( 220, 220, 220 )',

    PANEL_TITLE_OPTIONS: { font: new PhetFont( { size: 14, weight: 'bold' } ), align: 'center' },
    PANEL_LABEL_OPTIONS: { font: new PhetFont( 14 ) },
    PANEL_BOLD_LABEL_OPTIONS: { font: new PhetFont( { size: 14, weight: 'bold' } ) },

    YELLOW_BUTTON_OPTIONS: {
      font: new PhetFont( 14 ),
      baseColor: PhetColorScheme.PHET_LOGO_YELLOW,
      cornerRadius: 4,
      xMargin: 12,
      yMargin: 7
    },

    // zooming
    MIN_ZOOM: 0.5,
    MAX_ZOOM: 2,
    DEFAULT_ZOOM: 1.0,

    // normal/slow/play/pause/step
    PLAY_CONTROLS_HORIZONTAL_INSET: 10,
    PLAY_CONTROLS_TEXT_MAX_WIDTH: 80
  };

  projectileMotion.register( 'ProjectileMotionConstants', ProjectileMotionConstants );

  return ProjectileMotionConstants;

} );

