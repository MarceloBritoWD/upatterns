import { generationOptions } from "../constants";
import { MicroService } from "../model/micro-service";

export function getStringDashed(value: string): string {
    return value.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[ ]/g, '-').toLowerCase(); 
}

export function getServiceByFinalAnswers(param: any): MicroService {
    return generationOptions.find(item => item.name === param.type);
}

export function switchDotsBySlashs(value: string): string {
    return value.replace(/[.]/g, '/')
}