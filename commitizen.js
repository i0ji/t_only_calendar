'use strict';

module.exports = {
  types: [
    {
      value: 'build',
      name: 'BUILD',
    },
    { value: 'ci', name: 'CI/CD/SCRIPTS' },
    { value: 'docs', name: 'DOCUMENTS' },
    { value: 'feat', name: 'FEATURES' },
    { value: 'fix', name: 'FIX BUGS/ISSUES' },
    { value: 'git', name: 'GIT TASKS' },
    {
      value: 'chore',
      name: 'CHORE',
    },
    {
      value: 'refactor',
      name: 'REFACTOR',
    },
    { value: 'revert', name: 'REVERT' },
    {
      value: 'style',
      name: 'STYLE',
    },
    { value: 'test', name: 'TEST' },
  ],

  scopes: [
    { name: 'COMPONENTS' },
    { name: 'LOGIC' },
    { name: 'INTERFACE/APPEARANCE' },
    { name: 'SERVICES' },
  ],

  messages: {
    type: 'Changes',
    scope: '\nScope:',
    customScope: 'Specific scope',
    subject: 'Short description:\n',
    body: 'Full description. Use "|" for new string:\n',
    breaking: 'Breaking changes:\n',
    footer: 'Meta:\n',
    confirmCommit: 'Is it correct:',
  },

  allowCustomScopes: true,

  allowBreakingChanges: false,

  footerPrefix: 'Meta:',

  subjectLimit: 72,
};
