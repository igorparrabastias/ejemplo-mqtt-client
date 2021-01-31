import { env } from "@/infrastructure/lib/env"
const mqtt = require("async-mqtt")

export let mqttClient

export function mqttClientConnect() {
  mqttClient = mqtt.connect(env.mqtt.server, {
    username: env.mqtt.username,
    password: env.mqtt.password,
    port: env.mqtt.port,
  })

  return new Promise((resolve, reject) => {
    mqttClient.on("connect", function () {
      console.log(`Conectado a mqtt en server: ${env.mqtt.server}`)
      return resolve()
    })

    mqttClient.on("error", (e) => {
      console.error(
        `Error conectando a mqtt en server: ${env.mqtt.server}`,
        e.message
      )
      return reject(e)
    })
  })
}
