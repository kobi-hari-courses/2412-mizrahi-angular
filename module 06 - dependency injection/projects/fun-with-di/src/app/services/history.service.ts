import { Inject, Injectable, signal } from "@angular/core";
import { AUDIT_PREFIX } from "../tokens/audit-prefix.token";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    readonly id = Math.ceil(Math.random() * 1000000);
    readonly records = signal<string[]>([]);

    constructor(@Inject(AUDIT_PREFIX) private prefix: string) {
        console.log('HistoryService created with id: ' + this.id);
    }

    audit(action: string) {
        this.records.update(v => [...v, `${this.prefix}: ${action}`]);
        console.log('History', this.records());
    }

}