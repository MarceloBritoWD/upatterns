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
    return [];
};
export function getFilteredQuestionsSimpleMicroServiceSharedDatabase(): GluegunQuestionType[] {
    return [];
};
export function getFilteredQuestionsApiGateway(): GluegunQuestionType[] {
    return [];
};
export function getFilteredQuestionsServiceDiscovery(): GluegunQuestionType[] {
    return [];
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