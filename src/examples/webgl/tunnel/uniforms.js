import * as THREE from 'three';
import base from '../uniforms';
import _ from 'lodash';

const uniforms = {
  ...base,
  iChannel0:  { type: 't', value: new THREE.TextureLoader().load(`${process.env.PUBLIC_URL}/webgl/one-tweet-tunnel/1.jpg`) },
  iChannel1:  { type: 't', value: new THREE.TextureLoader().load(`${process.env.PUBLIC_URL}/webgl/2d-tunnel/2.jpg`) },
}

uniforms.iChannel0.value.wrapS = uniforms.iChannel0.value.wrapT = THREE.RepeatWrapping;
uniforms.iChannel1.value.wrapS = uniforms.iChannel1.value.wrapT = THREE.RepeatWrapping;

export default uniforms;