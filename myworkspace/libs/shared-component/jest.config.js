module.exports = {
  name: 'shared-component',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/shared-component',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
