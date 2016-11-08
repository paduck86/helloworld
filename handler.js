import { handlerEnricher } from './lib/logging'

const handler = (event, context, callback) => {
    callback(null, { "statusCode": 200, "headers": {}, "body": {"Message": 'Hello World!' }})
}

module.exports.helloworld = handlerEnricher(handler)
