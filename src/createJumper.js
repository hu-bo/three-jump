import { ObjectLoader } from 'three';
import jumperModel from 'ROOT/model/jumper';
let jumper = null;

/**
 * @return {PromiseLike}
 */
const createJumper = function () {
    if (jumper !== null) {
        return jumper;
    }
    jumper = ObjectLoader.prototype.parse(jumperModel);
    jumper.castShadow = true;
    return jumper
}
export default createJumper;
