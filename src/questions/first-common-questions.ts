import { generationOptions } from "../constants";

export function firstCommonQuestions() {
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
        },
        {
          type: 'confirm',
          name: 'confirm',
          message: 'Are you sure?',
        }
    ];
}