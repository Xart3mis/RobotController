import asyncio
import websockets


async def hello(websocket, path):
    data = await websocket.recv()
    print(f"< {data}")

    message = f"Echo: {data}!"

    await websocket.send(message)
    print(f"> {message}")


start_server = websockets.serve(hello, "0.0.0.0", 8765)

(eventLoop := asyncio.get_event_loop()).run_until_complete(start_server)
eventLoop.run_forever()
