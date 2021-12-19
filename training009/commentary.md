# トランジション
transition コンポーネントにラップされた要素が挿入あるいは削除されるときのcss クラスを設定する  
`<transition></transition>` で囲んだ部分に、描画の遷移中のクラスを設定する  
設定されるクラス名に対するcss トランジションを記述しておくことで、遷移アニメーションの実装ができる  

## transition タグのname要素
設定した値が、付与されるCSSクラスのプリフィックスになる  
設定しなかった場合、デフォルトは`v-` になる

## 設定されるtransitionクラス名と設定されるタイミング
Vue 2から、適用されるクラスの名称が変わっている模様  
`from` がトランジションの開始時の状態で、 `to` トランジション終了時、になっている  
| クラス名 | 設定されるタイミング |
|---|---|
| .xxx-enter-from | 現れる時の最初の状態。すぐに外される |
| .xxx-enter-active | 現れる時の遷移中に設定される |
| .xxx-enter-to | 現れる時のトランジションが終了したあとの状態 |
| .xxx-leave-from | 消える時の最初の状態。アニメーション開始のためにすぐに外れる |
| .xxx-leave-active | 消える時の遷移中に設定される |
| .xxx-leave-to | 消える時のトランジションが終了したあとの状態 |
※ xxxはtransition タグに設定したname属性の値

## css アニメーションとの連携
`@keyframes` で指定したcss アニメーションを `v-enter-active` や `v-leave-active` に設定する  

## transition と animation を併用する
`transition` プロパティ と `animation` プロパティを併用することもできる  
`v-enter-active`, `v-leave-active` に2つのプロパティをつけるだけでよい  
2つの要素の適用時間が異なる場合、遷移が完了したと判断される(つまり、`active` の要素が外れる)のは、  
長い方のアニメーションが完了するタイミングになるのがデフォルトの挙動  
どちらを優先するかは、`transition` タグに `type` プロパティを追加することで指定できる

## 初期描画時にtransitionを適用する
`<transition appear>` のように、 `appear` 属性を追加するだけで良い

## カスタムトランジションクラス
`<transition>` タグに属性を設定することで、要素の表示遷移時に追加されるクラス名を変更することができる
外部CSSライブラリで指定されたクラス名がある場合、カスタムトランジションクラスを使って動作を適用できる
```
	<!-- v-enter-active と v-enter-leaveの代わりに適用されるクラス名を記述 -->
    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__zoomOut"
    >
```

## 追加と削除が同時に起こる際のトランジションの実行順を指定する
`mode` 属性を指定することで、要素の表示を入れ替える際のトランジションの順序を設定できる  
`mode="in-out"` を指定すると、追加する要素のトランジションが完了してから、除去する要素のトランジションを開始する  
`mode="out-in"` を指定すると、除去する要素のトランジションが先に処理される  
多くの場合、`out-in` の動作のほうが自然に感じられる   

## リストトランジション
`<transition-group>` を利用することで、複数の要素をまとめて表示遷移させる事ができる  
ul-li など入れ子関係のhtml要素は、繰り返し利用される子要素だけを含める  
```
    <ul class="itemsList">
      <transition-group name="fade">
        <li
          v-for="(item, index) in items"
          :key="item.id"
          :data-index="item.id"
          v-on:click="removeItem(index)"
        >
          {{ item.number }}
        </li>
      </transition-group>
    </ul>
```

## 参考
- Enter & Leave Transitions(Vue 3 Docs)  
  https://v3.vuejs.org/guide/transitions-enterleave.html
