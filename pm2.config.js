module.exports = {
    apps: [
        {
            name: 'diamond-test',
            script: './src/app.js',
            watch: true,
            instances: 1,
            exec_mode: 'cluster',
            autorestart: true,
            env: {
                NODE_ENV: 'DEV',
                PORT: 8080
            },
            env_dev: {
                NODE_ENV: 'DEV'
            },
            env_stage: {
                NODE_ENV: 'STAGE'
            },
            env_production: {
                NODE_ENV: 'PROD'
            }
        }
    ]
};
