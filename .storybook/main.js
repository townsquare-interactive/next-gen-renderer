module.exports = {
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)', '*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

    /*     addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss', 'storybook-addon-next'], */
    framework: {
        name: '@storybook/nextjs',
        options: {}
    }
    /*     typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: false,
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    }, */,

    docs: {
        autodocs: true
    }
}
