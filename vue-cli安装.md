# <img src="https://cn.vuejs.org/images/logo.png" width="50px" height="50px">Vue 介绍 

### 1.安装nodejs
  [node-v8.9.3-x64.msi](https://npm.taobao.org/mirrors/node/v8.9.3/node-v8.9.3-x64.msi)
  如出现2503,2502错误
  msiexec /package node-v8.9.3-x64.msi  
 [node-v8.9.3-win-x64.zip](https://npm.taobao.org/mirrors/node/v8.9.3/node-v8.9.3-win-x64.zip)
  这个可以直接解压到C盘：  
   C:\node-v8.9.3-win-x64    
    **设置一下全局下载的包存放路径，和缓存路径** 
 -  npm config set prefix ="C:\node-v8.9.3-win-x64"  
 -  npm config set cache ="C:\node-v8.9.3-win-x64\node_cache"  
    **设置环境变量**  
 -  NODE_HOME: C:\node-v8.9.3-win-x64  
 - NODE_PATH: C:\node-v8.9.3-win-x64\node_modules  
 -  PATH:%NODE_HOME%;%NODE_PATH%  

### 2.安装vue-cli
  ``` 
  npm install --global vue-cli 
  ```
### 3.用vue-cli 构建一个vue项目;cmd:
```
  vue init webpack vue-node
  cd vue-node
  npm install
  npm run dev
```

==备注==
 vue init webpack vue-node安装过程  
dministrator@AFAAW-704030720 MINGW64 /f/ideaworkspace/m/studyvue (master)  
``` $ vue init webpack vue-node ```
```
  A newer version of vue-cli is available.

  latest:    2.9.2
  installed: 2.8.2

? Project name (vue-node)
? Project name vue-node
? Project description (A Vue.js project)
? Project description A Vue.js project
? Author (qq57694878 <57694878@qq.com>)
? Author qq57694878 <57694878@qq.com>
? Vue build (Use arrow keys)
> Runtime + Compiler: recommended for most users
? Vue build runtime
? Install vue-router? (Y/n) Y
? Install vue-router? Yes
? Use ESLint to lint your code? (Y/n) n
? Use ESLint to lint your code? No
? Set up unit tests (Y/n) n
? Set up unit tests No
? Setup e2e tests with Nightwatch? (Y/n) n
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (reco
? Should we run `npm install` for you after the project has been created? (reco
mmended) npm
   vue-cli · Generated "vue-node".

Installing project dependencies ...
```
