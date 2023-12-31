// var VSHADER_SOURCE =
// `
//   attribute vec4 a_Position;
//   void main() {
//     gl_Position = a_Position;
//     gl_PointSize = 100.0;
//   }
// `
// // vec4(0.0, 0.0, 0.0, 1.0)

// var FSHADER_SOURCE =
// `
//   void main() {
//     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
//   }
// `
// var canvas = document.getElementById('webgl');
// var gl = canvas.getContext('webgl');

// initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

// var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
// gl.vertexAttrib4f(a_Position, 0.0, 0.0, 0.0, 1.0);

// gl.clearColor(0.0, 0.0, 0.0, 1.0);
// gl.clear(gl.COLOR_BUFFER_BIT);

// gl.drawArrays(gl.POINTS, 0, 1);