import { GluegunToolbox, print } from 'gluegun';
import { prompt } from 'gluegun/prompt';
import { generationOptions } from '../constants';
import { processAnswer } from '../functions';
import { promises } from 'dns';

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

    if(!firstParam) {
      error('You need to pass what to generate. Ex: \'uservice\'');
      info('Run \'upatterns -h\' to get help'); // TODO: put a icon here
      return;
    }
    
    const result = await prompt.ask([ // TODO: Have to create a way to make it dinamic, to change by the answers of the user
      {
        type: 'list',
        name: 'type',
        message: 'What type of micro service do you want to generate?',
        choices: [
          ...generationOptions.map(i => i.name)
        ],
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure?',
      }
    ]);
  
    print.debug(result)// TODO: Remove this

    processAnswer(result).map(async (item) => {
      await template.generate(item);
    });

    success(`Generated service!`)
  }
} 