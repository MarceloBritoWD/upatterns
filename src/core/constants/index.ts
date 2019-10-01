import { MicroService } from "../model/micro-service";

export const generationOptions: MicroService[] = [
    {
        name: 'Simple Micro Service (Customer, Employee)',
        type: 'SimpleMicroService'
    },
    {
        name: 'Simple Micro Service with shared database',
        type: 'SimpleMicroServiceSharedDatabase'
    },
    {
        name: 'API Gateway Service (With Zuul Proxy)',
        type: 'ApiGateway'
    },
    {
        name: 'Service Discovery',
        type: 'ServiceDiscovery'
    },
    {
        name: 'External Configuration Service',
        type: 'ExternalConfigurationService'
    }
];

export const DEFAULT_ROOT_REPOSITORY = 'services';

export namespace templates {
    export const SIMPLE_MICRO_SERVICE = 'simple-micro-service';
    export const API_GATEWAY = 'api-gateway';
    export const SERVICE_DISCOVERY = 'service-discovery';
    export const EXTERNAL_CONFIGURATION_SERVICE = 'external-configuration-service';
}
