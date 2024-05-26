
import { Hono } from 'hono'
import user from './routers/userroutes'
import { check } from './routers/check'
import blogs from './routers/blogs'
import { upgradeWebSocket } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'


const app = new Hono()

app.use(cors())
app.route("/check", check)
app.route("/user", user)
app.route("/blogs", blogs)
app.get(
  '/ws',
  upgradeWebSocket((c) => {
    return {
      onMessage(event, ws) {
        console.log(event)
        console.log(`Message from client: ${event.data}`)
        ws.send('Hello from server!')
      },
      onClose: () => {
        console.log('Connection closed')
      },
    }
  })
)
export default app
