#!/usr/bin/env node

const program = require('commander');
const rp = require('request-promise');
const chalk = require('chalk');

program
  .command('req')
  .description('Make an HTTP request')
  .option('-u, --uri [uri]', 'Which URI to use.')
  .option('-m, --method [method]', 'Which method to use.')
  .option('-h, --headers [headers]', 'Which headers to use.')
  .action(function(options){
    const rpOpts = {
      uri: options.uri,
      method: options.method || 'GET',
      headers: options.headers || 'Content-Type: application/json',
    };

    rp(rpOpts)
      .then((data) => console.log(chalk.green(data)))
      .catch((err) => console.log(chalk.red(err)));
  })

program.parse(process.argv);
  

