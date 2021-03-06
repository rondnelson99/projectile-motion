// Copyright 2016-2020, University of Colorado Boulder

/**
 * Model for the measuring tape in projectile motion.
 *
 * @author Andrea Lin (PhET Interactive Simulations)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Vector2Property from '../../../../dot/js/Vector2Property.js';
import projectileMotion from '../../projectileMotion.js';

class ProjectileMotionMeasuringTape {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    // @public
    this.basePositionProperty = new Vector2Property( new Vector2( 0, 0 ), {
      tandem: tandem.createTandem( 'basePositionProperty' ),
      units: 'm',
      phetioDocumentation: 'Base (start of tape from the container) position'
    } );

    // @public -
    this.tipPositionProperty = new Vector2Property( new Vector2( 1, 0 ), {
      tandem: tandem.createTandem( 'tipPositionProperty' ),
      units: 'm',
      phetioDocumentation: 'Tip (end of measuring tape) position'
    } );

    // @public
    this.isActiveProperty = new BooleanProperty( false, {
      tandem: tandem.createTandem( 'isActiveProperty' ),
      phetioDocumentation: 'Whether the measuring tape is out in the play area (false when in the toolbox)'
    } );
  }

  /**
   * Reset these Properties
   * @public
   * @override
   */
  reset() {
    this.basePositionProperty.reset();
    this.tipPositionProperty.reset();
    this.isActiveProperty.reset();
  }
}

projectileMotion.register( 'ProjectileMotionMeasuringTape', ProjectileMotionMeasuringTape );

export default ProjectileMotionMeasuringTape;