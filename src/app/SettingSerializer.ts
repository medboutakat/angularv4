import { SettingResource } from "src/Models/SettingResource";
import { ISerializer } from "./ISerializer";

export class SettingSerializer<T extends SettingResource> implements ISerializer{
    fromJson(json: any): SettingResource {
        const obj = new SettingResource();
        obj.id = json.id;
        obj.name = json.name;
        obj.remark = json.remark;
      //   pizza.cookedOn = moment(json.cookedOn, 'mm-dd-yyyy hh:mm');
    
        return obj;
    }
    
    toJson(obj: T): any {
        return {
          id: obj.id,
          name: obj.name,
          remark: obj.remark
        };
    }
 
}