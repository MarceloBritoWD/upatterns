import { GluegunToolbox, print } from 'gluegun';
import { prompt } from 'gluegun/prompt';
import { generationOptions } from '../constants';
import { processAnswer } from '../functions';

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
    
    const toGenerate = parameters.first;
    // const dashedName = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[ ]/g, '-').toLowerCase();

    if(!toGenerate) {
      error('You need to pass what to generate. Ex: \'uservice\'');
      info('Run \'upatterns -h\' to get help');
      return;
    }
    
    const result = await prompt.ask([
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


    print.debug(result)

    processAnswer(result.type);
    
  },

  
}