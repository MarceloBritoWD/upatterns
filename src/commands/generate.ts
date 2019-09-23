import { GluegunToolbox } from 'gluegun'    

module.exports = {
  name: 'generate',
  alias: ['g'],
  description: 'Create a new configuration server.',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template,
      print: {
        success,
        error
      },
    } = toolbox
    
    const type = parameters.first;
    const name = parameters.second;
    const dashedName = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[ ]/g, '-').toLowerCase();
    
    if(!type || !name) {
      error('You need to pass the correct arguments');
      return;
    }
    
    if(type === 'config-server') {
      await template.generate({
        template: `config-server/src/main/java/br/com/springcloud/myconfig/MyConfigApplication.java.ejs`,
        target: `services/${dashedName}/src/main/java/br/com/springcloud/${name.toLowerCase()}/${name}Application.java`,
        props: { 
          name,
          lowerName: name.toLowerCase()
        }
      });
      
      await template.generate({
        template: `config-server/src/test/java/br/com/springcloud/myconfig/MyConfigApplicationTests.java.ejs`,
        target: `services/${dashedName}/src/test/java/br/com/springcloud/${name.toLowerCase()}/${name}ApplicationTests.java`,
        props: { 
          name,
          lowerName: name.toLowerCase()
        }
      });
      
      await template.generate({
        template: `config-server/.gitignore.ejs`,
        target: `services/${dashedName}/.gitignore`,
      });
      
      await template.generate({
        template: `config-server/pom.xml.ejs`,
        target: `services/${dashedName}/pom.xml`,
        props: { dashedName }
      });
    };
    success(`Generated ${name} configuration service!`)


    //TODO: Test new features:

    // const result = await prompt.ask([
    //   {
    //     type: 'list',
    //     name: 'exlist',
    //     message: 'What shoes are you wearing?',
    //     choices: ['Clown', 'Other'],
    //   },
    //   {
    //     type: 'confirm',
    //     name: 'exconfirm',
    //     message: 'Are you sure?',
    //   },
    //   {
    //     type: 'expand',
    //     name: 'exexpand',
    //     message: 'What action?',
    //     choices: [
    //       {
    //         key: 'y',
    //         name: 'Overwrite',
    //         value: 'overwrite',
    //       },
    //       {
    //         key: 'a',
    //         name: 'Overwrite this one and all next',
    //         value: 'overwrite_all',
    //       },
    //     ],
    //   },
    //   {
    //     type: 'checkbox',
    //     name: 'excheckbox',
    //     message: 'What are your favorite colors?',
    //     choices: ['red', 'blue', 'yellow'],
    //   },
    //   {
    //     type: 'select',
    //     name: 'exselect',
    //     message: 'What is your favorite team?',
    //     choices: ['Jazz', 'Trail Blazers', 'Lakers', 'Warriors'],
    //   },
    //   {
    //     type: 'multiselect',
    //     name: 'exmultiselect',
    //     message: 'What are your favorite months?',
    //     choices: ['January', 'July', 'September', 'November'],
    //   },
    //   {
    //     type: 'password',
    //     name: 'expassword',
    //     message: 'Enter a fake password',
    //   },
    //   {
    //     type: 'input',
    //     name: 'exinput',
    //     message: 'What is your middle name?',
    //   },
    //   {
    //     type: 'autocomplete',
    //     name: 'exautocomplete',
    //     message: 'State?',
    //     choices: ['Oregon', 'Washington', 'California'],
    //     // You can leave this off unless you want to customize behavior
    //     suggest(s, choices) {
    //       return choices.filter(choice => {
    //         return choice.message.toLowerCase().startsWith(s.toLowerCase())
    //       })
    //     },
    //   },
    // ])

    // print.debug(result)
  },
}
