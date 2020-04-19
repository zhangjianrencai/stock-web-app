import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

interface BroadcastEvent {
  key: any;
  data?: any;
}

@Injectable()
export class Broadcaster {
  private eventBus: EventEmitter<BroadcastEvent>;

  constructor() {
    this.eventBus = new EventEmitter<BroadcastEvent>();
  }

  broadcast(key: any, data?: any) {
    this.eventBus.emit({key: key, data: data});
  }

  subscrible(key: string, callback: any): void {
    this.eventBus.subscribe(event => {
      if (event && event.key == key) {
        callback(event.data);
      }
    });
  }

}
