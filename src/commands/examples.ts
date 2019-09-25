import { GluegunToolbox, print } from 'gluegun';
import { prompt } from 'gluegun/prompt';

module.exports = {
  name: 'generate',
  alias: ['g'],
  description: 'Generates a new service',
  run: async (toolbox: GluegunToolbox) => {
    const {
      // parameters,
    //   template,
      print: {
        // success,
        // error
      },
    } = toolbox
    
    // const type = parameters.first;
    // const name = parameters.second;
    // const dashedName = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[ ]/g, '-').toLowerCase();
  
    const result = await prompt.ask([
      {
        type: 'list',
        name: 'exlist',
        message: 'What shoes are you wearing?',
        choices: ['Clown', 'Other'],
      },
      {
        type: 'confirm',
        name: 'exconfirm',
        message: 'Are you sure?',
      },
      {
        type: 'expand',
        name: 'exexpand',
        message: 'What action?',
        choices: [
          {
            key: 'y',
            name: 'Overwrite',
            value: 'overwrite',
          },
          {
            key: 'a',
            name: 'Overwrite this one and all next',
            value: 'overwrite_all',
          },
        ],
      },
      {
        type: 'checkbox',
        name: 'excheckbox',
        message: 'What are your favorite colors?',
        choices: ['red', 'blue', 'yellow'],
      },
      {
        type: 'rawlist',
        name: 'exselect',
        message: 'What is your favorite team?',
        choices: ['Jazz', 'Trail Blazers', 'Lakers', 'Warriors'],
      },
      {
        type: 'checkbox',
        name: 'exmultiselect',
        message: 'What are your favorite months?',
        choices: ['January', 'July', 'September', 'November'],
      },
      {
        type: 'password',
        name: 'expassword',
        message: 'Enter a fake password',
      },
      {
        type: 'input',
        name: 'exinput',
        message: 'What is your middle name?',
      },
      {
        type: 'expand',
        name: 'exautocomplete',
        message: 'State?',
        choices: ['Oregon', 'Washington', 'California'],
        // You can leave this off unless you want to customize behavior
        suggest(s, choices) {
          return choices.filter(choice => {
            return choice.message.toLowerCase().startsWith(s.toLowerCase())
          })
        },
      },
    ])

    print.debug(result)




    // const spinner = toolbox.print.spin('Time for fun!')
    // await toolbox.system.run('sleep 10')

    // setTimeout(() => {
    //   spinner.color = 'yellow';
    //   spinner.text = 'Loading rainbows';
    // }, 1000);
    
    // spinner.succeed('woot!')
    // spinner.stopAndPersist({ symbol: '🚨', text: 'osnap!' })
  },
}
