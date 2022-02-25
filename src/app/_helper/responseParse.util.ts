/**
 *
 * The idea behind ResponseParser is to keep response of all entities in same data structure
 * And to attach key as id in entity objects
 *
 */

interface hasId {
    id?: string;
}

export class ResponseParser<T>{
    constructor(private response: any) { }

    public parsedResponse(): T {
        const parsed = this.response.map((item: any) => {
            const data = item.payload.val();
            const id = item.payload.key;
            return { id, ...data }
        });
        return parsed;
    }

    public getId(index: string) {
        // const response: hasId = this.parsedResponse();
        // return response[index].id
    }
}