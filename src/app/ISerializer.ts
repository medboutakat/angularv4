import { Resource } from "src/Models/Ressource";

export interface ISerializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}