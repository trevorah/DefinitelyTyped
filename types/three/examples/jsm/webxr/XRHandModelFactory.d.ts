import { Group, Object3D } from '../../../src/Three';

import { XRHandPrimitiveModel, XRHandPrimitiveModelOptions } from './XRHandPrimitiveModel';
import { XRHandOculusMeshModel, XRHandOculusMeshModelOptions } from './XRHandOculusMeshModel';

export type XRHandModelHandedness = 'left' | 'right';

export class XRHandModel extends Object3D {
    constructor();

    motionController: XRHandPrimitiveModel | XRHandOculusMeshModel;
}

export class XRHandModelFactory {
    constructor();
    path: string;

    setPath(path: string): XRHandModelFactory;

    createHandModel(
        controller: Group,
        profile?: 'spheres' | 'boxes' | 'oculus',
        options?: XRHandPrimitiveModelOptions | XRHandOculusMeshModelOptions,
    ): XRHandModel;
}