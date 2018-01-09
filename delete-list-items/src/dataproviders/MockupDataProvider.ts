import { IListItem } from "../common/IObjects";
import IDataProvider   from "./IDataProvider";




export default class MockupDataProvider implements IDataProvider {

    private _listAbsoluteUrl: string;
    
        constructor(libraryUrl: string) {
            if (libraryUrl) {
                this._listAbsoluteUrl = libraryUrl;
            }
        }
    
        public validateSettings(): boolean {
    
            if (!this._listAbsoluteUrl) {
                return false;
            }
            return true;
        }

    public readListItems(): Promise<IListItem[]> {
        debugger;
        let _items: IListItem[] = [
            {
                Id: 1,
                Title: "Item 1",
            },
            {
                Id: 1,
                Title: "Item 2",
            },
            {
                Id: 1,
                Title: "Item 3",
            },
            {
                Id: 1,
                Title: "Item 4",
            },
            {
                Id: 1,
                Title: "Item 5",
            },
        ];
        return new Promise<IListItem[]>((resolve) => {
                resolve(_items);
            });
    }   
    
    public async deleteListItems (_items: IListItem[]): Promise<void> {
                
    }
}