import { env } from "@/infrastructure/lib/env"
import { mqttClientConnect } from "@/infrastructure/lib/mqttClient"
import HardwareListener from "@/interfaces/listeners/HardwareListener"

// IIFE para poder usar await
;(async () => {
  await mqttClientConnect()

  new HardwareListener().init()
})()
