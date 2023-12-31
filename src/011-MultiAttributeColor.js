var canvas = document.getElementById('webgl');
var gl = canvas.getContext('webgl');

var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  attribute float a_PointSize;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  void main() {
    gl_Position = a_Position;
    gl_PointSize = a_PointSize;
    v_Color = a_Color;
  }
`
var FSHADER_SOURCE = `
  precision mediump float;
  varying vec4 v_Color;
  void main() {
    gl_FragColor = v_Color;
  }
`
initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
var value = new Float32Array([
  0.0, 0.5, 10.0, 1.0, 0.0, 0.0,
  -0.5, -0.5, 15.0, 0.0, 1.0, 0.0,
  0.5, -0.5, 20.0, 0.0, 0.0, 1.0,
])
gl.bufferData(gl.ARRAY_BUFFER, value, gl.STATIC_DRAW);
var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
var FSIZE = value.BYTES_PER_ELEMENT;
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 6, 0);
gl.enableVertexAttribArray(a_Position);
var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 6, FSIZE * 2);
gl.enableVertexAttribArray(a_PointSize);
var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
gl.enableVertexAttribArray(a_Color);


gl.clearColor(0.0, 0.0, 0.0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.LINE_LOOP, 0, 3);
// gl.drawArrays(gl.TRIANGLES, 0, 3);
// gl.drawArrays(gl.POINTS, 0, 3);