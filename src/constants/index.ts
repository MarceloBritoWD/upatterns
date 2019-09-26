import { MicroService } from "../interfaces/micro-service";

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

