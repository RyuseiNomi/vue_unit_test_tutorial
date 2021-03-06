# vue_unit_test_tutorial

`Vue Test Util` + `jest` を用いて Vue コンポーネントに対する Unit テストのハンズオン的にやってみるリポジトリ

## 環境

* vue : 2.6.11
* vue/test-utils : 1.3.0
* jest : 27.4.3

## 実行手順

```
# 諸々のインストール
$ yarn install

# localhost での立ち上げ
$ yarn serve

# テスト実行
$ yarn test
```

## ディレクトリ構成

```
.
├── App.vue
├── __tests__ # テストコード
├── components # コンポーネント群
└── main.js
```

## 参考

[Vue コンポーネントの単体テスト](https://jp.vuejs.org/v2/cookbook/unit-testing-vue-components.html)

[Vue.js ユニットテストの基本まとめ](https://qiita.com/kskinaba/items/d23259060e6e13b7353c)
