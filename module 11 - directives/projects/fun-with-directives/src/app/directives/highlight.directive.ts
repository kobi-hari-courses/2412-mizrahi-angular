import { computed, Directive, ElementRef, input, model, Renderer2, signal } from "@angular/core";

@Directive({
    selector: '[highlight]', 
    host: {
        '[style.background]': 'effectiveHighlight()',
        '(click)': 'changeToCyan()'

    }
})
export class HighlightDirective {
    readonly highlight = model<string | undefined>(undefined);

    readonly effectiveHighlight = computed(() => this.highlight()||'lime');

    changeToCyan() {
        this.highlight.set('cyan');
    }

    constructor() {
        setTimeout(() => {
            this.highlight.set('pink')
        }, 5000);
    }
}