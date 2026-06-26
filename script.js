const canvas = document.getElementById("glcanvas");

const gl = canvas.getContext("webgl2");

if (!gl) {
    alert("WebGL2 not supported");
}