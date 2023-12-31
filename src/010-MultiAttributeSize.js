var canvas = document.getElementById('webgl');
var gl = canvas.getContext('webgl');

var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  attribute float a_PointSize;
  void main() {
    gl_Position = a_Position;
    gl_PointSize = a_PointSize;
  }
`
var FSHADER_SOURCE = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`
initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

// // position
// var positionBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
// var a_PositionValue = new Float32Array([
//   0.0, 0.5, -0.5, -0.5, 0.5, -0.5
// ])
// gl.bufferData(gl.ARRAY_BUFFER, a_PositionValue, gl.STATIC_DRAW);
// var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
// gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
// gl.enableVertexAttribArray(a_Position);

// // pointSize
// var pointSizeBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, pointSizeBuffer);
// var a_PointSizeValue = new Float32Array([
//   10.0, 15.0, 20.0
// ])
// gl.bufferData(gl.ARRAY_BUFFER, a_PointSizeValue, gl.STATIC_DRAW);
// var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
// gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, 0, 0);
// gl.enableVertexAttribArray(a_PointSize);

// 优化： 将顶点和大小两个缓冲区，合并成一个
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
var value = new Float32Array([
  0.0, 0.5, 10.0,
  -0.5, -0.5, 15.0,
  0.5, -0.5, 20.0
])
gl.bufferData(gl.ARRAY_BUFFER, value, gl.STATIC_DRAW);
var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
var FSIZE = value.BYTES_PER_ELEMENT;
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 3, 0);
gl.enableVertexAttribArray(a_Position);
var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 3, FSIZE * 2);
gl.enableVertexAttribArray(a_PointSize);


gl.clearColor(0.0, 0.0, 0.0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.POINTS, 0, 3);