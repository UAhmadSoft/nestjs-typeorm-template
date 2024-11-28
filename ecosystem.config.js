// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'liberty-test',
    script: 'dist/src/main.js',
    env_test: {
      NODE_ENV: 'test',
      PORT: 6012
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 6011
    }
  }]
}