import { generationOptions } from "../constants";
import { GluegunQuestionType } from "../model/gluegun-question-type";

export function firstCommonQuestions(): GluegunQuestionType[] {
    return [
        {
          type: 'list',
          name: 'type',
          message: 'What type of microservice do you want to generate?',
          choices: [
            ...generationOptions.map(i => i.name)
          ],
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is the service name? (Ex.: MyNewMicroService)',
        }
    ];
}