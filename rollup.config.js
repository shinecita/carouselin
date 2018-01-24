export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundles/ngxcarouselin.umd.js',
    format: 'umd',
    name: 'ng.ngxcarouselin',
    sourcemap: true,
    external: ['@angular/core', '@angular/common', '@angular/platform-browser', 'hammerjs'],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/platform-browser': 'ng.platform-browser',
        'hammerjs': 'Hammer',
    }      
  }
}