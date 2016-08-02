// Copyright 2015, University of Colorado Boulder

/**
 *
 * @author PhET Interactive Simulations
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var projectileMotion = require( 'PROJECTILE_MOTION/projectileMotion' );
  var ProjectileMotionModel = require( 'PROJECTILE_MOTION/common/model/ProjectileMotionModel' );
  var Property = require( 'AXON/Property' );

  /**
   * @constructor
   */
  function ProjectileMotionIntroModel() {
    var projectileMotionIntroModel = this;
    ProjectileMotionModel.call( projectileMotionIntroModel );
    
    this.selectedProjectileObjectProperty = new Property( this.projectileObjectChoices[ 0 ] );
  }

  projectileMotion.register( 'ProjectileMotionIntroModel', ProjectileMotionIntroModel );

  return inherit( ProjectileMotionModel, ProjectileMotionIntroModel );
} );

