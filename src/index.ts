import dotenv from 'dotenv'
import { telegramClient } from './core/chat-client/telegram-chat-client'
import log from './core/util/logging'
import { convoManagerConstructor } from './core/convo-engine/convo-manager'
import storytellerContentConfigurations from './storyteller-config'
import express from 'express'

dotenv.config()
const apiKey = process.env.BOT_TOKEN
const app = express()

// handler for app engine
app.get('/_ah/warmup', (req, res) => {
    // Handle warmup logic. Initiate db connection, etc.
    main()
})

app.listen(8080)

function main() {
    if (apiKey === undefined) {
        const missingApiKeyErrorMessage =
            '.env file is either not set up or does not contain BOT_TOKEN field'
        log.fatal(missingApiKeyErrorMessage)
        throw new Error(missingApiKeyErrorMessage)
    }

    const client = telegramClient(apiKey)
    log.debug(`Initialized telegram client, attempting to run modules`)

    client.runModule(storytellerContentConfigurations, convoManagerConstructor)
}

export default main()
