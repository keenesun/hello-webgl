var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;
  void main() {
    gl_Position = a_Position;
    v_TexCoord = a_TexCoord;
  }
`
var FSHADER_SOURCE = `
  precision mediump float;
  uniform sampler2D u_Sampler;
  varying vec2 v_TexCoord;
  void main() {
    gl_FragColor = texture2D(u_Sampler, v_TexCoord);
  }
`
var canvas = document.getElementById('webgl');
var gl = canvas.getContext('webgl');
initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);

var verticesTexCoords = new Float32Array([
  // 顶点坐标， 纹理坐标
  -0.5, 0.5, 0.0, 1.0
])