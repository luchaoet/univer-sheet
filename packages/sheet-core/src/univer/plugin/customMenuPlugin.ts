import { isString } from '@univerjs/engine-render';
import { CustomMenuType, CustomMenuItemType } from '../../types'
import { Injector, Inject, ICommandService, UniverInstanceType, Dependency, Plugin, LocaleService, Disposable, IAccessor } from '@univerjs/core';
import { IMenuManagerService, ComponentManager, ContextMenuPosition, IMenuButtonItem, MenuSchemaType } from '@univerjs/ui';
import jsx from './jsx'
import { Observable } from 'rxjs'

const customMenuPlugin = (data: CustomMenuType = []) => {
  return data
  .filter(i => !!i.id && (i.ribbonStartGroup || i.contextMenuGroup))
  .map((item: CustomMenuItemType) => {
    const clearId = item.id.replace(/\.|-/g, '').toLocaleUpperCase();
    const iconName = clearId + 'ICON';
    function customMenuItemFactory(accessor: IAccessor): IMenuButtonItem<string> {
      return {
        id: item.id,
        type: item.menuItemType,
        icon: iconName,
        tooltip: `${clearId}.tooltip`,
        title: `${clearId}.title`,
        disabled$: item?.disabled$?.(accessor, Observable),
        hidden$: item?.hidden$?.(accessor, UniverInstanceType.UNIVER_SHEET, Observable)
      };
    }

    class CustomMenuController extends Disposable {
      constructor(
        // @Inject(Injector) private readonly _injector: Injector,
        @ICommandService private readonly _commandService: ICommandService,
        @IMenuManagerService private readonly _menuManagerService: IMenuManagerService,
        @Inject(ComponentManager) private readonly _componentManager: ComponentManager,
      ) {
        super();
        this._initCommands();
        this._registerComponents();
        this._initMenus();
      }
      private _initCommands(): void {
        this.disposeWithMe(this._commandService.registerCommand({
          id: item.id,
          type: item.commandType,
          handler: item.handler
        }));
      }
      private _registerComponents(): void {
        this.disposeWithMe(this._componentManager.register(iconName, jsx(item.icon)));
      }
      private _initMenus(): void {
        const mergeMenu = {} as {[key: string]: MenuSchemaType};

        if(item.ribbonStartGroup) {
          mergeMenu[item.ribbonStartGroup] = {
            [item.id]: {
              order: item.order || 0,
              menuItemFactory: customMenuItemFactory,
            },
          }
        }
        if(item.contextMenuGroup) {
          const contextMenuPosition = item.contextMenuPosition || ContextMenuPosition.MAIN_AREA;
          mergeMenu[contextMenuPosition] = {
            [item.contextMenuGroup]: {
              [item.id]: {
                order: item.order || 0,
                menuItemFactory: customMenuItemFactory,
              },
            },
          }
        }
        this._menuManagerService.mergeMenu(mergeMenu)
      }
    }
    
    class UniverSheetsCustomMenuPlugin extends Plugin {
      static override type = UniverInstanceType.UNIVER_SHEET;
      static override pluginName = item.id;
     
      constructor(
        @Inject(Injector) protected readonly _injector: Injector,
        @Inject(LocaleService) private readonly _localeService: LocaleService
      ) {
        super();
        this._localeService.load({
          zhCN: {
            [clearId]: {
              title: isString(item.title) ? item.title : item.title?.zhCN,
              tooltip: isString(item.tooltip) ? item.tooltip : item.tooltip?.zhCN,
            }
          },
          enUS: {
            [clearId]: {
              title: isString(item.title) ? item.title : item.title?.enUS,
              tooltip: isString(item.tooltip) ? item.tooltip : item.tooltip?.enUS,
            }
          }
        });
      }
     
      override onStarting(): void {
        const dependencies: Dependency[] = [
          [CustomMenuController],
        ];
        dependencies.forEach((d) => this._injector.add(d));
    
        this._injector.get(CustomMenuController)
      }
    }
    return UniverSheetsCustomMenuPlugin
  })
}

export default customMenuPlugin