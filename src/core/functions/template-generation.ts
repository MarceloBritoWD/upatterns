import { GluegunTemplateGenerateOptions } from "gluegun/build/types/toolbox/template-types";
import { MicroService } from "../model/micro-service";
import { getServiceByFinalAnswers, getStringDashed, switchDotsBySlashs } from "./utils";
import { templates, DEFAULT_ROOT_REPOSITORY } from "../constants";

export function processAnswer(finalAnswers: any) {
    const service: MicroService = getServiceByFinalAnswers(finalAnswers);

    switch (service.type) {
        case 'SimpleMicroService':
            return generateSimpleMicroService(finalAnswers);

        case 'SimpleMicroServiceSharedDatabase':
            return generateSimpleMicroServiceSharedDatabase(finalAnswers);
            
        case 'ApiGateway':
            return generateApiGateway(finalAnswers)

        case 'ServiceDiscovery':
            return generateServiceDiscovery(finalAnswers)

        case 'ExternalConfigurationService':
            return generateExternalConfigurationService(finalAnswers)
    }
}

function generateSimpleMicroService(finalAnswers: any): GluegunTemplateGenerateOptions[] {
    return [
        {
            template: `${templates.SIMPLE_MICRO_SERVICE}/MySimpleMicroServiceApplication.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}Application.java`,
            props: {
                name: finalAnswers.name,
                lowerName: finalAnswers.name.toLowerCase(),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.SIMPLE_MICRO_SERVICE}/MySimpleMicroServiceApplicationTests.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/test/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}ApplicationTests.java`,
            props: { 
                name: finalAnswers.name,
                lowerName: finalAnswers.name.toLowerCase(),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.SIMPLE_MICRO_SERVICE}/DemoController.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/controller/DemoController.java`,
            props: {
                lowerName: finalAnswers.name.toLowerCase(),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.SIMPLE_MICRO_SERVICE}/application.yml.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/resources/application.yml`,
            props: { 
                port: finalAnswers.port,
                dashedName: getStringDashed(finalAnswers.name)
            }
        },
        {
            template: `${templates.SIMPLE_MICRO_SERVICE}/pom.xml.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/pom.xml`,
            props: {
                dashedName: getStringDashed(finalAnswers.name),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.SIMPLE_MICRO_SERVICE}/.gitignore.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/.gitignore`,
        }
    ];
}

function generateSimpleMicroServiceSharedDatabase(finalAnswers: any): GluegunTemplateGenerateOptions[] {
    return [{
        template: '',
        target: '',
        props: {
            
        }
    }];
}


function generateApiGateway(finalAnswers: any): GluegunTemplateGenerateOptions[] {
    return [
        {
            template: `${templates.API_GATEWAY}/MyZuulApplication.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}Application.java`,
            props: {
                name: finalAnswers.name,
                lowerName: finalAnswers.name.toLowerCase(),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.API_GATEWAY}/MyZuulApplicationTests.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/test/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}ApplicationTests.java`,
            props: { 
                name: finalAnswers.name,
                lowerName: finalAnswers.name.toLowerCase(),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.API_GATEWAY}/application.yml.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/resources/application.yml`,
            props: { 
                port: finalAnswers.port,
                dashedName: getStringDashed(finalAnswers.name)
            }
        },
        {
            template: `${templates.API_GATEWAY}/pom.xml.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/pom.xml`,
            props: {
                dashedName: getStringDashed(finalAnswers.name),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.API_GATEWAY}/.gitignore.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/.gitignore`,
        }
    ];
}


function generateServiceDiscovery(finalAnswers: any): GluegunTemplateGenerateOptions[] {
    return [
        {
            template: `${templates.SERVICE_DISCOVERY}/MyEurekaApplication.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}Application.java`,
            props: {
                name: finalAnswers.name,
                lowerName: finalAnswers.name.toLowerCase(),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.SERVICE_DISCOVERY}/MyEurekaApplicationTests.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/test/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}ApplicationTests.java`,
            props: { 
                name: finalAnswers.name,
                lowerName: finalAnswers.name.toLowerCase(),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.SERVICE_DISCOVERY}/application.yml.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/resources/application.yml`,
            props: { 
                port: finalAnswers.port,
                registerWithEureka: finalAnswers.registerWithEureka,
                fetchRegistry: finalAnswers.fetchRegistry
            }
        },
        {
            template: `${templates.SERVICE_DISCOVERY}/pom.xml.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/pom.xml`,
            props: {
                dashedName: getStringDashed(finalAnswers.name),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.SERVICE_DISCOVERY}/.gitignore.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/.gitignore`,
        }
    ];
}


function generateExternalConfigurationService(finalAnswers: any): GluegunTemplateGenerateOptions[] {
    return [
        {
            template: `${templates.EXTERNAL_CONFIGURATION_SERVICE}/MyConfigApplication.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}Application.java`,
            props: {
              name: finalAnswers.name,
              lowerName: finalAnswers.name.toLowerCase(),
              package: finalAnswers.package
            }
        },
        {
            template: `${templates.EXTERNAL_CONFIGURATION_SERVICE}/MyConfigApplicationTests.java.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/test/java/${switchDotsBySlashs(finalAnswers.package)}/${finalAnswers.name.toLowerCase()}/${finalAnswers.name}ApplicationTests.java`,
            props: { 
              name: finalAnswers.name,
              lowerName: finalAnswers.name.toLowerCase(),
              package: finalAnswers.package
            }
        },
        {
            template: `${templates.EXTERNAL_CONFIGURATION_SERVICE}/application.yml.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/src/main/resources/application.yml`,
            props: { 
              port: finalAnswers.port,
              repository: finalAnswers.repository
            }
        },
        {
            template: `${templates.EXTERNAL_CONFIGURATION_SERVICE}/pom.xml.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/pom.xml`,
            props: {
                dashedName: getStringDashed(finalAnswers.name),
                package: finalAnswers.package
            }
        },
        {
            template: `${templates.EXTERNAL_CONFIGURATION_SERVICE}/.gitignore.ejs`,
            target: `${DEFAULT_ROOT_REPOSITORY}/${getStringDashed(finalAnswers.name)}/.gitignore`,
        }
    ]
}