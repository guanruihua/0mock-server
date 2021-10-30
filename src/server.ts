import app from './app'
import { HOST, PORT } from './config'

exports.apiServer = function (host = HOST, port = PORT, callback?: any) {
    callback && callback(app);
    app.listen(port, host, () => {
        console.log(`listening at http://${host}:${port}`);
    })
}