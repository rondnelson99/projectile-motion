// Copyright 2019-2020, University of Colorado Boulder

/**
 * IO type for DataPoint
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import validate from '../../../../axon/js/validate.js';
import Vector2IO from '../../../../dot/js/Vector2IO.js';
import NumberIO from '../../../../tandem/js/types/NumberIO.js';
import ObjectIO from '../../../../tandem/js/types/ObjectIO.js';
import projectileMotion from '../../projectileMotion.js';
import DataPoint from './DataPoint.js';

class DataPointIO extends ObjectIO {

  /**
   * @param {DataPoint} dataPoint
   * @returns {Object}
   * @override
   * @public
   */
  static toStateObject( dataPoint ) {
    validate( dataPoint, this.validator );
    return {
      time: NumberIO.toStateObject( dataPoint.time ),
      position: Vector2IO.toStateObject( dataPoint.position ),
      airDensity: NumberIO.toStateObject( dataPoint.airDensity ),
      velocity: Vector2IO.toStateObject( dataPoint.velocity ),
      acceleration: Vector2IO.toStateObject( dataPoint.acceleration ),
      dragForce: Vector2IO.toStateObject( dataPoint.dragForce ),
      forceGravity: NumberIO.toStateObject( dataPoint.forceGravity ),
      apex: dataPoint.apex,
      reachedGround: dataPoint.reachedGround
    };
  }

  /**
   * @param {DataPoint} stateObject
   * @returns {DataPoint}
   * @override
   * @public
   */
  static fromStateObject( stateObject ) {
    return new DataPoint(
      NumberIO.fromStateObject( stateObject.time ),
      Vector2IO.fromStateObject( stateObject.position ),
      NumberIO.fromStateObject( stateObject.airDensity ),
      Vector2IO.fromStateObject( stateObject.velocity ),
      Vector2IO.fromStateObject( stateObject.acceleration ),
      Vector2IO.fromStateObject( stateObject.dragForce ),
      NumberIO.fromStateObject( stateObject.forceGravity ), {
        apex: stateObject.apex,
        reachedGround: stateObject.reachedGround
      }
    );
  }
}

DataPointIO.documentation = 'A single data point on a projectile\'s trajectory, with the following data:<br><ul>' +
                            '<li>time (seconds): The time of the data point</li>' +
                            '<li>position (meters): the position of the point in model coordinates</li>' +
                            '<li>airDensity (kg/cu m): the air density when the point was collected</li>' +
                            '<li>velocity (m/s): the velocity of the projectile at the time when the point was collected</li>' +
                            '<li>acceleration (m/s^2): the acceleration of the projectile at the time when the point was collected</li>' +
                            '<li>dragForce (newtons): the acceleration of the projectile at the time when the point was collected</li>' +
                            '<li>forceGravity (newtons): the acceleration of the projectile at the time when the point was collected</li>' +
                            '<li>apex (boolean): if this data point was at the apex of a trajectory</li>' +
                            '<li>reachedGround (boolean): if this data point was collected when the projectile was on the ground</li></ul>';
DataPointIO.validator = { isValidValue: v => v instanceof phet.projectileMotion.DataPoint };
DataPointIO.typeName = 'DataPointIO';
ObjectIO.validateSubtype( DataPointIO );

projectileMotion.register( 'DataPointIO', DataPointIO );
export default DataPointIO;