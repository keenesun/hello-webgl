// var VSHADER_SOURCE = `
//   attribute vec4 a_Position;
//   uniform mat4 u_xformMatrix;
//   void main() {
//     gl_Position = u_xformMatrix * a_Position;
//   }
// `

// var FSHADER_SOURCE = `
//   void main() {
//     gl_FragColor = vec4(1.0, 0.0, 0.0, 0.3);
//   }
// `

// var canvas = document.getElementById("webgl");
// var gl = canvas.getContext("webgl");
// initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);


// var vertices = new Float32Array([
//   0.0, 0.5,
//   -0.5, -0.5,
//   0.5, -0.5
// ]);
// var vertexBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
// gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
// gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
// gl.enableVertexAttribArray(a_Position);


// var ANGLE = 90.0;
// var radian = Math.PI * ANGLE / 180.0;
// var cosB = Math.cos(radian);
// var sinB = Math.sin(radian);
// // 这是我算出来的矩阵
// // var xformMatrix = new Float32Array([
// //   cosB, sinB, 0.0, 0.0,
// //   -sinB, cosB, 0.0, 0.0,
// //   0.0, 0.0, 1.0, 0.0,
// //   0.0, 0.0, 0.0, 1.0
// // ])
// // 但是在webgl中，矩阵是列主序存储的
// // var xformMatrix = new Float32Array([
// //   0.7, 0.0, 0.0, 0.0,
// //   0.0, 0.7, 0.0, 0.0,
// //   0.0, 0.0, 0.7, 0.0,
// //   0.0, 0.0, 0.0, 1.0
// // ])
// // var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix');
// // gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);

// var xformMatrix = new Matrix4();
// xformMatrix.setTranslate(0.5, 0.5, 0);
// xformMatrix.rotate(ANGLE, 0, 0, 1);
// var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix');
// gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix.elements);


// gl.clearColor(0.0, 0.0, 0.0, 1.0);
// gl.clear(gl.COLOR_BUFFER_BIT);
// gl.drawArrays(gl.TRIANGLES, 0, 3);