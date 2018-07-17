const loader = require('monaco-loader')

loader().then((monaco) => {
  const div = document.getElementById('container')

  editor = monaco.editor.create(div, {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })
})
