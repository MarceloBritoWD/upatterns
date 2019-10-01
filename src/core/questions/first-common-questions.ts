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
			message: 'What is the service name? (e.g.: MyNewMicroService)',
		},
		{
			type: 'input',
			name: 'package',
			message: 'What package do you wanna generate your new service in?',
			default: 'br.com.springcloud'
		}
	];
}