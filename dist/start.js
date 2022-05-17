(()=>{"use strict";var e={351:function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(r(87));const i=r(278);function issueCommand(e,t,r){const n=new Command(e,t,r);process.stdout.write(n.toString()+o.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const s="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=s+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const n=this.properties[r];if(n){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(n)}`}}}}e+=`${s}${escapeData(this.message)}`;return e}}function escapeData(e){return i.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return i.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=r(351);const s=r(717);const a=r(278);const u=o(r(87));const c=o(r(622));var p;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(p=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=a.toCommandValue(t);process.env[e]=r;const n=process.env["GITHUB_ENV"]||"";if(n){const t="_GitHubActionsFileCommandDelimeter_";const n=`${e}<<${t}${u.EOL}${r}${u.EOL}${t}`;s.issueCommand("ENV",n)}else{i.issueCommand("set-env",{name:e},r)}}t.exportVariable=exportVariable;function setSecret(e){i.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){s.issueCommand("PATH",e)}else{i.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${c.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}return r.trim()}t.getInput=getInput;function setOutput(e,t){process.stdout.write(u.EOL);i.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){i.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=p.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){i.issueCommand("debug",{},e)}t.debug=debug;function error(e){i.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){i.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+u.EOL)}t.info=info;function startGroup(e){i.issue("group",e)}t.startGroup=startGroup;function endGroup(){i.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return n(this,void 0,void 0,(function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r}))}t.group=group;function saveState(e,t){i.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(r(747));const i=n(r(87));const s=r(278);function issueCommand(e,t){const r=process.env[`GITHUB_${e}`];if(!r){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!o.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}o.appendFileSync(r,`${s.toCommandValue(t)}${i.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var o=t[r]={exports:{}};var i=true;try{e[r].call(o.exports,o,o.exports,__nccwpck_require__);i=false}finally{if(i)delete t[r]}return o.exports}(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};(()=>{__nccwpck_require__.r(r);var e=__nccwpck_require__(186);const t=require("child_process");(async()=>{let r=(0,t.execFileSync)("ssh-agent").toString();let[,n,o]=/(SSH_AUTH_SOCK)=(.*); export SSH_AUTH_SOCK/g.exec(r)||[];let[,i,s]=/(SSH_AGENT_PID)=(.*); export SSH_AGENT_PID/g.exec(r)||[];if(s!==undefined){console.log("Exporting PID variable...");e.exportVariable(i,s)}if(o!==undefined){console.log("Exporting SOCK variable...");e.exportVariable(n,o)}})().catch((t=>{console.log("Something went wrong...");e.setFailed(t.message)}))})();module.exports=r})();