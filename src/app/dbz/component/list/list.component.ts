import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]= [{
    name:'',
    power:0,
  }]

  @Output()
  //public onDelete: EventEmitter<number>=new EventEmitter();
  public onDelete2: EventEmitter<string>=new EventEmitter();

  //onDeleteCharacter(index:number):void{
    //this.onDelete.emit(index)
  //}

  deleteCharacterById(id:string):void{
    if(id !== undefined){
      this.onDelete2.emit(id);
    }else{
      return;
    }
  }

}
