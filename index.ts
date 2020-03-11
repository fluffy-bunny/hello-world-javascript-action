
import * as core from '@actions/core';
import * as crypto from "crypto";
import * as exec from '@actions/exec';
import * as io from '@actions/io';
import * as github from '@actions/github';
import { promises as fs } from 'fs';
import { existsSync, createWriteStream } from 'fs';
import { FormatType, SecretParser } from 'actions-secret-parser';
import * as https from 'https';
import * as path from 'path';
import * as util from 'util';


import { env } from 'process';

var azPath: string;
var prefix = !!process.env.AZURE_HTTP_USER_AGENT ? `${process.env.AZURE_HTTP_USER_AGENT}` : "";

const signtoolFileExtensions = [
  '.dll', '.exe', '.sys', '.vxd',
  '.msix', '.msixbundle', '.appx',
  '.appxbundle', '.msi', '.msp',
  '.msm', '.cab', '.ps1', '.psm1'
];
function sleep(seconds: number) {
  if (seconds > 0)
      console.log(`Waiting for ${seconds} seconds.`);
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function run() {
  try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

     // Set user agent varable
     let usrAgentRepo = crypto.createHash('sha256').update(`${process.env.GITHUB_REPOSITORY}`).digest('hex');
     let actionName = 'AzureLogin';
     let userAgentString = (!!prefix ? `${prefix}+` : '') + `GITHUBACTIONS_${actionName}_${usrAgentRepo}`;
     core.exportVariable('AZURE_HTTP_USER_AGENT', userAgentString);

     let creds = core.getInput('creds', { required: true });
     let secrets = new SecretParser(creds, FormatType.JSON);
     let kvu = secrets.getSecret("$.kvu", false);
     let kvs = secrets.getSecret("$.kvs", true);
     console.log(`secrets: ${secrets}`);
     console.log(`kvu: ${kvu}`);
     console.log(`kvs: ${kvs}`);

  }
  catch (err) {
      core.setFailed(`Action failed with error: ${err}`);
  }
}

async function executeAzCliCommand(command: string) {
  try {
      await exec.exec(`"${azPath}" ${command}`, [],  {}); 
  }
  catch(error) {
      throw new Error(error);
  }
}
run();
