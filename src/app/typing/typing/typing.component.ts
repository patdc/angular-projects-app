import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
})
export class TypingComponent {
  randomText: string = lorem.sentence();
  enteredText: string = '';

  randomTextPhrases = this.randomText.split(' ');
  randomTextPhrasesLength = this.randomTextPhrases.length;
  enteredTextPhrases = this.enteredText.split(' ');
  charCount: number = this.randomText.length;

  solved: boolean = false;

  onInput(value: string) {
    value === this.randomText ? (this.solved = true) : (this.solved = false);
    this.enteredTextPhrases = value.split(' ');

    this.enteredText = value;
    this.randomTextPhrases.map((word) => {
      for (let i = 0; i < this.enteredTextPhrases.length; i++) {
        const element = this.enteredTextPhrases[i];
      }
    });
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return enteredLetter === randomLetter ? 'correct' : 'incorrect';
  }

}
