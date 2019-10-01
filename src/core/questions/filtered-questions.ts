import { GluegunQuestionType } from "../model/gluegun-question-type"
import { MicroService } from "../model/micro-service";
import { getServiceByFinalAnswers } from "../functions/utils";

export function getNewQuestions(firstAnswers: any): GluegunQuestionType[] {
    const service: MicroService = getServiceByFinalAnswers(firstAnswers);

    switch (service.type) {
      case 'SimpleMicroService':
          return getFilteredQuestionsSimpleMicroService();
  
      case 'SimpleMicroServiceSharedDatabase':
          return getFilteredQuestionsSimpleMicroServiceSharedDatabase();
          
      case 'ApiGateway':
          return getFilteredQuestionsApiGateway();
  
      case 'ServiceDiscovery':
          return getFilteredQuestionsServiceDiscovery();
  
      case 'ExternalConfigurationService':
          return getFilteredQuestionsExternalConfigurationService();
    }
}

export function getFilteredQuestionsSimpleMicroService(): GluegunQuestionType[] {
    return [
        {
            type: 'input',
            name: 'port',
            message: 'What port do you wanna for the Simple Micro Service?',
            default: '8081'
        }
    ];
};
export function getFilteredQuestionsSimpleMicroServiceSharedDatabase(): GluegunQuestionType[] {
    return [];
};
export function getFilteredQuestionsApiGateway(): GluegunQuestionType[] {
    return [
        {
            type: 'input',
            name: 'port',
            message: 'What port do you wanna for the API Gateway?',
            default: '9070'
        }
    ];
};
export function getFilteredQuestionsServiceDiscovery(): GluegunQuestionType[] {
    return [
        {
            type: 'input',
            name: 'port',
            message: 'What port do you wanna for the Service Discovery?',
            default: '8761'
        },
        {
            type: 'input',
            name: 'registerWithEureka',
            message: 'Do you wanna enable register-with-eureka at application.properties?',
            default: 'false'
        },
        {
            type: 'input',
            name: 'fetchRegistry',
            message: 'Do you wanna enable fetch-registry at application.properties?',
            default: 'false'
        }

        // TODO: Add choices to update the selecteds with @EnableEurekaClient
    ];
};
export function getFilteredQuestionsExternalConfigurationService(): GluegunQuestionType[] {
    return [
        {
            type: 'input',
            name: 'port',
            message: 'What port do you wanna for the External Configural service?',
            default: '9080'
        },
        {
            type: 'input',
            name: 'repository',
            message: 'What is your git repository url?',
            default: 'https://github.com/user/repository'
        }
    ];
};