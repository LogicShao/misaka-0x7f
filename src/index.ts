import { Context, Schema } from 'koishi'

export const name = 'misaka-0x7f'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  let self_info = 'I am misaka-0x7f, a simple bot'
  ctx.command('whoru').action(({ session }) => {
    session.send(self_info)
  })

  ctx.on('message', (session) => {
    if (session.content === 'hello') {
      session.send('hello')
    } else if (session.content === 'how are you') {
      session.send('I am fine')
    }
  })
}
