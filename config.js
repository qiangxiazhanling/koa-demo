const os = require('os')

const config = {
  env: 'development',
  webServer: {
    port: 5000,
    numChildProcesses: 1
  },
  storage: {
    dialect: 'postgres',
    user: 'kill8268',
    password: '',
    host: '192.168.1.246',
    database: 'hengda',
    pool: {
      min: os.cpus().length,
      max: os.cpus().length * 2
    },
    logging: false
  }
} 

module.exports = config