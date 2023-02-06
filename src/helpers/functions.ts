export function findMostFrequentElement(arr: string[]): string[] {
    const frequencyMap: { [key: string]: number } = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (!frequencyMap[element]) {
        frequencyMap[element] = 1;
      } else {
        frequencyMap[element]++;
      }
    }
  
    let mostFrequentCount = 0;
    const mostFrequentElements: string[] = [];
    for (const element in frequencyMap) {
      if (frequencyMap[element] > mostFrequentCount) {
        mostFrequentCount = frequencyMap[element];
        mostFrequentElements.length = 0;
        mostFrequentElements.push(element);
      } else if (frequencyMap[element] === mostFrequentCount) {
        mostFrequentElements.push(element);
      }
    }
  
    return mostFrequentElements;
  }

                                //   prevArr, questionIndex, questionCharacter
  export function createMutatedArray(arr: Array<any>, index: number, value: any) {
    console.log(arr)
    console.log(index)
    console.log(value)

    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
  }