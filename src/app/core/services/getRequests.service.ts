import { RequestModel } from "../models/requests.model";
import { StorageService } from "./general/storage.service";

export const GetRequestsService = (): RequestModel[] => {
    const storageService = new StorageService();
    return storageService.get("requests") ? storageService.get("requests") : [];
}