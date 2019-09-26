import { GluegunTemplateGenerateOptions } from "gluegun/build/types/toolbox/template-types";
import { MicroService } from "../model/micro-service";
import { getServiceByFinalAnswers, getStringDashed } from "./utils";

export function processAnswer(finalAnswers: any) {
    const service: MicroService = getServiceByFinalAnswers(finalAnswers);

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
            return generateExternalConfigurationService(finalAnswers)
    }
}

export function generateSimpleMicroService(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [
        {
            template: '',
            target: '',
            props: {
                
            }
        }
    ];
}


export function generateSimpleMicroServiceSharedDatabase(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [{
        template: '',
        target: '',
        props: {
            
        }
    }];
}


export function generateApiGateway(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [{
        template: '',
        target: '',
        props: {
            
        }
    }];
}


export function generateServiceDiscovery(service: MicroService): GluegunTemplateGenerateOptions[] {
    return [{
        template: '',
        target: '',
        props: {
            
        }
    }];
}


function generateExternalConfigurationService(finalAnswers: any): GluegunTemplateGenerateOptions[] {
    return [
        {
            template: `config-server/src/main/java/br/com/springcloud/myconfig/MyConfigApplication.java.ejs`,
            target: `services/${getStringDashed(finalAnswers.name)}/src/main/java/br/com/springcloud/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}Application.java`,
            props: {
              name: finalAnswers.name,
              lowerName: finalAnswers.name.toLowerCase()
            }
        },

        {
            template: `config-server/src/test/java/br/com/springcloud/myconfig/MyConfigApplicationTests.java.ejs`,
            target: `services/${getStringDashed(finalAnswers.name)}/src/test/java/br/com/springcloud/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}ApplicationTests.java`,
            props: { 
              name: finalAnswers.name,
              lowerName: finalAnswers.name.toLowerCase()
            }
        },

        {
            template: `config-server/src/main/resources/application.yml.ejs`,
            target: `services/${getStringDashed(finalAnswers.name)}/src/main/resources/application.yml`,
            props: { 
              port: finalAnswers.port,
              repository: finalAnswers.repository
            }
        },

        {
            template: `config-server/.gitignore.ejs`,
            target: `services/${getStringDashed(finalAnswers.name)}/.gitignore`,
        },

        {
            template: `config-server/pom.xml.ejs`,
            target: `services/${getStringDashed(finalAnswers.name)}/pom.xml`,
            props: {
                dashedName: getStringDashed(finalAnswers.name)
            }
        }
    ]
}