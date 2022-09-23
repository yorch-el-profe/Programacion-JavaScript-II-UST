## 1. Generación de package.json
`npm init -y`

# 2. Instalación de las dependencias
`npm install --save-dev webpack webpack-cli css-loader style-loader`

# 3. Agregar script build
```
{
  ...
  "scripts": {
    "build": "webpack"
  }
  ...
}
```

# 4. Correr el builder
`npm run build`