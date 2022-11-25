module.exports = {
  '**/*.{j,t}s?(x)': (filenames) =>
    filenames.length > 5
      ? ['npm run lint', 'npm run format']
      : [
          `eslint --cache --ignore-path .gitignore --fix ${filenames.join(' ')}`,
          `prettier --write ${filenames.join(' ')}`,
        ],
  '*.json': ['npm run format'],
}
