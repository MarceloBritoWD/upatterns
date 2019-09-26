import { generationOptions } from "../constants";
import { GluegunTemplateGenerateOptions } from "gluegun/build/types/toolbox/template-types";
import { MicroService } from "../interfaces/micro-service";

export function processAnswer(selectedItem) {// TODO: This have to receive all the answers at terminal
    const service: MicroService = generationOptions.find(item => item.name === selectedItem.type);

    switch (service.type) {
        case 'SimpleMicroService':
            return generateSimpleMicroService(service);

        case 'SimpleMicroServiceSharedDatabase':
            return generateSimpleMicroServiceSharedDatabase(service);
            
        case 'ApiGateway':
            return generateApiGateway(service)

        case 'ServiceDiscovery':
            return generateServiceDiscovery(service)

        case 'ExternalConfigurationService':
            return generateExternalConfigurationService(service)
    }
}


function generateSimpleMicroService(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [
        {
            template: '',
            target: '',
            props: {
                
            }
        }
    ];
}


function generateSimpleMicroServiceSharedDatabase(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [{
        template: '',
        target: '',
        props: {
            
        }
    }];
}


function generateApiGateway(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [{
        template: '',
        target: '',
        props: {
            
        }
    }];
}


function generateServiceDiscovery(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [{
        template: '',
        target: '',
        props: {
            
        }
    }];
}


function generateExternalConfigurationService(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [
        {
            template: `config-server/src/main/java/br/com/springcloud/myconfig/MyConfigApplication.java.ejs`,
            target: `services/${getStringDashed(service.name)}/src/main/java/br/com/springcloud/${service.name.toLowerCase()}/${service.name}Application.java`,
            props: {
              name: service.name,
              lowerName: service.name.toLowerCase()
            }
        },

        {
            template: `config-server/src/test/java/br/com/springcloud/myconfig/MyConfigApplicationTests.java.ejs`,
            target: `services/${getStringDashed(service.name)}/src/test/java/br/com/springcloud/${service.name.toLowerCase()}/${service.name}ApplicationTests.java`,
            props: { 
              name: service.name,
              lowerName: service.name.toLowerCase()
            }
        },

        {
            template: `config-server/.gitignore.ejs`,
            target: `services/${getStringDashed(service.name)}/.gitignore`,
        },

        {
            template: `config-server/pom.xml.ejs`,
            target: `services/${getStringDashed(service.name)}/pom.xml`,
            props: {
                dahsedName: getStringDashed(service.name)
            }
        }
    ]
}

export function getStringDashed(value): string {
    return value.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[ ]/g, '-').toLowerCase(); 
}