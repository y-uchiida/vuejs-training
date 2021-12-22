# vuejs-training
Vue.jsの学習時に作成したコードをまとめています。
ソースと併せて、Commentaryも記載するようにしています。

## training001(2021.01.14)
基本的なVue.jsのコーディング方法を学習しました。  
内容はUdemy講座「Vue JS入門決定版！jQuery を使わない Web 開発 - 導入からアプリケーション開発まで体系的に動画で学ぶ」を基にしています。  
- 2021.12.07 追加:  
  いくつかのディレクティブについての挙動を学びなおしたので、注釈を付け加えてサンプルコードも修正しました  

## training002(2021.11.30)
Vue.jsでごく簡単なサンプルアプリケーション（TodoList）を作成しました。  
001の講座の続きを題材としていますが、実際には Vite でvue プロジェクトを作ってSFCで構成していたりなど、  
けっこう違うことをしています...

## training003(2021.12.01)
training002に引き続き、動画講座の内容を基にVite でvueプロジェクトを作っていろいろ動作を確認しました。  
基本の機能をおおむね理解することができました。  

## training004(2021.12.02)
動画講座の内容をもとに、CoinDesk 社のBitCoin 価格を取得する機能を実装しました。  
あとから気づきましたが、Vueの公式ドキュメントにも同じ題材でハンズオンがありました。  
今回もVite でプロジェクト作成を行い、SFCを追加する形で実装しています  
axios の導入に少し手間取りました  

## training005(2021.12.04)
動画講座の内容をもとに、Qiita 社のAPIでQiita上の記事をキーワード検索してリアルタイム表示する機能を実装しました  
axios に続いてlodash を導入しましたが、axiosとは異なる方法(利用する関数だけ読み込み)をしています

## training006(2021.12.09)
動画講座の内容をもとに、Vueインスタンスの構造とライフサイクルフックについて軽く学びました  
動画講座がVue 2のバージョンだったので、Vue 3との違い(destroyedフックが廃止されているなど)を意識しつつコードを書いていきました

## training007(2021.12.10)
動画講座を見て、コンポーネント間でのプロパティ(データ)の連携方法を学びました  
こちらも動画講座がVue 2のものだったので、変更された内容に注意しながらサンプルを実装しました

## training008(2021.12.11)
動画講座を見て、カスタムディレクティブの仕様を学びました  
そのあとVue 3のドキュメントの例をもとにして、SFCでカスタムディレクティブを実装してみました  
Composition API で記述してみたかったのですが、まだいまいち概念が掴みきれていないので、従来どおりの記法で作成しています。。。  

## training009(2021.12.20)
トランジションとアニメーションの挙動についての動画講義を見て、いくつかのパターンを実装してみました  

## training010(2021.12.22)
vue-router を使ってかんたんなSPAのサンプルを実装しました  
Vue 3 では vue-router v4を利用するようなのでそちらに挑戦しましたが、  
参考にした動画講座や検索でマッチする情報と違っていて苦労しました…  
router-link のプロパティなども変わっていて、v3 からの切り替えに苦労しそうだな～という印象でした  
