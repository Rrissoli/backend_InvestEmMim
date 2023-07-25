module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current', // Para Node.js, você pode definir como "current"
          },
        },
      ],
    ];
  
    const plugins = [
      '@babel/plugin-transform-runtime', // Permite o suporte para recursos avançados, como async/await
      '@babel/plugin-syntax-dynamic-import', // Permite a importação dinâmica (importação assíncrona)
    ];
  
    return {
      presets,
      plugins,
    };
  };