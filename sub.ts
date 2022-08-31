import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

process.on("SIGINT", () => {
    client.quit();
    process.exit();
});

async function start() {
    await client.connect();

    client.subscribe("msg", (message: string) => {
        console.log("Hello " + message);
    });
}

start();
