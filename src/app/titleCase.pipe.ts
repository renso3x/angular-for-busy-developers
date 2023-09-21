// import { Pipe, PipeTransform } from '@angular/core'

// @Pipe({
//     name: 'titleCase'
// })
// export class TitleCasePipe implements PipeTransform {
//     transform(value: string) {
//         if (!value) return null
//         let words = value.split(' ')
//         let prepositions = [
//             'of',
//             'the'
//         ]
//         for (var index = 0; index <  words.length; index++) {
//             if(prepositions.includes(words[index])) {
//                 words[index] = words[index].toLowerCase()
//             } else {
//                 words[index].substring(0, 1).toUpperCase() + words[index].substring(1).toLowerCase()
//             }
//         }
//         return words.join(' ')
//     }   
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPreposition(word))
        words[i] = word.toLowerCase();
      else 
        words[i] = this.toTitleCase(word);
    }

    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase());
  }

}
