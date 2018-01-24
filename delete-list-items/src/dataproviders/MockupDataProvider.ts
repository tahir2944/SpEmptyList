import { IListItem } from "../common/IObjects";
import IDataProvider   from "./IDataProvider";
import { IList } from "../common/IObjects";
import { IOption } from "../../lib/common/IObjects";




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
    
    public readLists(): Promise<IOption[]> {
        debugger;
        let _items: IOption[] = [
            

            {
                key: '1',
                text: "Item 1",
            },
            {
                key: '2',
                text: "Item 2",
            },
            {
                key: '3',
                text: "Item 3",
            },
            {
                key: '4',
                text: "Item 4",
            },
            {
                key: '5',
                text: "Item 5",
            },
        ];
        return new Promise<IOption[]>((resolve) => {
                resolve(_items);
            });
    }

    public async deleteListItems (_items: IListItem[]): Promise<void> {
                
    }
}