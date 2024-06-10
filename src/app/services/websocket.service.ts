import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService {
    private socket!: WebSocket;
    private messageSubject: Subject<any> = new Subject<any>();

    constructor() { }

    public connect() {
        this.socket = new WebSocket('wss://chatup-backend-i6fa.onrender.com/api/ws');

        this.socket.onopen = (event) => {
            console.log('Connected to WebSocket server.');
        };

        this.socket.onmessage = (event) => {
            console.log('Message from server:', event.data);
            const message = JSON.parse(event.data);
            this.messageSubject.next(message);
        };

        this.socket.onclose = (event) => {
            console.log('Disconnected from WebSocket server.');
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    public sendMessage(message: any) {
        if (this.socket.readyState === WebSocket.OPEN) {
            console.log('Sending message:', message);
            this.socket.send(JSON.stringify(message));
        } else {
            console.error('WebSocket is not open. Ready state:', this.socket.readyState);
        }
    }

    public closeSocket() {
        if (this.socket) {
            this.socket.close();
        }
    }

    public onMessageReceived(): Observable<any> {
        return this.messageSubject.asObservable();
    }
}
