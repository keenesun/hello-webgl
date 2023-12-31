// var VSHADER_SOURCE =
// `
//   attribute vec4 a_Position;
//   void main() {
//     gl_Position = a_Position;
//     gl_PointSize = 4.0;
//   }
// `

// var FSHADER_SOURCE =
// `
//   precision mediump float;
//   uniform vec4 u_FragColor;
//   void main() {
//     gl_FragColor = u_FragColor;
//   }
// `
// var canvas = document.getElementById('webgl');
// var gl = canvas.getContext('webgl');

// initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

// var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
// var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
// canvas.onmousedown = function(ev) {
//   click(ev, gl, canvas, a_Position, u_FragColor);
// }
// var g_points = [];
// function click(ev, gl, canvas, a_Position, u_FragColor) {
//   var x = (ev.clientX - 200 - 10) / 200;
//   var y = (ev.clientY - 200 - 10) / 200 * -1;
//   g_points.push({
//     x,
//     y
//   });
//   gl.clear(gl.COLOR_BUFFER_BIT);
//   g_points.map(point => {
//     gl.vertexAttrib4f(a_Position, point.x, point.y, 0.0, 1.0);
//     if (point.x < 0 && point.y > 0) {
//       gl.uniform4f(u_FragColor, 1.0, 1.0, 1.0, 1.0);
//     } else if (point.x > 0 && point.y < 0) {
//       gl.uniform4f(u_FragColor, 1.0, 1.0, 1.0, 1.0);
//     } else {
//       gl.uniform4f(u_FragColor, 1.0, 0.0, 0.0, 1.0);
//     }
//     gl.drawArrays(gl.POINTS, 0, 1);
//   });
// }
// gl.clearColor(0.0, 0.0, 0.0, 1.0);
// gl.clear(gl.COLOR_BUFFER_BIT);

// gl.drawArrays(gl.POINTS, 0, 1);