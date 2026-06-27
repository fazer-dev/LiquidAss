uniform sampler2D sceneTexture;

vec4 color = texture(sceneTexture, uv);

gl_FragColor = color;