/*import * as faceapi from 'face-api.js';

import { canvas, faceDetectionNet, faceDetectionOptions, saveFile } from './commons';

async function run() {

  await faceDetectionNet.loadFromDisk('./weights')
  await faceapi.nets.faceLandmark68Net.loadFromDisk('./weights')
  console.log('done 1')
  const img = await canvas.loadImage('../img/cara.jpg')
  const results = await faceapi.detectAllFaces(img, faceDetectionOptions)
    .withFaceLandmarks()
  console.log('done 2')
  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.draw.drawDetections(out, results.map(res => res.detection))
  faceapi.draw.drawFaceLandmarks(out, results.map(res => res.landmarks))

  saveFile('faceLandmarkDetection.jpg', out.toBuffer('image/jpeg'))
  console.log('done, saved results to out/faceLandmarkDetection.jpg')
}

run()
*/