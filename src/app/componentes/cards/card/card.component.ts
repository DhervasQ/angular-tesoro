import { Component,Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public id!: any;
  @Input() public tesoro!: any;
  @Input() public seleccionada!: any;
  @Output() public emitMessage = new EventEmitter<any>();
  clickSelect(id: number) {
      this.emitMessage.emit({id});
  }
}
