import 'dotenv/config'

export default {
    PORT: process.env.APP_PORT ?? '8001',
    ENV: process.env.NODE_ENV ?? 'LOCAL'
};
