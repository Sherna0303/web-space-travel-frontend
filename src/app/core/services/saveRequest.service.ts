import { RequestModel } from "../models/requests.model";
import { StorageService } from "./general/storage.service";

export const saveRequestService = (data: RequestModel): Boolean => {

    const storageService = new StorageService();

    const requests: RequestModel[] = storageService.get("requests") ? storageService.get("requests") : [];

    let count = requests.length

    requests.push(data);
    storageService.set("requests", requests);

    return count > requests.length
}