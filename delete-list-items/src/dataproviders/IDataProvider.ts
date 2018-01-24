import { IListItem } from "../common/IObjects";
import { IList, IOption } from "../common/IObjects";


export default interface IDataProvider
{
    validateSettings(): boolean;    

    readListItems(listName: any): Promise<IListItem[]>;  
    
    readLists(): Promise<IOption[]>;  
    
    deleteListItems(_items: IListItem[]): Promise<void>;
}