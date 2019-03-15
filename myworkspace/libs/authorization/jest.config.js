module.exports = {
  name: 'authorization',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/authorization',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
