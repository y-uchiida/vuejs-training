# Commentary of training002

ここではフォーム入力のバインディングと双方向データバインディングの簡易な例として、シンプルなTodoListアプリを作成しました。  
利用した構文はtraining001のときのものとほとんど変わらないので、すこし応用を取り入れて、Viteでプロジェクトを構築して  
単一ファイルコンポーネントを使って実装してみました。

## Vite でのVueプロジェクト作成
`vite@latest` から、対話的にプロジェクトを作成できました。
```
$ npm init vite@latest
✔ Project name: … todo_apps
? Select a framework: › - Use arrow-keys. Return to submit.
    vanilla
❯   vue
    react
    preact
    lit
    svelte
? Select a variant: › - Use arrow-keys. Return to submit.
❯   vue
    vue-ts

Scaffolding project in /home/y-uchiida/develop/todo_apps...

Done. Now run:

  cd todo_apps
  npm install
  npm run dev

# 指示通りにコマンドを実行
$ cd todo_apps
$ npm install

# 中略

$ npm run dev

```

`npm run dev` を実行するとlocalhost:3000でアプリケーションにアクセスできるようになりました。

余談ですが、npm のinit とinstall がめちゃめちゃ時間かかります。  
WSL特有の問題が発生しているっぽい(Git Bashでやると数十秒で終わる)のですが、原因が全くつかめていません。  
WSL側のファイルシステム上で実行しているので、Windowsホスト側とのデータのやり取りは関係ないと思うのですが...  
どうしてもダメそうなら、GitBashを使うか、Windows上でDocker使うことも検討しようと思います。  

## 単一ファイルコンポーネントの作成
作成したプロジェクトのディレクトリに`src` があるので、この中を編集していきます。  
1. `src/components/TaskList.vue` を作成
  ここに、タスクの追加や削除の機能を実装していきます。
  作成した内容はほぼ講義動画の通りでしたが、`export default` で返り値を返す必要があることなど、
  単一ファイルコンポーネントならではの変更がありました。

2. `src/App.vue` でTaskList.vueをインポートし、templateに配置
  `App.vue` がマウントされるので、この中で`TaskList.vue` が配置されるように実装します。
  といっても、`script` タグ内でimportを書き、`template` タグ内にTaskList コンポーネントを追加するだけでした。

