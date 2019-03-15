module.exports = {
  name: 'ilo-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ilo-admin/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
