import { RequestModel } from "../models/requests.model";
import { StorageService } from "./general/storage.service";

export const EditRequestService = (data: RequestModel[]): void => {

    const storageService = new StorageService();

    storageService.set("requests", data);
}