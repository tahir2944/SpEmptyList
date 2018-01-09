import * as React from 'react';
import styles from './DeleteListItems.module.scss';
import { IDeleteListItemsProps } from './IDeleteListItemsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  Link, MarqueeSelection, DetailsList, Selection, Image, ImageFit,
  SelectionMode, Spinner, SpinnerSize, Fabric, ColumnActionsMode, IColumn, CheckboxVisibility,
  Callout, Panel, PanelType, IContextualMenuItem, autobind, ContextualMenu, IContextualMenuProps, DirectionalHint,
  css
} from 'office-ui-fabric-react';
import { IListItem } from '../../../common/IObjects';


export default class DeleteListItems extends React.Component<IDeleteListItemsProps,any> {
  
  
  constructor(props: IDeleteListItemsProps) {
    super(props);
    this.state = {
      allItems: [],
      columns: this._setupColumns()
    };
}

  public render(): React.ReactElement<IDeleteListItemsProps> {
   /*  return (
      <div className={ styles.deleteListItems }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ); */

    return (
      <div>

        <DetailsList
          items={ this.state.allItems }
          columns={ this.state.columns }
          setKey='set'
          selectionPreservedOnEmptyClick={ true }
          ariaLabelForSelectionColumn='Toggle selection'
          ariaLabelForSelectAllCheckbox='Toggle selection for all items'
        />
    </div>
  );
  }

 public componentDidMount() {
          debugger;
        this.props.dataProvider.readListItems().then(
          //resolve
          (items: IListItem[]) => {
            debugger;
            this.setState({
              allItems: items
                        });

          },
          //reject
          (data: any) => {
              this.setState({
              allDocuments: [],
              displayedDocuments: [],
              isLoading: false,
              isErrorOccured: true,
              errorMessage: data
            });
          }
        ).catch((ex) => {
          debugger;
          this.setState({
            allDocuments: [],
            displayedDocuments: [],
            isLoading: false,
            isErrorOccured: true,
            errorMessage: ex.errorMessage
          });

        });
      }

/**
   *  Specify the columns and their properties
   */
  private _setupColumns(): IColumn[] {
    
        const columnsSingleClient: IColumn[] =
          [{
            key: 'Id',
            name: '',
            fieldName: 'Id',
            minWidth: 20,
            maxWidth: 20,
            isResizable: true,
            data: String
          },
          {
            key: 'Title',
            name: '',
            fieldName: 'Title',
            minWidth: 20,
            maxWidth: 20,
            isResizable: true,
            data: String
          },
          ];
    
        return columnsSingleClient;
      }
}
