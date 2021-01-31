import MqttService from "@/application/singletons/MqttService"
import { mqttClient } from "@/infrastructure/lib/mqttClient"
import { topic } from "@/infrastructure/lib/support"

let response = ""

export default class HardwareListener {
  async init() {
    mqttClient.subscribe(topic, { qos: 2 }, (error) => {
      throw error
    })

    const mqttService = new MqttService()

    mqttClient.on("message", async (topic, message) => {
      try {
        // message = JSON.parse(message) // Si se espera json
        message = message.toString()

        if (message === "start") {
          console.log(`Actividad en ${topic}: Empezando match.`)
        } else {
          console.log(`Actividad en ${topic}: ${message}`)
        }

        response = response === "ping" ? "pong" : "ping"

        setTimeout(() => {
          mqttService.publish(topic, response)
        }, 1000)
      } catch (e) {
        console.error(e)
      }
    })
  }
}
