import { GluegunToolbox } from 'gluegun';
import { prompt } from 'gluegun/prompt';
import { processAnswer } from '../functions/template-generation';
import { getNewQuestions } from '../questions/filtered-questions';
import { firstCommonQuestions } from '../questions/first-common-questions';

module.exports = {
  name: 'generate',
  alias: ['g'],
  description: 'Generates a new service',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template,
      print: {
        success,
        error,
        info
      },
    } = toolbox
    
    const firstParam = parameters.first;

    require('../brand/header')(); // TODO: add link for official documentation
                                                                                    
    if(!firstParam) {
      error('🎈 You need to pass what to generate. Ex: \'$ upatterns generate uservice\'');
      info('📖  Run \'$ upatterns -h\' to get help');
      return;
    }

    if(firstParam !== 'uservice') {
      error('🎈 This type of generation is not supported.');
      info('📖  Run \'$ upatterns -h\' to get help');
      return;
    }
    
    const firstQuestions = await prompt.ask(firstCommonQuestions());
    const filteredQuestionsToDo = await prompt.ask(getNewQuestions(firstQuestions));
    
    // Final generation here
    processAnswer({...firstQuestions, ...filteredQuestionsToDo}).map(async (item) => {
      await template.generate(item);
    });

    // TODO: add links to the tools used in the generation here (a function that returns it).

    success(`Generated service!`)
  }
}