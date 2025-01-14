import { RequestModel } from "../models/requests.model";
import { StorageService } from "./general/storage.service";

export const SaveRequestService = (data: RequestModel): Boolean => {

    const storageService = new StorageService();

    const requests: RequestModel[] = storageService.get("requests") ? storageService.get("requests") : [];

    let count = requests.length

    console.log(count)

    requests.push(data);
    storageService.set("requests", requests);

    console.log(requests.length)

    return requests.length > count
}