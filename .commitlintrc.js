/* eslint-disable sort-keys-fix/sort-keys-fix */
async function getConfig() {
  const {
    default: {
      utils: { getProjects },
    },
  } = await import('@commitlint/config-nx-scopes');

  return {
    extends: [
      '@commitlint/config-conventional',
      '@commitlint/config-nx-scopes',
    ],
    rules: {
      // @see: https://commitlint.js.org/#/reference-rules
      'scope-enum': async (ctx) => [
        2,
        'always',
        [
          { value: 'deps', name: 'deps:         Dependencies processes' },
          ...(await getProjects(ctx, ({ tags }) => {
            if (!tags) return [];

            return !tags.includes('stage:end-of-life');
          })),
          { value: 'version', name: 'version:       The versioning process' },
          { value: 'release', name: 'release:       The release process' },
          { value: 'deploy', name: 'deploy:       Deployment commit' },
        ],
      ],
    },
    prompt: {
      alias: { fd: 'docs: fix typos' },
      messages: {
        type: "Select the type of change that you're committing:",
        scope: 'Denote the SCOPE of this change (optional):',
        customScope: 'Denote the SCOPE of this change:',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        breaking:
          'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
        footerPrefixesSelect:
          'Select the ISSUES type of changeList by this change (optional):',
        customFooterPrefix: 'Input ISSUES prefix:',
        footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
        generatingByAI: 'Generating your AI commit subject...',
        generatedSelectByAI: 'Select suitable subject by AI generated:',
        confirmCommit:
          'Are you sure you want to proceed with the commit above?',
      },
      types: [
        {
          value: 'feat',
          name: 'feat:     ✨  A new feature',
          emoji: ':sparkles:',
        },
        { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: ':bug:' },
        {
          value: 'refactor',
          name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature',
          emoji: ':recycle:',
        },
        {
          value: 'build',
          name: 'build:    📦️   Changes that affect the build system or external dependencies',
          emoji: ':package:',
        },
        {
          value: 'chore',
          name: "chore:    🔨  Other changes that don't modify src or test files",
          emoji: ':hammer:',
        },
        {
          value: 'docs',
          name: 'docs:     📝  Documentation only changes',
          emoji: ':memo:',
        },
        {
          value: 'style',
          name: 'style:    💄  Markup, white-space, formatting, missing semi-colons...',
          emoji: ':lipstick:',
        },
        {
          value: 'perf',
          name: 'perf:     ⚡️  A code change that improves performance',
          emoji: ':zap:',
        },
        {
          value: 'test',
          name: 'test:     ✅  Adding missing tests or correcting existing tests',
          emoji: ':white_check_mark:',
        },
        {
          value: 'ci',
          name: 'ci:       🎡  Changes to our CI configuration files and scripts',
          emoji: ':ferris_wheel:',
        },
        {
          value: 'revert',
          name: 'revert:   ⏪️  Reverts a previous commit',
          emoji: ':rewind:',
        },
      ],
      useEmoji: true,
      emojiAlign: 'center',
      useAI: false,
      aiNumber: 3,
      themeColorCode: '',
      allowCustomScopes: true,
      allowEmptyScopes: true,
      customScopesAlign: 'bottom',
      customScopesAlias: 'custom',
      emptyScopesAlias: 'empty',
      upperCaseSubject: false,
      markBreakingChangeMode: false,
      allowBreakingChanges: ['feat', 'fix'],
      breaklineNumber: 100,
      breaklineChar: '|',
      skipQuestions: [],
      issuePrefixes: [
        { value: 'closed', name: 'closed:   ISSUES has been processed' },
      ],
      customIssuePrefixAlign: 'top',
      emptyIssuePrefixAlias: 'skip',
      customIssuePrefixAlias: 'custom',
      allowCustomIssuePrefix: true,
      allowEmptyIssuePrefix: true,
      confirmColorize: true,
      minSubjectLength: 0,
      scopeOverrides: undefined,
      defaultBody: '',
      defaultIssues: '',
      defaultScope: '',
      defaultSubject: '',
      aiQuestionCB: ({ maxSubjectLength, diff }) =>
        `Write an insightful and concise Git commit message in the present tense for the following Git diff code, without any prefixes, and no longer than ${maxSubjectLength} characters.: \`\`\`diff\n${diff}\n\`\`\``,
    },
  };
}

/** @type {import('cz-git').UserConfig} */
module.exports = getConfig();
