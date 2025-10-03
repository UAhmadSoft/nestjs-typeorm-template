import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'net';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotifcationGateway {
  @WebSocketServer()
  server: Server;

  sendMenu() {
    this.server.emit('menus', { item: 'item2' });
  }

  @SubscribeMessage('notifications')
  onEvent(
    @MessageBody() data: unknown,
    @ConnectedSocket() client: Socket,
  ): any {
    // const user = UserData.getUserData();
    // if (user) {
    //   client.emit('notifications', {
    //     statusCode: 200,
    //     message: 'Authorized',
    //   });
    // } else {
    //   client.emit('notifications', {
    //     statusCode: 401,
    //     message: 'UnAuthorized',
    //   });
    // }
    // if (user === undefined) {
    //   client.emit('notifications', {
    //     statusCode: 401,
    //     message: 'UnAuthorized',
    //   });
    // } else {
    //   const event = 'notifications';
    //   const response = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //   return from(response).pipe(map((data) => ({ event, data })));
    // }
  }
}
