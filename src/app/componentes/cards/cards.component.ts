import { Component,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() public filas!: any;
  @Input() public tesoro!: any;
  @Input() public seleccionada!: any;
  @Output() public emitMessage = new EventEmitter<any>();
  clickSelect(id: any) {
      this.emitMessage.emit({id});
  }
  public setMessage(message: any): void {
    this.emitMessage.emit({message});
  }
}
