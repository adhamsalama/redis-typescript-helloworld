import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

async function start() {
    await client.connect();
    const username = process.argv[2] || "world";
    client.publish("msg", username);
    console.log("Sent message to Redis channel successfully.");
    await client.quit();
}

start();
