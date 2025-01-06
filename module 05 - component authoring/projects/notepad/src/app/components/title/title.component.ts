import { Component, computed, input, signal } from "@angular/core";
import { invertColor } from "../../../app/helpers/color-helper";

@Component({
    selector: 'app-title', 
    templateUrl: './title.component.html',
    styleUrl: './title.component.scss'
})
export class TitleComponent {
    readonly caption = input<string>('Hello');

    readonly color = input<string>('white');

    readonly invertedColor = computed(() => invertColor(this.color()));
}