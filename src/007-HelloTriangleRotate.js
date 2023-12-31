// var VSHADER_SOURCE = `
//   attribute vec4 a_Position;
//   uniform float u_cosB, u_sinB;
//   void main() {
//     gl_Position.x = a_Position.x * u_cosB - a_Position.y * u_sinB;
//     gl_Position.y = a_Position.x * u_sinB + a_Position.y * u_cosB;
//     gl_Position.z = a_Position.z;
//     gl_Position.w = 1.0;
//   }
// `

// var FSHADER_SOURCE = `
//   void main() {
//     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
//   }
// `

// var canvas = document.getElementById("webgl");
// var gl = canvas.getContext("webgl");

// initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

// var n = initVertextBuffers(gl);

// var radian = Math.PI * 90.0 / 180.0;
// var cosB = Math.cos(radian);
// var sinB = Math.sin(radian);
// var u_cosB = gl.getUniformLocation(gl.program, 'u_cosB');
// var u_sinB = gl.getUniformLocation(gl.program, 'u_sinB');
// gl.uniform1f(u_cosB, cosB);
// gl.uniform1f(u_sinB, sinB);

// gl.clearColor(0.0, 0.0, 0.0, 1.0);
// gl.clear(gl.COLOR_BUFFER_BIT);

// gl.drawArrays(gl.TRIANGLES, 0, n);

// function initVertextBuffers(gl) {
//   var vertices = new Float32Array([
//     0.0, 0.5,
//     -0.5, -0.5,
//     0.5, -0.5
//   ]);
//   var vertexBuffer = gl.createBuffer();
//   gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
//   gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

//   var a_Position = gl.getAttribLocation(gl.program, "a_Position");
//   gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
//   gl.enableVertexAttribArray(a_Position);

//   return 3
// }