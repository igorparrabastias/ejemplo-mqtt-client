import { mqttClient } from "@/infrastructure/lib/mqttClient";

export default class MqttService {
  constructor() {}

  async publish(channel, message) {
    message = message.toString();
    await mqttClient.publish(channel, message, { qos: 2 });
  }
}
