import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter"
})
export class FilterObjectPipe<T> implements PipeTransform {

    public transform(input: T[], filterBy: string, ...properties: string[]): T[] {
        const result: T[] = [];

        input.forEach((obj: T) => {
            const testedObj = (obj as any);
            const filterByLowerCase: string = filterBy.toLowerCase();

            for (let i = 0; i < properties.length; i++) {
                const property = properties[i];
                if (Object.hasOwn(testedObj, property)) {
                    if (typeof testedObj[property] === "string") {
                        if ((testedObj[property] as string).toLowerCase().indexOf(filterByLowerCase) > -1) {
                            result.push(obj);
                            break;
                        }
                    }
                }
            }
        });

        return result;
    }

}
