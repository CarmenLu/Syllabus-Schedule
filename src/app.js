// app.js
import regeneratorRuntime from './utils/third-party/runtime'    // eslint-disable-line
import { config } from './config/config'
import { constant } from './config/constant'
import { initSocket } from './utils/lib/scoket'
const Raven = require('./utils/third-party/raven')

App({
    onLaunch: async function () {
        console.log(`environment ${config.environment} release: ${config.release}`)
        if (config.environment === constant.environment && config.sentry) {
            Raven.config(config.sentry.dsn, config.sentry.options).install()
        }

        // init Socket.io
        initSocket()
    },
    globalData: {
        oauthSession: {},   // 资源服务器session
        syllabusSession: {}, // 课程表业务后台session
        socket_id: null,    // socket id
    },

    onError(msg) {
        Raven.captureException(msg, {
            level: 'error'
        })
    }
})
